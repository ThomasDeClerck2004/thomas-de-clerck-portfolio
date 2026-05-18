import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HeroFireworks } from "./heroFireworks";

function shouldEnableHeroEffects() {
    if (typeof window === "undefined") {
        return false;
    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const smallScreen = window.matchMedia("(max-width: 768px)").matches;

    const lowMemory =
        "deviceMemory" in navigator && navigator.deviceMemory <= 4;

    const lowCpu =
        "hardwareConcurrency" in navigator &&
        navigator.hardwareConcurrency <= 4;

    const slowConnection =
        "connection" in navigator &&
        (navigator.connection.saveData ||
            ["slow-2g", "2g", "3g"].includes(navigator.connection.effectiveType));

    return (
        !prefersReducedMotion &&
        !slowConnection &&
        !(smallScreen && (lowMemory || lowCpu)) &&
        !lowMemory &&
        !lowCpu
    );
}

function testInitialPerformance() {
    return new Promise((resolve) => {
        let frames = 0;
        let slowFrames = 0;
        let lastFrame = performance.now();
        const startTime = performance.now();

        const check = (now) => {
            const frameTime = now - lastFrame;
            lastFrame = now;
            frames += 1;

            if (frameTime > 34) {
                slowFrames += 1;
            }

            const testedLongEnough = now - startTime > 700;
            const testedEnoughFrames = frames >= 20;

            if (testedLongEnough || testedEnoughFrames) {
                resolve(slowFrames <= 2);
                return;
            }

            requestAnimationFrame(check);
        };

        requestAnimationFrame(check);
    });
}

function watchForLag(onLagDetected) {
    let frameId;
    let lastFrame = performance.now();
    let slowFrames = 0;
    let stopped = false;

    const checkFrame = (now) => {
        if (stopped) {
            return;
        }

        const frameTime = now - lastFrame;
        lastFrame = now;

        if (frameTime > 34) {
            slowFrames += 1;
        } else {
            slowFrames = Math.max(0, slowFrames - 1);
        }

        if (slowFrames >= 5) {
            onLagDetected();
            stopped = true;
            return;
        }

        frameId = requestAnimationFrame(checkFrame);
    };

    frameId = requestAnimationFrame(checkFrame);

    return () => {
        stopped = true;

        if (frameId) {
            cancelAnimationFrame(frameId);
        }
    };
}

export default function Hero() {
    const ref = useRef(null);
    const cvMenuRef = useRef(null);
    const cvButtonRef = useRef(null);
    const fireworksRef = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [showCvMenu, setShowCvMenu] = useState(false);
    const [effectsEnabled, setEffectsEnabled] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: -9999, y: -9999 });

    useEffect(() => {
        let cancelled = false;
        let stopWatchingLag = null;

        const stopCurrentLagWatcher = () => {
            if (stopWatchingLag) {
                stopWatchingLag();
                stopWatchingLag = null;
            }
        };

        const updateEffects = async () => {
            stopCurrentLagWatcher();

            if (!shouldEnableHeroEffects()) {
                setEffectsEnabled(false);
                return;
            }

            const deviceFeelsSmooth = await testInitialPerformance();

            if (cancelled) {
                return;
            }

            setEffectsEnabled(deviceFeelsSmooth);

            if (deviceFeelsSmooth) {
                stopWatchingLag = watchForLag(() => {
                    setEffectsEnabled(false);
                    stopCurrentLagWatcher();
                });
            }
        };

        const reducedMotionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        updateEffects();

        window.addEventListener("resize", updateEffects);
        reducedMotionQuery.addEventListener("change", updateEffects);

        return () => {
            cancelled = true;

            window.removeEventListener("resize", updateEffects);
            reducedMotionQuery.removeEventListener("change", updateEffects);

            stopCurrentLagWatcher();
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!cvMenuRef.current) {
                return;
            }

            if (!cvMenuRef.current.contains(event.target)) {
                setShowCvMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleCvClick = () => {
        setShowCvMenu((value) => {
            const nextValue = !value;

            if (nextValue && effectsEnabled && cvButtonRef.current) {
                const rect = cvButtonRef.current.getBoundingClientRect();

                fireworksRef.current?.launchAt(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
            }

            return nextValue;
        });
    };

    const handleMouseMove = (event) => {
        if (!effectsEnabled) {
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setCursorPosition({ x: -9999, y: -9999 });
    };

    return (
        <section
            id="hero"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#101010] to-[#0d0d0d] px-4 text-center"
        >
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

            {effectsEnabled && (
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#00ad6a_1px,transparent_1px),linear-gradient(to_bottom,#00ad6a_1px,transparent_1px)] [background-size:56px_56px]"
                    style={{
                        WebkitMaskImage:
                            "radial-gradient(ellipse 34% 100% at 50% 50%, black 0%, black 28%, rgba(0,0,0,0.55) 45%, transparent 72%)",
                        maskImage:
                            "radial-gradient(ellipse 34% 100% at 50% 50%, black 0%, black 28%, rgba(0,0,0,0.55) 45%, transparent 72%)",
                        WebkitMaskSize: "260% 100%",
                        maskSize: "260% 100%",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                    }}
                    animate={{
                        WebkitMaskPosition: ["145% 0%", "-45% 0%"],
                        maskPosition: ["145% 0%", "-45% 0%"],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatDelay: 0.001,
                        ease: [0.65, 0, 0.35, 1],
                    }}
                />
            )}

            {effectsEnabled && (
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.38] transition-opacity duration-300 [background-image:linear-gradient(to_right,#00ad6a_1px,transparent_1px),linear-gradient(to_bottom,#00ad6a_1px,transparent_1px)] [background-size:56px_56px]"
                    style={{
                        WebkitMaskImage: `radial-gradient(circle 115px at ${cursorPosition.x}px ${cursorPosition.y}px, black 0%, black 38%, transparent 72%)`,
                        maskImage: `radial-gradient(circle 115px at ${cursorPosition.x}px ${cursorPosition.y}px, black 0%, black 38%, transparent 72%)`,
                    }}
                />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

            <div className="relative z-30 max-w-4xl">
                <motion.p
                    className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#009b5f] sm:text-sm"
                    initial={{ y: 40, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Thomas De Clerck | IT-student
                </motion.p>

                <motion.h1
                    className="text-3xl font-bold text-white sm:text-5xl lg:text-6xl 2xl:text-7xl"
                    initial={{ y: 60, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    Welcome to My Portfolio
                </motion.h1>

                <motion.p
                    className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base lg:text-lg"
                    initial={{ y: 60, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    I build practical, clean web projects and enjoy turning ideas into working software.
                </motion.p>

                <motion.div
                    className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    initial={{ y: 60, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <div ref={cvMenuRef} className="relative">
                        <button
                            ref={cvButtonRef}
                            type="button"
                            onClick={handleCvClick}
                            className="min-w-44 rounded-md bg-[#009b5f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00b873] sm:text-base cursor-pointer"
                        >
                            Download CV
                        </button>

                        {showCvMenu && (
                            <div className="absolute left-1/2 top-full z-40 mt-3 w-44 -translate-x-1/2 overflow-hidden rounded-md border border-white/10 bg-[#131313] shadow-xl">
                                <a
                                    href="/assets/CV_Thomas_De_Clerck_2025_NL.pdf"
                                    download
                                    className="block px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10"
                                >
                                    Dutch CV
                                </a>
                                <a
                                    href="/assets/CV_Thomas_De_Clerck_2025_EN.pdf"
                                    download
                                    className="block px-4 py-3 text-sm text-gray-200 transition hover:bg-white/10"
                                >
                                    English CV
                                </a>
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={scrollToContact}
                        className="min-w-44 rounded-md border border-gray-600 bg-[#131313]/70 px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition hover:border-[#009b5f] hover:text-white sm:text-base cursor-pointer"
                    >
                        Contact Me
                    </button>
                </motion.div>
            </div>

            <HeroFireworks ref={fireworksRef} enabled={effectsEnabled} />
        </section>
    );
}
