import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const documents = [
    {
        title: "Project plan",
        description: "Initial approach, objectives, and schedule.",
        file: "/assets/internship-project-plan.pdf",
    },
    {
        title: "Realisation document",
        description: "The complete technical and functional delivery.",
        file: "/assets/internship-realization-document.pdf",
    },
    {
        title: "Reflection document",
        description: "Personal reflection on the learning process.",
        file: "/assets/internship-reflection.pdf",
    },
];

export default function Internship() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="internship"
            ref={sectionRef}
            className="scroll-mt-40 sm:scroll-mt-36 lg:scroll-mt-32 overflow-hidden"
        >
            <div className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-8 2xl:pt-10 pb-16 2xl:pb-24">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >
                    <div>
                        <p className="text-[#009b5f] pb-2 sm:text-left text-center text-xs lg:text-base 2xl:text-lg font-medium tracking-wider uppercase">
                            BACHELOR INTERNSHIP
                        </p>

                        <h3 className="text-white font-bold text-3xl lg:text-5xl 2xl:text-6xl sm:text-left text-center">
                            Internship.
                        </h3>
                    </div>

                    <div className="hidden sm:flex justify-center md:justify-end">
                        <div className="flex items-center gap-4 pl-4 py-3">
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">
                                    Internship at
                                </p>
                                <p className="text-white font-semibold text-lg leading-tight">
                                    Axxes
                                </p>
                            </div>

                            <img
                                src="/assets/axxes_logo.jpg"
                                alt="Axxes logo"
                                className="w-28 h-26 object-cover rounded-xl border border-[#2a2a2a]"
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-6 2xl:gap-8">
                    <motion.article
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeUp}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8"
                    >
                        <h4 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                            Summary
                        </h4>

                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                            During my internship at Axxes, I worked on the development of an internal knowledge-sharing platform. The goal of this project was to make knowledge within the organisation more centralised, structured, and accessible for employees.
                        </p>

                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed mt-5">
                            The assignment combined analysis, technical research, planning, development, testing, documentation, and reflection. Throughout the project, I contributed to both the functional and technical realisation of the platform, while also documenting the process in the required bachelor portfolio documents.
                        </p>
                    </motion.article>

                    <motion.article
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeUp}
                        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                        className="bg-gradient-to-br from-[#031e14] to-[#009b5f] border border-[#1d5f48] rounded-2xl p-6 sm:p-8"
                    >
                        <h4 className="text-white text-2xl lg:text-3xl font-bold mb-5">
                            Internship Focus
                        </h4>

                        <div className="space-y-5">
                            <div>
                                <p className="text-white font-bold">What</p>
                                <p className="text-gray-100 leading-relaxed">
                                    I helped build an internal knowledge platform that allows Axxes employees to create, manage, share, and discover knowledge in a more structured way.
                                </p>
                            </div>

                            <div>
                                <p className="text-white font-bold">How</p>
                                <p className="text-gray-100 leading-relaxed">
                                    I followed a structured approach based on requirement analysis, technology research, UI development, backend integration, testing, and documentation.
                                </p>
                            </div>

                            <div>
                                <p className="text-white font-bold">Result</p>
                                <p className="text-gray-100 leading-relaxed">
                                    The project resulted in a working web application, supported by a project plan, realisation document, and reflection document.
                                </p>
                            </div>
                        </div>
                    </motion.article>
                </div>

                <motion.article
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                    className="mt-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8"
                >
                    <h4 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                        Internship Assignment
                    </h4>

                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                        The internship assignment started from a real need within Axxes: knowledge was available in the organisation, but it was spread across different tools, channels, and people. Together with the team, I helped analyse this problem and translated it into a concrete software solution.
                    </p>

                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed mt-5">
                        My work included analysing requirements, contributing to the data model and technical architecture, developing several front-end and back-end features, and improving the maintainability of the application. I also worked with tools such as Jira, Bitbucket, Figma, Angular, Java Spring Boot, MySQL, Azure Entra ID, and AWS.
                    </p>

                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed mt-5">
                        Besides the technical realisation, I documented the project in a project plan, a realisation document, and a reflection document. These documents explain the preparation, technical choices, implementation process, and my personal growth during the internship.
                    </p>
                </motion.article>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                    className="mt-10 grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-10 items-center"
                >
                    <div className="w-full overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111] shadow-lg shadow-black/30">
                        <video
                            autoPlay
                            muted
                            defaultMuted
                            loop
                            playsInline
                            preload="none"
                            >
                            <source src="/assets/Kennisdelingsplatform.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div>
                        <p className="text-[#009b5f] pb-2 text-xs lg:text-base 2xl:text-lg font-medium tracking-wider uppercase">
                            Documents
                        </p>

                        <h4 className="text-white font-bold text-2xl lg:text-4xl mb-3">
                            Documentation.
                        </h4>

                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
                            A deep insight into the realisation and reflection of my internship.
                        </p>

                        <div className="space-y-3 sm:space-y-4">
                            {documents.map((document) => (
                                <a
                                    key={document.title}
                                    href={document.file}
                                    download
                                    className="group flex items-center gap-4 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-4 sm:px-5 sm:py-5 hover:border-[#009b5f] transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-7 h-7 shrink-0 text-gray-400 group-hover:text-[#009b5f] transition"
                                    >
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <path d="M14 2v6h6" />
                                        <path d="M16 13H8" />
                                        <path d="M16 17H8" />
                                        <path d="M10 9H8" />
                                    </svg>

                                    <div className="min-w-0 flex-1">
                                        <h5 className="text-white text-sm sm:text-base font-bold">
                                            {document.title}
                                        </h5>

                                        <p className="text-gray-400 text-sm leading-relaxed mt-1">
                                            {document.description}
                                        </p>
                                    </div>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6 shrink-0 text-gray-500 group-hover:text-[#009b5f] transition"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <path d="M7 10l5 5 5-5" />
                                        <path d="M12 15V3" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
