import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            id="hero"
            ref={ref}
            className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black to-[#0c6e48] overflow-hidden mb-5"
        >
            <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-50"></div>

            <motion.h1
                className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white z-10 will-change-transform"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Welcome to My Portfolio
            </motion.h1>

            <motion.p
                className="mt-4 text-xs lg:text-base 2xl:text-lg text-gray-300 z-10 will-change-transform"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                Breaking things and fixing them (on purpose, usually).
            </motion.p>
        </section>
    );
}
