"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const COLORS = ["#00ad6a", "#64ffda", "#ffffff", "#8affc1"];

export const HeroFireworks = forwardRef(function HeroFireworks(_, ref) {
    const canvasRef = useRef(null);
    const rocketsRef = useRef([]);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const launchAtRef = useRef(null);

    useImperativeHandle(ref, () => ({
        launchAt(x, y) {
            launchAtRef.current?.(x, y);
        },
    }));

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;

            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
        };

        const explode = (x, y, color) => {
            const amount = 42;

            for (let i = 0; i < amount; i++) {
                const angle = (Math.PI * 2 * i) / amount;
                const speed = 1.4 + Math.random() * 3.2;

                particlesRef.current.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 70,
                    maxLife: 70,
                    color,
                });
            }
        };

        const launchAt = (x, y) => {
            rocketsRef.current.push({
                x,
                y,
                targetY: Math.max(48, y - (140 + Math.random() * 180)),
                vx: (Math.random() - 0.5) * 0.8,
                vy: -5.5 - Math.random() * 1.5,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            });
        };

        launchAtRef.current = launchAt;

        const launch = (event) => {
            const rect = canvas.getBoundingClientRect();

            launchAt(event.clientX - rect.left, event.clientY - rect.top);
        };

        const draw = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = "lighter";

            rocketsRef.current = rocketsRef.current.filter((rocket) => {
                rocket.x += rocket.vx;
                rocket.y += rocket.vy;
                rocket.vy += 0.045;

                ctx.beginPath();
                ctx.arc(rocket.x, rocket.y, 2.2, 0, Math.PI * 2);
                ctx.fillStyle = rocket.color;
                ctx.shadowColor = rocket.color;
                ctx.shadowBlur = 14;
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(rocket.x, rocket.y + 8);
                ctx.lineTo(rocket.x, rocket.y + 24);
                ctx.strokeStyle = rocket.color;
                ctx.globalAlpha = 0.45;
                ctx.lineWidth = 1.2;
                ctx.stroke();
                ctx.globalAlpha = 1;

                const shouldExplode = rocket.y <= rocket.targetY || rocket.vy >= -0.4;

                if (shouldExplode) {
                    explode(rocket.x, rocket.y, rocket.color);
                    return false;
                }

                return true;
            });

            particlesRef.current = particlesRef.current.filter((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.035;
                particle.vx *= 0.99;
                particle.vy *= 0.99;
                particle.life -= 1;

                const alpha = Math.max(particle.life / particle.maxLife, 0);

                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 1.7, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 12;
                ctx.fill();

                return particle.life > 0;
            });

            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "source-over";

            animationRef.current = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener("resize", resize);
        canvas.addEventListener("pointerdown", launch);
        animationRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("pointerdown", launch);
            launchAtRef.current = null;

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-auto absolute inset-0 z-20"
            aria-hidden="true"
        />
    );
});
