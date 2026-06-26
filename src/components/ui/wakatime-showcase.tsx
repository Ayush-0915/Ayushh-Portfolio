import { Zap, Clock, TrendingUp, Trophy, History, Terminal, Database, Bot, Sparkles, Monitor, AppWindow } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

const Counter = ({ value, duration = 1.5, trigger = true }: { value: string | number, duration?: number, trigger?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const valStr = String(value);
  const match = valStr.match(/^([0-9,.]+)/);
  const targetValue = match ? parseFloat(match[1].replace(/,/g, '')) : 0;
  const unit = valStr.substring(match ? match[0].length : 0).trim();

  useEffect(() => {
    if (isInView && trigger && targetValue > 0) {
      const controls = animate(0, targetValue, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, trigger, targetValue, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {trigger ? count.toLocaleString() : "..."}
      {unit && (
        <span className="text-[10px] md:text-xs font-bold opacity-60 ml-1 font-mono uppercase tracking-wider">
          {unit}
        </span>
      )}
    </span>
  );
};

const WeeklyBarChart = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) return null;
  const maxHours = Math.max(...data.map(d => d.hours), 1);
  
  return (
    <div className="w-full bg-card/25 border border-border/40 rounded-3xl p-6 flex flex-col justify-between h-[260px] backdrop-blur-md relative overflow-hidden group">
      {/* Background glow hover */}
      <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex justify-between items-center mb-4 relative z-10">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <History className="w-3.5 h-3.5 text-primary" /> Weekly Coding Activity
        </span>
        <span className="text-[10px] font-mono text-primary font-bold">LAST 7 DAYS</span>
      </div>
      
      <div className="flex items-end justify-between h-[140px] px-2 relative z-10">
        {data.map((day, idx) => {
          const heightPercent = (day.hours / maxHours) * 100;
          return (
            <div key={day.day} className="flex flex-col items-center group/bar flex-grow h-full justify-end relative">
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 bg-background border border-border/85 text-foreground text-[10px] font-mono py-1.5 px-2.5 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap shadow-xl transform translate-y-1 group-hover/bar:translate-y-0">
                {day.hours} hrs ({day.date})
              </div>
              
              {/* Bar */}
              <div className="w-5 sm:w-7 bg-muted/10 rounded-t-lg overflow-hidden h-full flex items-end">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.max(5, heightPercent)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.05 }}
                  className="w-full bg-gradient-to-t from-primary/10 via-primary/50 to-primary rounded-t-lg relative group-hover/bar:brightness-125 transition-all"
                />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground mt-2 font-bold">{day.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MonthlyLineChart = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) return null;
  const maxHours = Math.max(...data.map(d => d.hours), 1);
  const width = 500;
  const height = 150;
  const paddingX = 40;
  const paddingY = 25;

  const points = data.map((d, i) => {
    const x = paddingX + (i * (width - 2 * paddingX)) / (data.length - 1);
    const y = height - paddingY - (d.hours / maxHours) * (height - 2 * paddingY);
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <div className="w-full bg-card/25 border border-border/40 rounded-3xl p-6 flex flex-col justify-between h-[260px] backdrop-blur-md relative overflow-hidden group">
      {/* Background glow hover */}
      <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="flex justify-between items-center mb-2 relative z-10">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-primary" /> Monthly Coding Trend
        </span>
        <span className="text-[10px] font-mono text-primary font-bold">TREND ANALYSIS</span>
      </div>
      
      <div className="w-full flex-grow relative z-10 mt-2 h-[140px]">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(var(--primary-rgb),0.3)" />
              <stop offset="100%" stopColor="rgba(var(--primary-rgb),0.0)" />
            </linearGradient>
          </defs>

          {/* Area under line */}
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            d={areaPath}
            fill="url(#lineGrad)"
          />

          {/* Connected line path */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            d={linePath}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Render points */}
          {points.map((p, i) => (
            <g key={i} className="group/point">
              <circle
                cx={p.x}
                cy={p.y}
                r="4"
                className="fill-background stroke-primary stroke-2 group-hover/point:r-5 transition-all duration-300 cursor-pointer"
              />
              <text
                x={p.x}
                y={height - 6}
                textAnchor="middle"
                fontSize="8"
                className="fill-muted-foreground font-mono font-bold"
              >
                {data[i].label}
              </text>
              <text
                x={p.x}
                y={p.y - 10}
                textAnchor="middle"
                fontSize="8"
                className="fill-primary font-mono font-bold"
              >
                {data[i].hours}h
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export const WakaTimeShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  const fetchData = () => {
    setLoading(true);
    setError(false);
    fetch('/api/wakatime')
      .then(r => {
        if (!r.ok) throw new Error("API Connection Failed");
        return r.json();
      })
      .then(result => {
        if (result) {
          setData(result);
        } else {
          setError(true);
        }
      })
      .catch(e => {
        console.error("WakaTime fetch failed:", e);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setMounted(true);
    fetchData();
    const interval = setInterval(fetchData, 30 * 60 * 1000); // 30 minutes auto-refresh
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const wakaStats = [
    { label: "Total Coding Time", value: loading || error ? "..." : (data?.stats?.totalCodingTime || "—") },
    { label: "Today's Coding", value: loading || error ? "..." : (data?.stats?.todayCodingTime || "—") },
    { label: "Last 7 Days", value: loading || error ? "..." : (data?.stats?.last7Days || "—") },
    { label: "Last 30 Days", value: loading || error ? "..." : (data?.stats?.last30Days || "—") },
    { label: "Daily Average", value: loading || error ? "..." : (data?.stats?.dailyAverage || "—") },
    { label: "Best Coding Day", value: loading || error ? "..." : (data?.stats?.bestCodingDay?.text || "—") },
    { label: "Coding Streak", value: loading || error ? "..." : (data?.stats?.currentStreak || "—") },
    { label: "Total Active Days", value: loading || error ? "..." : (data?.stats?.totalActiveDays || "—") },
    { label: "Projects Worked On", value: loading || error ? "..." : (data?.stats?.projectsWorkedOn || "—") },
    { label: "Languages Used", value: loading || error ? "..." : (data?.stats?.languagesUsed || "—") },
    { label: "Most Used Language", value: loading || error ? "..." : (data?.stats?.mostUsedLanguage || "—") },
    { label: "Preferred Editor", value: loading || error ? "..." : (data?.environment?.editor || "—") },
  ];

  const techLogos: Record<string, string> = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'FastAPI': 'https://cdn.simpleicons.org/fastapi',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.simpleicons.org/nextdotjs',
    'Supabase': 'https://cdn.simpleicons.org/supabase',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  };

  return (
    <section id='wakatime-stats' className='w-full max-w-[1700px] mx-auto px-6 py-12 relative overflow-hidden'>
      {/* Custom Styles for Scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .waka-scroll::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .waka-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .waka-scroll::-webkit-scrollbar-thumb {
          background: rgba(var(--primary-rgb), 0.2);
          border-radius: 2px;
        }
        .waka-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--primary-rgb), 0.4);
        }
      `}} />

      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "relative bg-white dark:bg-card border border-black/5 dark:border-border/50",
          "rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-12 transition-all duration-700",
          loading && "opacity-60"
        )}
      >
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8 relative z-10 mb-12 border-b border-border/30 pb-10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 text-primary">
              <Zap className="w-6 h-6 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.4em] uppercase">LIVE DEVELOPER ANALYTICS</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95em] text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
              Code. Build. Ship.<br />
              <span className="text-primary italic">Every hour tells a story.</span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 max-w-2xl font-sans font-medium">
              Real-time coding analytics powered by WakaTime, showcasing my engineering consistency, development workflow, and continuous learning journey.
            </p>
          </div>

          {/* Pulsating Sync Status Badge */}
          <div className="flex flex-col items-end gap-1.5 bg-background/50 border border-border/40 p-4 rounded-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono font-black tracking-wider uppercase text-emerald-400">
                🟢 LIVE
              </span>
            </div>
            <span className="text-[9px] font-mono text-muted-foreground font-medium">
              Last Sync: {data?.lastSyncTimestamp || "Just now"}
            </span>
            <span className="text-[9px] font-mono text-muted-foreground font-medium">
              Current Time: {currentTime || "Loading..."}
            </span>
            <span className="text-[9px] font-mono text-primary font-bold">
              Auto-refresh: Every 30m
            </span>
          </div>
        </div>

        {error ? (
          // Premium error fallback card with retry
          <div className="flex flex-col items-center justify-center py-12 text-center relative z-10 max-w-md mx-auto">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mb-4 text-red-500">
              <Zap className="w-8 h-8 rotate-180 animate-bounce" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2">Sync Connection Failed</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              We encountered an issue establishing a secure stream connection to the WakaTime stats API. Please check your credentials or try again.
            </p>
            <button
              onClick={fetchData}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold hover:bg-primary/20 transition-all active:scale-95 text-xs uppercase tracking-wider"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Retry Sync Connection</span>
            </button>
          </div>
        ) : loading ? (
          // Loading skeletons
          <div className="space-y-8 animate-pulse relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-20 bg-muted/10 border border-border/10 rounded-2xl" />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 h-[260px] bg-muted/10 border border-border/10 rounded-3xl" />
              <div className="lg:col-span-5 h-[260px] bg-muted/10 border border-border/10 rounded-3xl" />
              <div className="lg:col-span-3 h-[260px] bg-muted/10 border border-border/10 rounded-3xl" />
            </div>
          </div>
        ) : (
          // Full Real-time Dashboard UI
          <div className="space-y-8 relative z-10">
            
            {/* 12 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {wakaStats.map((s, i) => (
                <div key={i} className="bg-background/40 hover:bg-background/80 border border-border/30 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 group hover:border-primary/30">
                  <span className="text-xl md:text-2xl font-black text-primary tabular-nums tracking-tighter block">
                    <Counter value={s.value} trigger={!loading} />
                  </span>
                  <span className="text-[9px] font-bold uppercase opacity-55 tracking-wider mt-2 block">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Dashboard Analytics charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Language Distribution Progress bars */}
              <div className="lg:col-span-4 bg-card/25 border border-border/40 rounded-3xl p-6 flex flex-col justify-between h-[260px] backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 w-full h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-primary" /> Language Distribution
                    </span>
                  </div>
                  <div className="space-y-3.5 overflow-y-auto pr-1 flex-grow waka-scroll max-h-[170px]">
                    {data?.languages?.map((lang: any) => (
                      <div key={lang.name} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-bold">
                          <span className="text-foreground/90">{lang.name}</span>
                          <span className="text-primary font-mono">{lang.percent}% <span className="text-[9px] text-muted-foreground opacity-70 ml-1">({lang.text})</span></span>
                        </div>
                        <div className="w-full h-1.5 bg-muted/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Weekly SVG bar chart */}
              <div className="lg:col-span-5">
                <WeeklyBarChart data={data?.weeklyActivity} />
              </div>

              {/* Dev Environment Info */}
              <div className="lg:col-span-3 bg-card/25 border border-border/40 rounded-3xl p-6 flex flex-col justify-between h-[260px] backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-2 flex-shrink-0">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Monitor className="w-3.5 h-3.5 text-primary" /> Dev Environment
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {/* Editor Usage */}
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground block border-b border-border/20 pb-1">Editors</span>
                      <div className="space-y-2 max-h-[85px] overflow-y-auto waka-scroll pr-0.5">
                        {data?.editors?.slice(0, 3).map((editor: any) => (
                          <div key={editor.name} className="space-y-1">
                            <div className="flex justify-between text-[10px] font-bold">
                              <span className="text-foreground/80 truncate max-w-[50px]" title={editor.name}>{editor.name}</span>
                              <span className="text-primary font-mono">{editor.percent}%</span>
                            </div>
                            <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${editor.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-primary rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* OS Usage */}
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground block border-b border-border/20 pb-1">OS Usage</span>
                      <div className="space-y-2 max-h-[85px] overflow-y-auto waka-scroll pr-0.5">
                        {data?.operatingSystems?.slice(0, 3).map((os: any) => (
                          <div key={os.name} className="space-y-1">
                            <div className="flex justify-between text-[10px] font-bold">
                              <span className="text-foreground/80 truncate max-w-[50px]" title={os.name}>{os.name}</span>
                              <span className="text-primary font-mono">{os.percent}%</span>
                            </div>
                            <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${os.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-primary rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1 border-t border-border/20 pt-3 mt-auto">
                    <div className="text-center">
                      <span className="text-[8px] font-mono uppercase text-muted-foreground block">Peak Hour</span>
                      <span className="text-[9px] font-bold text-foreground truncate block">{data?.environment?.mostProductiveHour}</span>
                    </div>
                    <div className="text-center border-x border-border/20 px-1">
                      <span className="text-[8px] font-mono uppercase text-muted-foreground block">Peak Day</span>
                      <span className="text-[9px] font-bold text-foreground truncate block">{data?.environment?.mostProductiveDay}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-[8px] font-mono uppercase text-muted-foreground block">Avg Session</span>
                      <span className="text-[9px] font-bold text-foreground truncate block">{data?.environment?.averageSessionLength}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 of Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Monthly Trend SVG Line Chart */}
              <div className="lg:col-span-6">
                <MonthlyLineChart data={data?.monthlyTrend} />
              </div>

              {/* Most Active Projects */}
              <div className="lg:col-span-6 bg-card/25 border border-border/40 rounded-3xl p-6 flex flex-col justify-between h-[260px] backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 w-full h-full flex flex-col">
                  <div className="flex justify-between items-center mb-3 flex-shrink-0">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-primary" /> Most Active Projects
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground font-bold">WAKATIME LOG</span>
                  </div>
                  <div className="space-y-3.5 overflow-y-auto pr-1 flex-grow waka-scroll max-h-[170px]">
                    {data?.projects?.map((p: any) => (
                      <div key={p.name} className="flex items-center justify-between gap-4 border-b border-border/10 pb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-xs font-bold text-foreground/90">{p.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-muted-foreground">{p.text}</span>
                          <span className="text-xs font-mono font-bold text-primary w-10 text-right">{p.percent}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Productivity Insights Grid & Technology Badges */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-border/30 pt-8">
              
              {/* Insights */}
              <div className="md:col-span-7 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-4">
                  <Trophy className="w-4 h-4 text-primary" /> Productivity Insights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data?.insights?.map((insight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground bg-muted/5 border border-border/20 p-3 rounded-xl hover:border-primary/20 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies list matching WakaTime */}
              <div className="md:col-span-5 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Database className="w-4 h-4 text-primary" /> WakaTime Active Technologies
                </h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {data?.languages?.map((lang: any) => (
                    <div key={lang.name} className="flex items-center gap-2 bg-background/50 border border-border/50 rounded-xl px-3 py-1.5 hover:border-primary/30 transition-all hover:scale-105 group/badge cursor-default">
                      {techLogos[lang.name] ? (
                        <img src={techLogos[lang.name]} alt={lang.name} className="w-4 h-4 object-contain grayscale group-hover/badge:grayscale-0 transition-all" />
                      ) : (
                        <Terminal className="w-3.5 h-3.5 text-primary" />
                      )}
                      <span className="text-[11px] font-bold text-foreground/80 group-hover/badge:text-foreground">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer info line */}
        <div className="mt-12 pt-6 border-t border-black/5 dark:border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-black uppercase opacity-40 tracking-wider font-mono">
            Live Engineering Analytics • Powered by WakaTime
          </p>
          <div className="flex items-center gap-2 opacity-50 bg-background/40 border border-border/40 py-1 px-3 rounded-full">
            <div className={cn(
              "w-1.5 h-1.5 rounded-full animate-pulse",
              data?.live ? "bg-emerald-400" : "bg-zinc-400"
            )} />
            <span className="text-[9px] font-mono uppercase font-bold tracking-wider">
              {data?.live ? "Live Authenticated Stream" : "Cached Offline stream"}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WakaTimeShowcase;
