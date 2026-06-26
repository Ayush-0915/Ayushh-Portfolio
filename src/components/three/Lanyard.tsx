/* eslint-disable */
'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
    BallCollider,
    CuboidCollider,
    Physics,
    RigidBody,
    useRopeJoint,
    useSphericalJoint,
    RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

import { usePerformance } from '@/hooks/usePerformance';
import { portfolioData } from '@/data/portfolio';

extend({ MeshLineGeometry, MeshLineMaterial });

// Preload assets for faster startup
useGLTF.preload('/lanyard/card.glb');
useTexture.preload('/lanyard/lanyard.png');

interface LanyardProps {
    position?: [number, number, number];
    gravity?: [number, number, number];
    fov?: number;
    transparent?: boolean;
    isLowPowerMode?: boolean;
}

export function Lanyard({
    position = [0, 0, 30],
    gravity = [0, -40, 0],
    fov = 20,
    transparent = true,
    isLowPowerMode: isLowPowerModeProp
}: LanyardProps) {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { isLowPowerMode: isLowPowerModeHook } = usePerformance();
    const isLowPowerMode = isLowPowerModeProp ?? isLowPowerModeHook;
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = (): void => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const responsiveCameraPosition = useMemo(() => {
        if (typeof window === 'undefined') return position;
        const w = window.innerWidth;
        let z = position[2];
        if (w < 480) z = 30;
        else if (w < 768) z = 26;
        else if (w < 1024) z = 23;
        
        // Keep the viewing angle constant: Y = z * (position[1] / position[2])
        const y = z * (position[1] / position[2]);
        return [position[0], y, z] as [number, number, number];
    }, [position]);

    if (isLowPowerMode) {
        const linkedInUrl = 'https://linkedin.com/in/ayush-singh-0915ap';
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(linkedInUrl)}`;

        return (
            <div className="w-full h-full flex items-center justify-center p-4">
                <div className="relative group transition-all duration-500 hover:scale-105">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/10 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-[19rem] sm:w-[22rem] md:w-96 aspect-[1/1.4] bg-[#0a0b10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-5 sm:p-6 md:p-7 text-white">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
                        
                        <div className="flex flex-col items-center mt-1 sm:mt-2">
                            <span className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.3em] font-bold text-emerald-400 uppercase">AI SYSTEM ARCHITECT</span>
                            <span className="text-[8px] sm:text-[9px] tracking-[0.4em] font-semibold text-zinc-500 uppercase mt-0.5">Identity Card</span>
                        </div>
                        
                        <div className="relative w-28 h-28 sm:w-36 h-36 md:w-44 h-44 mx-auto mt-4 sm:mt-5 md:mt-6 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-xl group-hover:border-emerald-500/60 transition-colors duration-300">
                            <img
                                src="/about/ayush.png"
                                alt="Ayush Singh"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="text-center mt-3 sm:mt-4 md:mt-5 space-y-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white leading-none">
                                Ayush Singh
                            </h3>
                            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-emerald-400 font-bold tracking-wider uppercase">
                                AI & Machine Learning Engineer
                            </p>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-500 italic">
                                "Building Intelligent AI Systems"
                            </p>
                        </div>
                        
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5 flex justify-between items-center text-left">
                            <div className="space-y-1.5 sm:space-y-2">
                                <div>
                                    <div className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-500 font-bold">Employee ID</div>
                                    <div className="text-[9px] sm:text-[10px] md:text-[11px] font-mono font-semibold">AI-2026-0915</div>
                                </div>
                                <div>
                                    <div className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-500 font-bold">Department</div>
                                    <div className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-zinc-300">AI & ML</div>
                                </div>
                                <div>
                                    <div className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-500 font-bold">Location</div>
                                    <div className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-zinc-300">Indore, India</div>
                                </div>
                                <div>
                                    <div className="text-[7px] sm:text-[8px] uppercase tracking-wider text-zinc-500 font-bold">GitHub</div>
                                    <div className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-zinc-300">@Ayush-0915</div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                                <div className="w-16 h-16 sm:w-20 h-20 md:w-24 h-24 bg-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl shadow-inner flex-shrink-0">
                                    <img
                                        src={qrCodeUrl}
                                        alt="QR Code"
                                        className="w-full h-full"
                                    />
                                </div>
                                <span className="text-[6px] sm:text-[7px] text-zinc-500 font-semibold tracking-wider text-center">
                                    Scan to connect on LinkedIn
                                </span>
                            </div>
                        </div>
 
                        <div className="mt-auto pt-3 sm:pt-4 border-t border-white/5 w-full flex items-center justify-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.1em] font-bold text-emerald-400">
                                OPEN TO AI/ML OPPORTUNITIES
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative z-0 w-full h-full flex justify-center items-center transform scale-100 origin-center">
            <Canvas
                camera={{ position: responsiveCameraPosition, fov }}
                dpr={[1, isMobile ? 1.5 : 2]}
                gl={{ alpha: transparent, antialias: false, powerPreference: 'high-performance' }}
                onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
            >
                <ambientLight intensity={Math.PI} />
                <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
                    <Band isMobile={isMobile} isDark={isDark} />
                </Physics>
                <Environment blur={0.75}>
                    <Lightformer
                        intensity={2}
                        color="white"
                        position={[0, -1, 5]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[-1, -1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[1, 1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={10}
                        color="white"
                        position={[-10, 0, 14]}
                        rotation={[0, Math.PI / 2, Math.PI / 3]}
                        scale={[100, 10, 1]}
                    />
                </Environment>
            </Canvas>
        </div>
    );
}

interface BandProps {
    maxSpeed?: number;
    minSpeed?: number;
    isMobile?: boolean;
    isDark?: boolean;
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false, isDark = false }: BandProps) {
    const band = useRef<any>(null);
    const fixed = useRef<any>(null);
    const j1 = useRef<any>(null);
    const j2 = useRef<any>(null);
    const j3 = useRef<any>(null);
    const card = useRef<any>(null);

    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();

    const segmentProps: any = {
        type: 'dynamic' as RigidBodyProps['type'],
        canSleep: true,
        colliders: false,
        angularDamping: 2.5,
        linearDamping: 1.8
    };

    const { nodes, materials } = useGLTF('/lanyard/card.glb') as any;
    const texture = useTexture('/lanyard/lanyard.png');
    const canvas = useMemo(() => {
        if (typeof window === 'undefined') return null;
        console.log("[Lanyard] Creating canvas element...");
        const c = document.createElement('canvas');
        c.width = 1024;
        c.height = 1152;
        return c;
    }, []);

    const textureRef = useRef<THREE.CanvasTexture | null>(null);
    const setTextureRef = (node: THREE.CanvasTexture | null) => {
        textureRef.current = node;
        if (node) {
            node.needsUpdate = true;
            console.log("[Lanyard] canvasTexture mounted, flagged needsUpdate.");
        }
    };

    useEffect(() => {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        console.log("[Lanyard] useEffect mounted. Initializing Image loaders.");

        const avatarImg = new Image();
        avatarImg.crossOrigin = 'anonymous';
        const qrImg = new Image();
        qrImg.crossOrigin = 'anonymous';

        let avatarLoaded = false;
        let qrLoaded = false;

        const drawCanvas = () => {
            console.log("[Lanyard] drawCanvas called. avatarLoaded =", avatarLoaded, "qrLoaded =", qrLoaded);
            
            // Background gradient (deep obsidian)
            const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            grad.addColorStop(0, '#0a0b12');
            grad.addColorStop(0.3, '#05060a');
            grad.addColorStop(1, '#020204');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Technical Grid lines (very subtle)
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.02)';
            ctx.lineWidth = 1;
            for (let x = 0; x < canvas.width; x += 80) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += 80) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // ==========================================
            // FRONT OF BADGE (Left Half: X: 0 to 512)
            // ==========================================

            // Neural Network / Circuit Traces behind details on the Front
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
            ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
            ctx.lineWidth = 1.5;
            const frontNodes = [
                {x: 80, y: 520}, {x: 160, y: 480}, {x: 160, y: 560},
                {x: 280, y: 460}, {x: 280, y: 520}, {x: 280, y: 580},
                {x: 380, y: 500}, {x: 380, y: 560}
            ];
            const frontConnections = [
                [0,1], [0,2], [1,3], [1,4], [2,4], [2,5],
                [3,6], [4,6], [4,7], [5,7]
            ];
            frontConnections.forEach(([i, j]) => {
                ctx.beginPath();
                ctx.moveTo(frontNodes[i].x, frontNodes[i].y);
                ctx.lineTo(frontNodes[j].x, frontNodes[j].y);
                ctx.stroke();
            });
            frontNodes.forEach(n => {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });

            // Soft glowing gradient highlights in corner of Front
            const frontGlowGrad = ctx.createRadialGradient(256, 250, 0, 256, 250, 250);
            frontGlowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
            frontGlowGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
            ctx.fillStyle = frontGlowGrad;
            ctx.fillRect(0, 0, 512, canvas.height);

            // Front Header Text
            ctx.fillStyle = '#10b981';
            ctx.font = 'bold 22px Inter, sans-serif';
            (ctx as any).letterSpacing = '5px';
            ctx.textAlign = 'center';
            ctx.fillText('AI SYSTEM ARCHITECT', 256, 65);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.font = '600 12px Inter, sans-serif';
            (ctx as any).letterSpacing = '6px';
            ctx.fillText('IDENTITY CARD', 256, 90);

            // Helper function for rounded rectangles
            const roundRect = (rx: number, ry: number, rw: number, rh: number, rad: number) => {
                ctx.beginPath();
                ctx.moveTo(rx + rad, ry);
                ctx.lineTo(rx + rw - rad, ry);
                ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rad);
                ctx.lineTo(rx + rw, ry + rh - rad);
                ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rad, ry + rh);
                ctx.lineTo(rx + rad, ry + rh);
                ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rad);
                ctx.lineTo(rx, ry + rad);
                ctx.quadraticCurveTo(rx, ry, rx + rad, ry);
                ctx.closePath();
            };

            // Avatar Container (Front)
            const size = 240;
            const xCoord = 136; // (512 - 240) / 2
            const yCoord = 110;
            const radius = 24;

            ctx.shadowColor = 'rgba(16, 185, 129, 0.3)';
            ctx.shadowBlur = 20;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
            ctx.lineWidth = 3.5;

            roundRect(xCoord, yCoord, size, size, radius);
            ctx.fill();
            ctx.stroke();
            ctx.shadowBlur = 0; // reset shadow

            // Clip and Draw Avatar (Front)
            ctx.save();
            roundRect(xCoord + 4, yCoord + 4, size - 8, size - 8, radius - 4);
            ctx.clip();
            if (avatarLoaded) {
                const imgW = avatarImg.width;
                const imgH = avatarImg.height;
                const min = Math.min(imgW, imgH);
                const sx = (imgW - min) / 2;
                const sy = (imgH - min) / 2;
                ctx.drawImage(avatarImg, sx, sy, min, min, xCoord + 4, yCoord + 4, size - 8, size - 8);
            } else {
                ctx.fillStyle = '#111827';
                ctx.fillRect(xCoord, yCoord, size, size);
                ctx.fillStyle = '#4b5563';
                ctx.font = 'bold 64px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('AS', 256, yCoord + size / 2);
            }
            ctx.restore();
            ctx.textBaseline = 'alphabetic'; // reset textBaseline

            // Microchip on Front (left side of the name area)
            const cx = 45;
            const cy = 360;
            ctx.fillStyle = '#b45309';
            roundRect(cx, cy, 50, 40, 6);
            ctx.fill();
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            // Chip internal wires
            ctx.beginPath();
            ctx.moveTo(cx + 12, cy); ctx.lineTo(cx + 12, cy + 40);
            ctx.moveTo(cx + 25, cy); ctx.lineTo(cx + 25, cy + 40);
            ctx.moveTo(cx + 38, cy); ctx.lineTo(cx + 38, cy + 40);
            ctx.moveTo(cx, cy + 12); ctx.lineTo(cx + 50, cy + 12);
            ctx.moveTo(cx, cy + 26); ctx.lineTo(cx + 50, cy + 26);
            ctx.stroke();

            // Credentials Text (AYUSH SINGH) (Front)
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 38px Inter, sans-serif';
            ctx.textAlign = 'center';
            (ctx as any).letterSpacing = '1px';
            ctx.fillText('AYUSH SINGH', 256, 415);

            ctx.fillStyle = '#10b981';
            ctx.font = '600 15px Inter, sans-serif';
            (ctx as any).letterSpacing = '1.5px';
            ctx.fillText('AI & MACHINE LEARNING ENGINEER', 256, 450);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.font = 'italic 12px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('"Building Intelligent AI Systems"', 256, 475);

            // Front Divider Line
            const divY = 500;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(35, divY);
            ctx.lineTo(477, divY);
            ctx.stroke();

            // Bottom Left Stack: Credentials Details
            ctx.textAlign = 'left';
            
            // Row 1: Employee ID
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '1.5px';
            ctx.fillText('EMPLOYEE ID', 45, divY + 30);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 15px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('AI-2026-0915', 45, divY + 50);

            // Row 2: Department
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '1.5px';
            ctx.fillText('DEPARTMENT', 45, divY + 80);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 14px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('AI & ML', 45, divY + 100);

            // Row 3: Location
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '1.5px';
            ctx.fillText('LOCATION', 45, divY + 130);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 15px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('Indore, India', 45, divY + 150);

            // Row 4: GitHub
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '1.5px';
            ctx.fillText('GITHUB', 45, divY + 180);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 15px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('@Ayush-0915', 45, divY + 200);

            // Bottom Right Stack: QR Code on the Front Badge!
            const qrS = 140;
            const qrx = 300;
            const qry = divY + 25;

            // Draw white background card for QR Code
            ctx.fillStyle = '#ffffff';
            roundRect(qrx - 10, qry - 10, qrS + 20, qrS + 20, 10);
            ctx.fill();
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            if (qrLoaded) {
                ctx.drawImage(qrImg, qrx, qry, qrS, qrS);
            } else {
                ctx.fillStyle = '#000000';
                ctx.fillRect(qrx, qry, qrS, qrS);
                // Draw mock QR corners
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(qrx + 15, qry + 15, 30, 30);
                ctx.fillRect(qrx + qrS - 45, qry + 15, 30, 30);
                ctx.fillRect(qrx + 15, qry + qrS - 45, 30, 30);
                ctx.fillStyle = '#000000';
                ctx.fillRect(qrx + 20, qry + 20, 20, 20);
                ctx.fillRect(qrx + qrS - 40, qry + 20, 20, 20);
                ctx.fillRect(qrx + 20, qry + qrS - 40, 20, 20);
            }

            // QR Label beneath
            ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
            ctx.font = '600 10px Inter, sans-serif';
            ctx.textAlign = 'center';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('Scan to connect on LinkedIn', 370, qry + qrS + 22);

            // Status Pill (Front)
            const statusY = divY + 225;
            const pillW = 420;
            const pillH = 36;
            const pillX = 46; // (512 - 420) / 2

            ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
            ctx.lineWidth = 1.2;
            roundRect(pillX, statusY, pillW, pillH, 18);
            ctx.fill();
            ctx.stroke();

            // Status Dot (Pulse)
            ctx.fillStyle = '#10b981';
            ctx.beginPath();
            ctx.arc(pillX + 20, statusY + 18, 5, 0, Math.PI * 2);
            ctx.fill();

            // Status Text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.font = 'bold 12px Inter, sans-serif';
            ctx.textAlign = 'center';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('🟢 OPEN TO AI/ML OPPORTUNITIES', 256 + 10, statusY + 22);

            // Front Barcode
            const bY = statusY + 53;
            const bX = 50;
            const bW = 412; // 512 - 100
            const bH = 24;
            ctx.fillStyle = '#ffffff';
            let bx = bX;
            while (bx < bX + bW) {
                const w1 = Math.floor(Math.random() * 5) + 2;
                const s1 = Math.floor(Math.random() * 4) + 2;
                ctx.fillRect(bx, bY, w1, bH);
                bx += w1 + s1;
            }

            // ==========================================
            // BACK OF BADGE (Right Half: X: 512 to 1024)
            // ==========================================

            // Neural Network Grid background on Back
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.05)';
            ctx.fillStyle = 'rgba(16, 185, 129, 0.07)';
            ctx.lineWidth = 1.2;
            const backNodes = [
                {x: 600, y: 300}, {x: 700, y: 220}, {x: 700, y: 380},
                {x: 832, y: 180}, {x: 832, y: 300}, {x: 832, y: 420},
                {x: 932, y: 250}, {x: 932, y: 370}
            ];
            const backConnections = [
                [0,1], [0,2], [1,3], [1,4], [2,4], [2,5],
                [3,6], [4,6], [4,7], [5,7]
            ];
            backConnections.forEach(([i, j]) => {
                ctx.beginPath();
                ctx.moveTo(backNodes[i].x, backNodes[i].y);
                ctx.lineTo(backNodes[j].x, backNodes[j].y);
                ctx.stroke();
            });
            backNodes.forEach(n => {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });

            // Back Header Text
            ctx.fillStyle = '#10b981';
            ctx.font = 'bold 24px Inter, sans-serif';
            (ctx as any).letterSpacing = '5px';
            ctx.textAlign = 'center';
            ctx.fillText('SECURE SYSTEM CARD', 768, 75);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.font = '600 13px Inter, sans-serif';
            (ctx as any).letterSpacing = '4px';
            ctx.fillText('AUTHORIZED PERSONNEL ONLY', 768, 105);

            // Large branding graphic in center of back
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
            ctx.lineWidth = 3;
            roundRect(628, 160, 280, 280, 24);
            ctx.stroke();
            ctx.fillStyle = 'rgba(16, 185, 129, 0.03)';
            ctx.fill();

            // Graphic internal text
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 32px Inter, sans-serif';
            (ctx as any).letterSpacing = '3px';
            ctx.fillText('AYUSH SINGH', 768, 280);

            ctx.fillStyle = '#10b981';
            ctx.font = '600 16px Inter, sans-serif';
            (ctx as any).letterSpacing = '6px';
            ctx.fillText('AI ARCHITECT', 768, 320);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '4px';
            ctx.fillText('SECURE NODE ID: 0915', 768, 360);

            // Back Divider Line
            const backDivY = 520;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(562, backDivY);
            ctx.lineTo(974, backDivY);
            ctx.stroke();

            // Technical Details (Back 4-row stack)
            ctx.textAlign = 'left';
            const stackY = backDivY + 30;
            const leftMargin = 572;

            // Security level
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '2px';
            ctx.fillText('SECURITY LEVEL', leftMargin, stackY);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('CLASS 4 (ACCESS FULL)', leftMargin, stackY + 22);

            // Verification
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '2px';
            ctx.fillText('VERIFICATION', leftMargin, stackY + 65);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('SECURE SHA-256 SIGNED', leftMargin, stackY + 87);

            // Authorized Roles
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '2px';
            ctx.fillText('AUTHORIZED ROLES', leftMargin, stackY + 130);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('DEVELOPER, AI ARCHITECT', leftMargin, stackY + 152);

            // System Host
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.font = 'bold 11px Inter, sans-serif';
            (ctx as any).letterSpacing = '2px';
            ctx.fillText('SYSTEM HOST', leftMargin, stackY + 195);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Inter, sans-serif';
            (ctx as any).letterSpacing = '0.5px';
            ctx.fillText('VERCEL SECURE EDGE', leftMargin, stackY + 217);

            // Holographic Metallic Security Stripe on Back
            const stripeY = stackY + 260;
            const stripeGrad = ctx.createLinearGradient(552, 0, 984, 0);
            stripeGrad.addColorStop(0, '#f59e0b');
            stripeGrad.addColorStop(0.3, '#10b981');
            stripeGrad.addColorStop(0.6, '#3b82f6');
            stripeGrad.addColorStop(1, '#8b5cf6');
            ctx.fillStyle = stripeGrad;
            ctx.globalAlpha = 0.85;
            roundRect(552, stripeY, 432, 40, 6);
            ctx.fill();
            ctx.globalAlpha = 1.0; // reset alpha

            // Back Barcode
            const backBarY = stripeY + 65;
            const backBarX = 572;
            const backBarW = 392;
            const backBarH = 30;
            ctx.fillStyle = '#ffffff';
            let bbx = backBarX;
            while (bbx < backBarX + backBarW) {
                const w1 = Math.floor(Math.random() * 6) + 2;
                const s1 = Math.floor(Math.random() * 5) + 2;
                ctx.fillRect(bbx, backBarY, w1, backBarH);
                bbx += w1 + s1;
            }

            // Set needsUpdate flag on the texture to notify Three.js of changes
            if (textureRef.current) {
                textureRef.current.needsUpdate = true;
                console.log("[Lanyard] Canvas texture needsUpdate flagged.");
            } else {
                console.log("[Lanyard] textureRef.current is not initialized yet during drawCanvas.");
            }
        };

        avatarImg.onload = () => {
            console.log("[Lanyard] Profile image loaded successfully from /about/ayush.png");
            avatarLoaded = true;
            drawCanvas();
        };
        avatarImg.onerror = () => {
            console.error("[Lanyard] Failed to load profile image from /about/ayush.png");
        };

        qrImg.onload = () => {
            console.log("[Lanyard] QR Code loaded successfully from API.");
            qrLoaded = true;
            drawCanvas();
        };
        qrImg.onerror = () => {
            console.error("[Lanyard] Failed to load QR Code from API.");
        };

        const linkedInProfileUrl = 'https://linkedin.com/in/ayush-singh-0915ap';
        avatarImg.src = '/about/ayush.png';
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(linkedInProfileUrl)}`;

        // Safety checks for cached image resources
        if (avatarImg.complete) {
            console.log("[Lanyard] Profile image complete flag is true (cached).");
            avatarLoaded = true;
        }
        if (qrImg.complete) {
            console.log("[Lanyard] QR Code complete flag is true (cached).");
            qrLoaded = true;
        }

        // Draw initial fallback canvas content immediately
        drawCanvas();

        return () => {
            avatarImg.onload = null;
            qrImg.onload = null;
        };
    }, [canvas]);

    // Use the original lanyard texture directly for light mode (black)
    // For dark mode, convert the black background to dark grey (#333333)
    const stringTexture = useMemo(() => {
        if (!texture) return null;
        if (!isDark) return texture;

        const img = texture.image;
        if (!img) return texture;

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return texture;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Target grey value for the black background in dark mode
        const greyValue = 50; // equivalent to dark grey

        for (let i = 0; i < data.length; i += 4) {
            // Check brightness to determine if it's the black background or a white star
            const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114);

            // If it's dark (background), turn it to dark grey. If it's bright (star), keep it.
            if (brightness < 128) {
                data[i] = greyValue;
                data[i + 1] = greyValue;
                data[i + 2] = greyValue;
            }
        }
        ctx.putImageData(imageData, 0, 0);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.colorSpace = texture.colorSpace;
        return tex;
    }, [texture, isDark]);
    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
    );
    const [dragged, drag] = useState<false | THREE.Vector3>(false);
    const [hovered, hover] = useState(false);

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
    useSphericalJoint(j3, card, [
        [0, 0, 0],
        [0, 1.8, 0]
    ]);

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab';
            return () => {
                document.body.style.cursor = 'auto';
            };
        }
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (dragged && typeof dragged !== 'boolean') {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z
            });
        }
        if (fixed.current) {
            [j1, j2].forEach(ref => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
                const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
                ref.current.lerped.lerp(
                    ref.current.translation(),
                    delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
                );
            });
            curve.points[0].copy(j3.current.translation());
            curve.points[1].copy(j2.current.lerped);
            curve.points[2].copy(j1.current.lerped);
            curve.points[3].copy(fixed.current.translation());
            band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
            ang.copy(card.current.angvel());
            rot.copy(card.current.rotation());
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
        }
    });

    curve.curveType = 'chordal';
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <group position={[0, 5.2, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody
                    position={[2, 0, 0]}
                    ref={card}
                    {...segmentProps}
                    type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
                >
                    <CuboidCollider args={[1.0, 1.4, 0.012]} />
                    <group
                        scale={2.8}
                        position={[0, -1.5, -0.05]}
                        onPointerOver={() => hover(true)}
                        onPointerOut={() => hover(false)}
                        onPointerUp={(e: any) => {
                            e.target.releasePointerCapture(e.pointerId);
                            drag(false);
                        }}
                        onPointerDown={(e: any) => {
                            e.target.setPointerCapture(e.pointerId);
                            drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
                        }}
                    >
                        <mesh geometry={nodes.card.geometry}>
                            <meshPhysicalMaterial
                                roughness={0.12}
                                metalness={0.15}
                                clearcoat={1.0}
                                clearcoatRoughness={0.08}
                                envMapIntensity={1.5}
                                toneMapped={false}
                            >
                                {canvas && (
                                    <canvasTexture
                                        ref={setTextureRef}
                                        attach="map"
                                        args={[canvas]}
                                        flipY={false}
                                        colorSpace={THREE.SRGBColorSpace}
                                        anisotropy={16}
                                        minFilter={THREE.LinearFilter}
                                        magFilter={THREE.LinearFilter}
                                        generateMipmaps={false}
                                    />
                                )}
                            </meshPhysicalMaterial>
                        </mesh>
                        <mesh geometry={nodes.clip.geometry} material={materials.metal}>
                            <meshStandardMaterial color={isDark ? "#333333" : "#111111"} roughness={0.3} metalness={0.8} />
                        </mesh>
                        <mesh geometry={nodes.clamp.geometry}>
                            <meshStandardMaterial color={isDark ? "#333333" : "#111111"} roughness={0.3} metalness={0.8} />
                        </mesh>
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color="white"
                    depthTest={false}
                    resolution={isMobile ? [1000, 2000] : [1000, 1000]}
                    useMap={1}
                    map={stringTexture}
                    repeat={[-4, 1]}
                    lineWidth={1}
                />
            </mesh>
        </>
    );
}