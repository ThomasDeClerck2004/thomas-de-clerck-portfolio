import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideIn } from '../utils/animations';
import { Skill } from "../components";

export default function Skills() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section>
            <div ref={sectionRef} className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-10 2xl:pt-12 pb-16 2xl:pb-24">
                <motion.div className='flex flex-col'
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                >
                    <h2 className="text-gray-300 font-bold text-3xl lg:text-4xl mb-5 pb-1 border-l-4 border-[#009b5f] pl-4">
                        My Skills
                    </h2>

                    <div className='lg:ml-5'>
                        <h3 className="text-gray-300 font-bold text-xl lg:text-2xl">Programming Languages</h3>
                        <motion.div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'
                            variants={slideIn('left', 'tween', 0.6, 1)}
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                        >
                            <Skill skillName="Python" />
                            <Skill skillName="Java" />
                            <Skill skillName="C#" />
                            <Skill skillName="JavaScript" />
                            <Skill skillName="SQL" />
                            <Skill skillName="HTML" />
                            <Skill skillName="CSS" />
                        </motion.div>

                        <h3 className="text-gray-300 font-bold text-xl lg:text-2xl">Frameworks & Libraries</h3>
                        <motion.div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'
                            variants={slideIn('left', 'tween', 0.8, 1)}
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                        >
                            <Skill skillName="React" />
                            <Skill skillName=".NET" />
                            <Skill skillName="Tailwind CSS" />
                            <Skill skillName="Alpine.js" />
                            <Skill skillName="Laravel" />
                            <Skill skillName="Livewire" />
                        </motion.div>

                        <h3 className="text-gray-300 font-bold text-xl lg:text-2xl">Tools & Platforms</h3>
                        <motion.div className='flex flex-row flex-wrap gap-4 pt-3 pb-5'
                            variants={slideIn('left', 'tween', 1.0, 1)}
                            initial="hidden"
                            animate={isInView ? 'show' : 'hidden'}
                        >
                            <Skill skillName="Docker" />
                            <Skill skillName="Linux" />
                            <Skill skillName="Github" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
