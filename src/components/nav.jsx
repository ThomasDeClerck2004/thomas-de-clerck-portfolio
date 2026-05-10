import { useState, useEffect, useRef } from "react";
import logo from "/assets/logo.png";
import phoneIcon from "/assets/phoneIcon.png";
import closeIcon from "/assets/closeIcon.png";

export default function Nav() {
    const navRef = useRef(null);
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    const getNavOffset = () => {
        const navHeight = navRef.current?.offsetHeight ?? 60;
        const extraGap = 20;

        return navHeight + extraGap;
    };

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            const sections = ["hero", "about", "work", "internship", "contact"];
            const offset = getNavOffset();
            let currentSection = "hero";

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (element) {
                    const top = element.getBoundingClientRect().top - offset;

                    if (top <= 0) {
                        currentSection = section;
                    }
                }
            });

            const isAtBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

            if (isAtBottom) {
                currentSection = "contact";
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
            return;
        }

        const getTargetTop = () => {
            return section.getBoundingClientRect().top + window.scrollY - getNavOffset();
        };

        requestAnimationFrame(() => {
            window.scrollTo({ top: getTargetTop(), behavior: "smooth" });

            window.setTimeout(() => {
                window.scrollTo({ top: getTargetTop(), behavior: "smooth" });
            }, 350);
        });
    };

    return (
        <nav
            ref={navRef}
            className={`w-full flex items-center py-5 fixed top-0 z-20 border-b text-white p-4 shadow-lg transition-colors duration-300 ${
                scrolled
                    ? "border-[#009b5f]/80 bg-[#131313] backdrop-blur-md"
                    : "border-transparent bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <button
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection("hero")}
                >
                    <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                    <h1 className="text-lg font-bold text-gray-400">
                        <span className="whitespace-nowrap">Thomas De Clerck</span>&nbsp;
                        <span className="sm:inline-block hidden">| IT-student</span>
                    </h1>
                </button>

                {/* Desktop Navigation */}
                <ul className="list-none hidden sm:flex flex-row gap-10 text-lg font-semibold">
                    <li>
                        <button
                            className={`${
                                activeSection === "about" ? "text-[#009b5f]" : "text-gray-400"
                            } hover:text-gray-300 cursor-pointer`}
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </button>
                    </li>
                    
                    <li>
                        <button
                            className={`${
                                activeSection === "work" ? "text-[#009b5f]" : "text-gray-400"
                            } hover:text-gray-300 cursor-pointer`}
                            onClick={() => scrollToSection("work")}
                        >
                            Achievements
                        </button>
                    </li>

                    <li>
                        <button
                            className={`${
                                activeSection === "internship" ? "text-[#009b5f]" : "text-gray-400"
                            } hover:text-gray-300 cursor-pointer`}
                            onClick={() => scrollToSection("internship")}
                        >
                            Internship
                        </button>
                    </li>

                    <li>
                        <button
                            className={`${
                                activeSection === "contact" ? "text-[#009b5f]" : "text-gray-400"
                            } hover:text-gray-300 cursor-pointer`}
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? closeIcon : phoneIcon}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-[#131313] border border-gray-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex flex-col gap-4 text-lg font-semibold">
                            <li>
                                <button
                                    className={`${
                                        activeSection === "about"
                                            ? "text-[#009b5f]"
                                            : "text-gray-400"
                                    } hover:text-gray-300`}
                                    onClick={() => {
                                        scrollToSection("about");
                                        setToggle(false);
                                    }}
                                >
                                    About
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`${
                                        activeSection === "work"
                                            ? "text-[#009b5f]"
                                            : "text-gray-400"
                                    } hover:text-gray-300`}
                                    onClick={() => {
                                        scrollToSection("work");
                                        setToggle(false);
                                    }}
                                >
                                    Achievements
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`${
                                        activeSection === "internship"
                                            ? "text-[#009b5f]"
                                            : "text-gray-400"
                                    } hover:text-gray-300`}
                                    onClick={() => {
                                        scrollToSection("internship");
                                        setToggle(false);
                                    }}
                                >
                                    Internship
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`${
                                        activeSection === "contact"
                                            ? "text-[#009b5f]"
                                            : "text-gray-400"
                                    } hover:text-gray-300`}
                                    onClick={() => {
                                        scrollToSection("contact");
                                        setToggle(false);
                                    }}
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
