'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = 'ai_ml' | 'data_science' | 'frontend' | 'backend' | 'cloud' | 'tools_projects';

interface SkillNode {
  name: string;
  category: Category;
  isStrong: boolean;
  projects?: string[];
}

const SKILL_NODES: SkillNode[] = [
  // AI & Machine Learning
  { name: 'Artificial Intelligence', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI', 'CareerNova'] },
  { name: 'Machine Learning', category: 'ai_ml', isStrong: true, projects: ['CreditWise', 'Healthcare AI', 'Bitcoin Sentiment Analysis', 'Car Evaluation'] },
  { name: 'Deep Learning', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'Generative AI', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI', 'CareerNova'] },
  { name: 'Agentic AI', category: 'ai_ml', isStrong: false, projects: ['NEXUS AI'] },
  { name: 'Prompt Engineering', category: 'ai_ml', isStrong: false, projects: ['CareerNova', 'NEXUS AI'] },
  { name: 'RAG', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'LangChain', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'LLMs', category: 'ai_ml', isStrong: false, projects: ['NEXUS AI', 'CareerNova'] },
  { name: 'NLP', category: 'ai_ml', isStrong: false, projects: ['Fake News Detection', 'Bitcoin Sentiment Analysis'] },
  { name: 'Computer Vision', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'TensorFlow', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'PyTorch', category: 'ai_ml', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'Scikit-learn', category: 'ai_ml', isStrong: false, projects: ['CreditWise', 'Healthcare AI', 'Fake News Detection', 'Car Evaluation', 'Bitcoin Sentiment Analysis'] },
  { name: 'OpenCV', category: 'ai_ml', isStrong: false, projects: ['NEXUS AI'] },
  { name: 'Ultralytics YOLO', category: 'ai_ml', isStrong: false, projects: ['NEXUS AI'] },

  // Data Science
  { name: 'Python', category: 'data_science', isStrong: true, projects: ['NEXUS AI', 'CareerNova', 'CreditWise', 'Bitcoin Sentiment Analysis', 'Healthcare AI'] },
  { name: 'Pandas', category: 'data_science', isStrong: false, projects: ['CreditWise', 'Netflix Analytics', 'Uber Analytics', 'Bitcoin Sentiment Analysis'] },
  { name: 'NumPy', category: 'data_science', isStrong: false, projects: ['CreditWise', 'Uber Analytics', 'Bitcoin Sentiment Analysis'] },
  { name: 'Matplotlib', category: 'data_science', isStrong: false, projects: ['CreditWise', 'Netflix Analytics', 'Car Evaluation'] },
  { name: 'Plotly', category: 'data_science', isStrong: false, projects: ['Uber Analytics', 'Bitcoin Sentiment Analysis'] },
  { name: 'Seaborn', category: 'data_science', isStrong: false, projects: ['Uber Analytics', 'Bitcoin Sentiment Analysis'] },
  { name: 'Power BI', category: 'data_science', isStrong: false },
  { name: 'Tableau', category: 'data_science', isStrong: false },
  { name: 'Data Analytics', category: 'data_science', isStrong: false, projects: ['Netflix Analytics', 'Uber Analytics'] },
  { name: 'Feature Engineering', category: 'data_science', isStrong: false, projects: ['CreditWise', 'Bitcoin Sentiment Analysis'] },
  { name: 'Model Evaluation', category: 'data_science', isStrong: false, projects: ['CreditWise', 'Healthcare AI'] },
  { name: 'EDA', category: 'data_science', isStrong: false, projects: ['Netflix Analytics', 'Uber Analytics'] },

  // Frontend
  { name: 'React', category: 'frontend', isStrong: true, projects: ['NEXUS AI', 'CareerNova'] },
  { name: 'Next.js', category: 'frontend', isStrong: true, projects: ['Portfolio'] },
  { name: 'TypeScript', category: 'frontend', isStrong: false, projects: ['NEXUS AI', 'CareerNova', 'Portfolio'] },
  { name: 'JavaScript', category: 'frontend', isStrong: false, projects: ['Portfolio'] },
  { name: 'HTML5', category: 'frontend', isStrong: false },
  { name: 'CSS3', category: 'frontend', isStrong: false },
  { name: 'Tailwind CSS', category: 'frontend', isStrong: false, projects: ['CareerNova', 'Portfolio'] },

  // Backend
  { name: 'FastAPI', category: 'backend', isStrong: true, projects: ['NEXUS AI'] },
  { name: 'Flask', category: 'backend', isStrong: false },
  { name: 'REST APIs', category: 'backend', isStrong: false, projects: ['NEXUS AI', 'CareerNova'] },
  { name: 'Authentication', category: 'backend', isStrong: false, projects: ['CareerNova'] },
  { name: 'JSON', category: 'backend', isStrong: false },
  { name: 'SQLite', category: 'backend', isStrong: false },
  { name: 'PostgreSQL', category: 'backend', isStrong: false },
  { name: 'Supabase', category: 'backend', isStrong: false, projects: ['CareerNova', 'NEXUS AI'] },

  // Cloud & DevOps
  { name: 'Docker', category: 'cloud', isStrong: false },
  { name: 'Git', category: 'cloud', isStrong: false },
  { name: 'GitHub', category: 'cloud', isStrong: false },
  { name: 'Google Cloud', category: 'cloud', isStrong: false },
  { name: 'Azure', category: 'cloud', isStrong: false },
  { name: 'AWS', category: 'cloud', isStrong: false },
  { name: 'Vercel', category: 'cloud', isStrong: false, projects: ['CareerNova', 'Portfolio'] },
  { name: 'Streamlit', category: 'cloud', isStrong: false, projects: ['CreditWise', 'Healthcare AI', 'Car Evaluation'] },
  { name: 'Linux', category: 'cloud', isStrong: false },

  // Tools & Projects
  { name: 'VS Code', category: 'tools_projects', isStrong: false },
  { name: 'Jupyter Notebook', category: 'tools_projects', isStrong: false, projects: ['Netflix Analytics', 'Uber Analytics', 'Bitcoin Sentiment Analysis'] },
  { name: 'Google Colab', category: 'tools_projects', isStrong: false },
  { name: 'Anaconda', category: 'tools_projects', isStrong: false },
  { name: 'npm', category: 'tools_projects', isStrong: false },
  { name: 'Node.js', category: 'tools_projects', isStrong: false },
  { name: 'Figma', category: 'tools_projects', isStrong: false },
  { name: 'NEXUS AI', category: 'tools_projects', isStrong: false },
  { name: 'CareerNova', category: 'tools_projects', isStrong: false },
  { name: 'CreditWise', category: 'tools_projects', isStrong: false },
  { name: 'Healthcare AI', category: 'tools_projects', isStrong: false },
  { name: 'Fake News Detection', category: 'tools_projects', isStrong: false },
  { name: 'Bitcoin Sentiment Analysis', category: 'tools_projects', isStrong: false },
  { name: 'Car Evaluation', category: 'tools_projects', isStrong: false },
  { name: 'Netflix Analytics', category: 'tools_projects', isStrong: false },
  { name: 'Uber Analytics', category: 'tools_projects', isStrong: false },
];

const CATEGORY_META: Record<Category, { label: string; hue: number; color: string }> = {
  ai_ml:           { label: 'AI & Machine Learning', hue: 155, color: '#34d399' },
  data_science:    { label: 'Data Science',          hue: 215, color: '#60a5fa' },
  frontend:        { label: 'Frontend',              hue: 265, color: '#a78bfa' },
  backend:         { label: 'Backend',               hue: 35,  color: '#fbbf24' },
  cloud:           { label: 'Cloud & DevOps',        hue: 285, color: '#c084fc' },
  tools_projects:  { label: 'Projects & Tools',      hue: 0,   color: '#fb7185' },
};

// ─── Canvas Background ──────────────────────────────────────────────────────

function CanvasBackground({ width, height, mouseRef }: { width: number; height: number; mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number; hue: number; alpha: number }[]>([]);
  const initRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Initialize particles once
    if (!initRef.current) {
      const count = Math.min(Math.floor((width * height) / 12000), 80);
      const hues = [155, 215, 265, 35, 285, 0];
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        hue: hues[Math.floor(Math.random() * hues.length)],
        alpha: Math.random() * 0.4 + 0.1,
      }));
      initRef.current = true;
    }

    const particles = particlesRef.current;
    let time = 0;

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Animated grid
      ctx.strokeStyle = `rgba(255,255,255,0.025)`;
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      const offsetX = (time * 200) % gridSize;
      const offsetY = (time * 120) % gridSize;

      for (let x = -gridSize + offsetX; x < width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Particles
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle mouse attraction
        if (mx > 0 && my > 0) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250 && dist > 5) {
            p.vx += (dx / dist) * 0.015;
            p.vy += (dy / dist) * 0.015;
          }
        }

        // Speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.8) {
          p.vx *= 0.98;
          p.vy *= 0.98;
        }

        // Glow
        const pulse = Math.sin(time * 2 + p.x * 0.01) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.alpha * 0.15 * pulse})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.alpha * pulse})`;
        ctx.fill();
      }

      // Neural network lines
      const lineThreshold = Math.min(width * 0.15, 120);
      ctx.lineWidth = 0.3;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineThreshold) {
            const alpha = (1 - dist / lineThreshold) * 0.12;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Scan line effect
      const scanY = (time * 400) % (height + 40) - 20;
      const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      scanGrad.addColorStop(0, 'rgba(255,255,255,0)');
      scanGrad.addColorStop(0.5, 'rgba(255,255,255,0.015)');
      scanGrad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 20, width, 40);

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [width, height, mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height }}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

// ─── Tooltip ────────────────────────────────────────────────────────────────

function Tooltip({ node, x, y, containerWidth }: { node: SkillNode; x: number; y: number; containerWidth: number }) {
  const meta = CATEGORY_META[node.category];
  const tooltipWidth = 220;
  const clampedX = Math.min(Math.max(x, tooltipWidth / 2 + 12), containerWidth - tooltipWidth / 2 - 12);

  return (
    <div
      className="absolute z-[200] pointer-events-none animate-in fade-in zoom-in-95 duration-150"
      style={{
        left: clampedX,
        top: y - 14,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <div
        className="rounded-xl px-4 py-3 backdrop-blur-xl border shadow-2xl min-w-[200px]"
        style={{
          background: `linear-gradient(135deg, hsla(${meta.hue}, 40%, 8%, 0.95), hsla(${meta.hue}, 30%, 4%, 0.98))`,
          borderColor: `hsla(${meta.hue}, 60%, 50%, 0.3)`,
          boxShadow: `0 0 30px hsla(${meta.hue}, 60%, 50%, 0.15), 0 20px 40px rgba(0,0,0,0.5)`,
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: meta.color, boxShadow: `0 0 8px ${meta.color}` }}
          />
          <span className="text-sm font-bold text-white tracking-tight">{node.name}</span>
        </div>
        <div
          className="text-[10px] font-mono uppercase tracking-[0.15em] mb-2"
          style={{ color: meta.color }}
        >
          {meta.label}
        </div>
        {node.projects && node.projects.length > 0 && (
          <div className="border-t border-white/10 pt-2 mt-1">
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Used in</div>
            <div className="flex flex-wrap gap-1">
              {node.projects.map(p => (
                <span
                  key={p}
                  className="text-[9px] px-1.5 py-0.5 rounded-md font-medium"
                  style={{
                    background: `hsla(${meta.hue}, 40%, 50%, 0.12)`,
                    color: `hsla(${meta.hue}, 60%, 75%, 0.9)`,
                    border: `1px solid hsla(${meta.hue}, 40%, 50%, 0.15)`,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Arrow */}
      <div className="flex justify-center">
        <div
          className="w-2.5 h-2.5 rotate-45 -mt-1.5"
          style={{
            background: `hsla(${meta.hue}, 30%, 6%, 0.95)`,
            borderRight: `1px solid hsla(${meta.hue}, 60%, 50%, 0.3)`,
            borderBottom: `1px solid hsla(${meta.hue}, 60%, 50%, 0.3)`,
          }}
        />
      </div>
    </div>
  );
}

// ─── Skill Pill ─────────────────────────────────────────────────────────────

function SkillPill({
  node,
  style,
  animDelay,
  onHover,
  onLeave,
}: {
  node: SkillNode;
  style: React.CSSProperties;
  animDelay: number;
  onHover: (e: React.MouseEvent, node: SkillNode) => void;
  onLeave: () => void;
}) {
  const meta = CATEGORY_META[node.category];
  const isStrong = node.isStrong;

  return (
    <div
      className="universe-pill absolute select-none cursor-default"
      style={{
        ...style,
        animationDelay: `${animDelay}s`,
      }}
      onMouseEnter={(e) => onHover(e, node)}
      onMouseLeave={onLeave}
    >
      <div
        className={`
          relative px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300
          hover:scale-110 hover:-translate-y-1 active:scale-95
          ${isStrong
            ? 'text-xs sm:text-sm font-extrabold tracking-tight'
            : 'text-[10px] sm:text-xs font-semibold opacity-75 hover:opacity-100'
          }
        `}
        style={{
          background: isStrong
            ? `linear-gradient(135deg, hsla(${meta.hue}, 50%, 15%, 0.7), hsla(${meta.hue}, 40%, 8%, 0.8))`
            : `hsla(${meta.hue}, 20%, 10%, 0.45)`,
          border: `1px solid hsla(${meta.hue}, 60%, ${isStrong ? 50 : 30}%, ${isStrong ? 0.4 : 0.15})`,
          color: isStrong
            ? `hsl(${meta.hue}, 80%, 75%)`
            : `hsl(${meta.hue}, 30%, 70%)`,
          boxShadow: isStrong
            ? `0 0 20px hsla(${meta.hue}, 60%, 50%, 0.15), 0 4px 12px rgba(0,0,0,0.3)`
            : `0 2px 8px rgba(0,0,0,0.2)`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {isStrong && (
          <span
            className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsla(${meta.hue}, 60%, 50%, 0.08), transparent 70%)`,
            }}
          />
        )}
        <span className="relative z-10">{node.name}</span>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function TechnicalUniverse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [hoveredNode, setHoveredNode] = useState<{ node: SkillNode; x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const parallaxRef = useRef({ x: 0, y: 0 });
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // Responsive breakpoints
  const isMobile = dimensions.w > 0 && dimensions.w < 640;
  const isTablet = dimensions.w >= 640 && dimensions.w < 1024;

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ w: rect.width, h: rect.height });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Intersection observer for lazy activation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Mouse tracking + parallax (single RAF loop)
  useEffect(() => {
    if (!isVisible) return;
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMove, { passive: true });
    el.addEventListener('mouseleave', handleLeave);

    // Parallax RAF loop
    const tick = () => {
      if (innerRef.current && mouseRef.current.x > 0) {
        const targetX = ((mouseRef.current.x / dimensions.w) - 0.5) * -12;
        const targetY = ((mouseRef.current.y / dimensions.h) - 0.5) * -8;
        parallaxRef.current.x += (targetX - parallaxRef.current.x) * 0.06;
        parallaxRef.current.y += (targetY - parallaxRef.current.y) * 0.06;
        innerRef.current.style.transform = `translate(${parallaxRef.current.x}px, ${parallaxRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, dimensions.w, dimensions.h]);

  // Layout computation
  const layoutData = useMemo(() => {
    if (dimensions.w === 0) return [];

    const categories: Category[] = ['ai_ml', 'data_science', 'frontend', 'backend', 'cloud', 'tools_projects'];

    // Cluster centers (percentages)
    const getClusters = (): Record<Category, { cx: number; cy: number }> => {
      if (isMobile) {
        return {
          ai_ml:          { cx: 50, cy: 8 },
          data_science:   { cx: 50, cy: 24 },
          frontend:       { cx: 50, cy: 38 },
          backend:        { cx: 50, cy: 52 },
          cloud:          { cx: 50, cy: 68 },
          tools_projects: { cx: 50, cy: 84 },
        };
      }
      if (isTablet) {
        return {
          ai_ml:          { cx: 28, cy: 16 },
          data_science:   { cx: 72, cy: 16 },
          frontend:       { cx: 28, cy: 50 },
          backend:        { cx: 72, cy: 50 },
          cloud:          { cx: 28, cy: 84 },
          tools_projects: { cx: 72, cy: 84 },
        };
      }
      return {
        ai_ml:          { cx: 18, cy: 24 },
        data_science:   { cx: 50, cy: 18 },
        frontend:       { cx: 82, cy: 24 },
        backend:        { cx: 18, cy: 74 },
        cloud:          { cx: 50, cy: 78 },
        tools_projects: { cx: 82, cy: 74 },
      };
    };

    const clusters = getClusters();
    const result: { node: SkillNode; left: string; top: string; animDelay: number }[] = [];

    const goldenAngle = 137.508;
    const baseSpacing = isMobile ? 28 : isTablet ? 38 : 46;

    for (const cat of categories) {
      const nodes = SKILL_NODES.filter(n => n.category === cat);
      const center = clusters[cat];

      nodes.forEach((node, i) => {
        const distance = Math.sqrt(i + 0.5) * baseSpacing;
        const angle = i * goldenAngle * (Math.PI / 180);
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        // Convert pixel offset to percentage of container
        const px = center.cx + (dx / dimensions.w) * 100;
        const py = center.cy + (dy / dimensions.h) * 100;

        result.push({
          node,
          left: `${px}%`,
          top: `${py}%`,
          animDelay: (i * 0.3) + (categories.indexOf(cat) * 0.5),
        });
      });
    }

    return result;
  }, [dimensions.w, dimensions.h, isMobile, isTablet]);

  // Hover handlers
  const handleHover = useCallback((e: React.MouseEvent, node: SkillNode) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoveredNode({
      node,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredNode(null);
  }, []);

  // Container height based on screen size
  const containerHeight = isMobile ? 1600 : isTablet ? 1050 : 650;

  // Category labels
  const categoryLabels = useMemo(() => {
    const clusters: Record<Category, { cx: number; cy: number }> = isMobile
      ? { ai_ml: { cx: 50, cy: 8 }, data_science: { cx: 50, cy: 24 }, frontend: { cx: 50, cy: 38 }, backend: { cx: 50, cy: 52 }, cloud: { cx: 50, cy: 68 }, tools_projects: { cx: 50, cy: 84 } }
      : isTablet
        ? { ai_ml: { cx: 28, cy: 16 }, data_science: { cx: 72, cy: 16 }, frontend: { cx: 28, cy: 50 }, backend: { cx: 72, cy: 50 }, cloud: { cx: 28, cy: 84 }, tools_projects: { cx: 72, cy: 84 } }
        : { ai_ml: { cx: 18, cy: 24 }, data_science: { cx: 50, cy: 18 }, frontend: { cx: 82, cy: 24 }, backend: { cx: 18, cy: 74 }, cloud: { cx: 50, cy: 78 }, tools_projects: { cx: 82, cy: 74 } };

    return (Object.entries(clusters) as [Category, { cx: number; cy: number }][]).map(([cat, pos]) => ({
      cat,
      ...pos,
      ...CATEGORY_META[cat],
    }));
  }, [isMobile, isTablet]);

  return (
    <>
      <style>{`
        @keyframes universe-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        .universe-pill {
          transform: translate(-50%, -50%);
          animation: universe-float 5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden border border-white/[0.06]"
        style={{
          height: containerHeight,
          background: 'linear-gradient(180deg, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.85) 100%)',
        }}
      >
        {/* Canvas background effects */}
        {isVisible && dimensions.w > 0 && (
          <CanvasBackground width={dimensions.w} height={containerHeight} mouseRef={mouseRef} />
        )}

        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {categoryLabels.map(({ cat, cx, cy, hue }) => (
            <div
              key={cat}
              className="absolute rounded-full"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                width: isMobile ? 180 : 280,
                height: isMobile ? 180 : 280,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, hsla(${hue}, 60%, 50%, 0.06) 0%, transparent 70%)`,
                filter: 'blur(40px)',
              }}
            />
          ))}
        </div>

        {/* Category labels */}
        {categoryLabels.map(({ cat, cx, cy, label, hue, color }) => (
          <div
            key={`label-${cat}`}
            className="absolute pointer-events-none select-none z-[5]"
            style={{
              left: `${cx}%`,
              top: `${cy}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              className="px-2.5 py-1 rounded-full text-[8px] sm:text-[9px] font-bold font-mono tracking-[0.15em] uppercase border"
              style={{
                background: `hsla(${hue}, 40%, 15%, 0.5)`,
                borderColor: `hsla(${hue}, 60%, 50%, 0.2)`,
                color,
                backdropFilter: 'blur(8px)',
              }}
            >
              {label}
            </span>
          </div>
        ))}

        {/* Skill nodes */}
        <div ref={innerRef} className="absolute inset-0 z-10">
          {isVisible && layoutData.map(({ node, left, top, animDelay }, i) => (
            <SkillPill
              key={`${node.name}-${node.category}-${i}`}
              node={node}
              style={{ left, top }}
              animDelay={animDelay}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}
        </div>

        {/* Tooltip */}
        {hoveredNode && (
          <Tooltip
            node={hoveredNode.node}
            x={hoveredNode.x}
            y={hoveredNode.y}
            containerWidth={dimensions.w}
          />
        )}

        {/* Holographic overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)',
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(9,9,11,0.9)] to-transparent pointer-events-none z-[50]" />
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[rgba(9,9,11,0.6)] to-transparent pointer-events-none z-[50]" />
      </div>
    </>
  );
}
