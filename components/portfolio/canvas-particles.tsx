"use client";

import { useEffect, useRef } from "react";

interface Particle {
    type: "snow" | "bubble";
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    opacity: number;
}

export default function CanvasParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // 白く発光する光の粒（snow）
            for (let i = 0; i < 35; i++) {
                particles.push({
                    type: "snow",
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1, // 半径1〜3
                    speedY: Math.random() * 0.4 + 0.1, // 上方向への速度
                    speedX: Math.random() * 0.2 - 0.1, // 横方向の揺れ幅
                    opacity: Math.random() * 0.4 + 0.2, // 透明度 0.2〜0.6
                });
            }
            // 少し大きめの泡状の粒（bubble）
            for (let i = 0; i < 20; i++) {
                particles.push({
                    type: "bubble",
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 4 + 3, // 半径3〜7
                    speedY: Math.random() * 0.6 + 0.2, // 少し速め
                    speedX: Math.random() * 0.3 - 0.15,
                    opacity: Math.random() * 0.15 + 0.05, // 薄め
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                if (p.type === "snow") {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.fill();
                    ctx.shadowBlur = 0; // 他の描画に影響しないようリセット
                } else if (p.type === "bubble") {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
                    ctx.fill();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 2})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                // 位置の更新（上方向へゆっくり移動 + 横揺れ）
                p.y -= p.speedY;
                p.x += Math.sin(p.y * 0.01) * p.speedX; 

                // 画面上部に見えなくなったら下から再出現
                if (p.y < -p.size) {
                    p.y = canvas.height + p.size;
                    p.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas(); // 初回実行時にキャンバスサイズに合わせる

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
        />
    );
}
