import { Hero, About, Work, Contact, Experience, Skills, Hobbies } from "../components";

export default function IndexPage() {
    return (
        <div className="relative z-0">
            <Hero />
            <About />
            <Hobbies />
            <Skills />
            <Experience />
            <Work />
            <Contact />
        </div>
    );
}