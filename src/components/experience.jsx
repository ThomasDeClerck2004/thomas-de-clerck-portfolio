import { slideIn } from '../utils/animations';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    // Variants for the timeline line
    const lineVariants = {
        hidden: { width: 0 },
        visible: { width: '100%', transition: { duration: 0.8, ease: 'easeOut' } },
    };

    // Variants for timeline items
    const itemVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut', delay: i * 0.2 },
        }),
    };

    return (
        <section ref={sectionRef}>
            <div className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-16 2xl:pt-24">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-[#009b5f] pb-2 text-center text-xs lg:text-base 2xl:text-lg font-medium tracking-wider uppercase">WHAT I HAVE DONE SO FAR</p>
                    <h3 className="text-white font-bold text-3xl lg:text-5xl 2xl:text-6xl text-center">My Experiences.</h3>
                </motion.div>
                
                {/* Timeline */}
                <motion.div
                    className="mt-8 2xl:mt-12 border-l-4 border-[#009b5f]"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={lineVariants}
                >
                    <div className="ml-4">
                        {/* Timeline Items */}
                        {[
                            {
                                date: "Sep. 2023 - Present",
                                title: "Bachelor of Applied Computer Science - Thomas More, Geel",
                                description: "Currently studying applied computer science with a focus on software development, databases, networking, and modern IT tools.",
                            },
                            {
                                date: "Feb. 2026 - May. 2026",
                                title: "Internship - Axxes IT Consultancy",
                                description: "Completed my bachelor internship at Axxes IT Consultancy as part of my bachelor degree.",
                            },
                            {
                                date: "Sep. 2023",
                                title: "Driver’s License Obtained - Category B",
                                description: "Successfully earned driver’s license, enabling independent travel for work and study.",
                            },
                            {
                                date: "Mar. 2023 - Apr. 2023",
                                title: "Internship - NetConnect, Zandhoven",
                                description: "Hands-on internship where I assisted in network configuration, troubleshooting, and technical support.",
                            },
                            {
                                date: "Sep. 2017 - Jun. 2023",
                                title: "TSO - IT Management - GO! Onderwijs Vlaanderen",
                                description: "Graduated with a technical secondary education in IT, covering programming, hardware, networking, and basic IT project work.",
                            },
                            {
                                date: "Summer 2021 - 2024 (each Jul.)",
                                title: "Summer Job - Colruyt, Herentals",
                                description: "Worked across four summer seasons in retail, focusing on customer service, stock management, and teamwork in a fast-paced environment.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="mb-8"
                                custom={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={itemVariants}
                            >
                                <div className="flex items-center">
                                    {/* Conditionally render the checkmark image */}
                                    {!item.date.includes("Present") ? (
                                        <img
                                            src="/assets/checkmark.png"
                                            alt="Checkmark"
                                            className="w-4 h-4 sm:w-8 sm:h-8 rounded-full"
                                        />
                                    ) : (
                                        <div className="w-4 h-4 sm:w-8 sm:h-8 border-4 border-[#009b5f] rounded-full"></div>
                                    )}
                                    <p className="ml-4 text-[#009b5f] font-bold">{item.date}</p>
                                </div>
                                <div className="ml-8 mt-2 sm:ml-12 sm:border-2 sm:border-[#009b5f] sm:rounded-lg sm:p-4 sm:bg-[#1a1a1a]">
                                    <h4 className="text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 sm:whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
