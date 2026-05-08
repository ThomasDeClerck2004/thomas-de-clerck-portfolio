import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Hobby } from "../components";

export default function Hobbies() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section ref={sectionRef} className="flex justify-center items-center overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-10 2xl:pt-12 pb-16 2xl:pb-24">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                    <h2 className="text-gray-100 font-bold text-3xl lg:text-4xl 2xl:text-5xl mb-3 text-center">
                        My <span className="text-[#009b5f]">Hobbies</span>
                    </h2>
                    <div className="w-48 sm:w-68 h-1 bg-[#009b5f] mx-auto rounded-full mt-2 mb-6"></div>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
                        Here are some activities I enjoy during my free time. These hobbies help me stay balanced and creative.
                    </p>
                    <div className='flex justify-center flex-row flex-wrap gap-4 pb-5'>
                        <Hobby hobbyName="Fitness" />
                        <Hobby hobbyName="Walking" />
                        <Hobby hobbyName="Tennis" />
                        <Hobby hobbyName="Gaming" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
