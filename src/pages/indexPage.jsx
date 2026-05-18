import { lazy, Suspense } from "react";
import { Hero } from "../components";

const About = lazy(() => import("../components/about"));
const Hobbies = lazy(() => import("../components/hobbies"));
const Skills = lazy(() => import("../components/skills"));
const Experience = lazy(() => import("../components/experience"));
const Work = lazy(() => import("../components/work"));
const Internship = lazy(() => import("../components/internship"));
const Contact = lazy(() => import("../components/contact"));

export default function IndexPage() {
    return (
        <div className="relative z-0">
            <Hero />

            <Suspense fallback={null}>
                <About />
                <Hobbies />
                <Skills />
                <Experience />
                <Work />
                <Internship />                
                <Contact /> 
            </Suspense>
        </div>
    );
}