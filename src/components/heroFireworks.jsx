"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const COLORS = ["#00ad6a", "#64ffda", "#ffffff", "#8affc1"];
const MAX_PIXEL_RATIO = 1.5;
const MAX_ROCKETS = 3;
const MAX_PARTICLES = 120;
const LAUNCH_COOLDOWN = 200;

export const HeroFireworks = forwardRef(function HeroFireworks({ enabled = true }, ref) {
    const canvasRef = useRef(null);
    const rocketsRef = useRef([]);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const launchAtRef = useRef(null);
    const lastLaunchRef = useRef(0);

    useImperativeHandle(ref, () => ({
        launchAt(x, y) {
            launchAtRef.current?.(x, y);
        },
    }));

    useEffect(() => {
        if (!enabled) {
            rocketsRef.current = [];
            particlesRef.current = [];
            launchAtRef.current = null;
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let isVisible = document.visibilityState === "visible";

        const stopAnimation = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        };

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (!rect) return;

            const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);

            canvas.width = rect.width * pixelRatio;
            canvas.height = rect.height * pixelRatio;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        };

        const explode = (x, y, color) => {
            const amount = window.innerWidth < 768 ? 24 : 36;

            for (let i = 0; i < amount; i++) {
                const angle = (Math.PI * 2 * i) / amount;
                const speed = 1.2 + Math.random() * 2.8;

                particlesRef.current.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 56,
                    maxLife: 56,
                    color,
                });
            }

            if (particlesRef.current.length > MAX_PARTICLES) {
                particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES);
            }
        };

        const draw = () => {
            animationRef.current = null;

            if (!isVisible) {
                return;
            }

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
                ctx.shadowBlur = 10;
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(rocket.x, rocket.y + 8);
                ctx.lineTo(rocket.x, rocket.y + 22);
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
                ctx.arc(particle.x, particle.y, 1.6, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 8;
                ctx.fill();

                return particle.life > 0;
            });

            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "source-over";

            if (rocketsRef.current.length > 0 || particlesRef.current.length > 0) {
                animationRef.current = requestAnimationFrame(draw);
            } else {
                ctx.clearRect(0, 0, width, height);
            }
        };

        const startAnimation = () => {
            if (!animationRef.current && isVisible) {
                animationRef.current = requestAnimationFrame(draw);
            }
        };

        const launchAt = (x, y) => {
            const now = performance.now();

            if (now - lastLaunchRef.current < LAUNCH_COOLDOWN) {
                return;
            }

            if (rocketsRef.current.length >= MAX_ROCKETS) {
                return;
            }

            lastLaunchRef.current = now;

            rocketsRef.current.push({
                x,
                y,
                targetY: Math.max(48, y - (120 + Math.random() * 150)),
                vx: (Math.random() - 0.5) * 0.8,
                vy: -5.2 - Math.random() * 1.2,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            });

            startAnimation();
        };

        const launch = (event) => {
            const rect = canvas.getBoundingClientRect();

            launchAt(event.clientX - rect.left, event.clientY - rect.top);
        };

        const handleVisibilityChange = () => {
            isVisible = document.visibilityState === "visible";

            if (isVisible) {
                startAnimation();
            } else {
                stopAnimation();
            }
        };

        resize();

        launchAtRef.current = launchAt;

        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        canvas.addEventListener("pointerdown", launch);

        return () => {
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            canvas.removeEventListener("pointerdown", launch);

            rocketsRef.current = [];
            particlesRef.current = [];
            launchAtRef.current = null;

            stopAnimation();
        };
    }, [enabled]);

    if (!enabled) {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-auto absolute inset-0 z-20"
            aria-hidden="true"
        />
    );
});
