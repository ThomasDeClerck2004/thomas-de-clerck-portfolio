import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Project } from '../components';

export default function Work() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section
            id="work"
            ref={sectionRef}
            className="scroll-mt-40 sm:scroll-mt-36 lg:scroll-mt-32 flex justify-center items-center overflow-hidden"
        >
            <div className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-10 2xl:pt-12 pb-16 2xl:pb-24">
                <motion.p
                    className="text-[#009b5f] pb-2 sm:text-left text-center text-xs lg:text-base 2xl:text-lg font-medium tracking-wider uppercase"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={containerVariants}
                >
                    MY WORK
                </motion.p>
                <motion.h3
                    className="text-white font-bold text-3xl lg:text-5xl 2xl:text-6xl sm:text-left text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    variants={containerVariants}
                >
                    Projects.
                </motion.h3>

                <Project
                    projects={[
                        {
                            name: "FilmVault",
                            imageUrl: "/assets/FilmVault.gif",
                            link: "https://filmvault.filmvault.be/",
                            description: "A website to track movies and series you've watched or want to watch. Features include watchlists, trailers, and downloads.",
                            descriptionLong: "In the first semester of the second year of my studies, during the Web Development course, we were assigned to create a website independently. The project required a sufficiently complex database structure to support multiple entities, allowing us to implement CRUD functionalities and user management. For this assignment, I developed a website that helps users keep track of the films and series they have watched or plan to watch. Users can create and download personalized watchlists, watch trailers, and access various other features designed to enhance their viewing experience.",
                            myContribution: (
                                <>
                                    I developed this project all by myself. I created the database, the CRUD pages, the authentication system and also the documentation. I've also learned how to call two third-party APIs and use their data. For example, when creating a movie in the movie CRUD page, you can search by name, and the fields will be automatically filled. Try it out! (Click on more info button for website) 
                                    <br />
                                    <br />
                                    <strong>User account:</strong> <br />
                                    Email: jane.doe@example.com | Password: user1234
                                </>
                            ),
                            tools: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 1,
                        },
                        {
                            name: "Donkey Kong",
                            imageUrl: "/assets/donkeykong.gif",
                            link: "https://github.com/Thomas997/Donkey-Kong",
                            description: "A recreation of the classic Donkey Kong game using Windows Forms and C#, made as our high school final project.",
                            descriptionLong: (
                                <>
                                    In the second semester of the sixth year of high school, during the Programming course, we were assigned a final project to demonstrate everything we had learned up to that point. Together with a friend, I chose to recreate the classic game Donkey Kong, a fun but challenging task, especially since we had to use C# and Windows Forms. 
                                    <br />
                                    <br />
                                    The result was a fully working recreation of Donkey Kong, built from scratch using C# and Windows Forms. The project tested our understanding of object-oriented programming, event handling, and graphical interface design, while also allowing us to apply creativity and problem-solving in a practical setting.
                                </>
                            ),
                            myContribution: "My contribution to this project was designing the level layout — not the art — and making sure that the walls functioned correctly as obstacles. I also worked on the logic for Donkey Kong throwing barrels and ensured the barrels bounced off each wall properly. In addition, I implemented the ladders. Things like the menu, music and the start screen and more were done by my friend.",
                            tools: ["C#", "Windows Forms", "Access"],
                            numberOfContributors: 2,
                        },
                        {
                            name: "Personal Portfolio",
                            imageUrl: "/assets/portfolio.gif",
                            link: "https://github.com/ThomasDeClerck2004/skill-2-portfolio-2024-2025",
                            description: "My personal portfolio site, built from scratch in React for a school assignment. It was my first time using React.",
                            descriptionLong: (
                                <>
                                    During the second semester of my second year as an IT student, I took part in the Skills Integration Lab 2 course, where we were tasked with creating a personal portfolio website to demonstrate our programming skills and knowledge. The site you're currently visiting is the final product of that assignment. 
                                    <br />
                                    <br />
                                    While React wasn’t a requirement, I chose to use it to push myself out of my comfort zone and explore something new, instead of relying on Laravel, which I had already used in earlier projects. This was my first experience working with React, and it turned out to be a rewarding learning process. I gained a lot of new insights and really enjoyed building the site from the ground up.
                                </>
                            ),
                            myContribution: "I developed this project all by myself, learning React and other tools along the way, which was a great experience.",
                            tools: ["React", "Tailwind CSS", "Framer Motion", "Alpine.js", "Parallax Tilt", "React Router", "..."],
                            numberOfContributors: 1,
                        },
                        {
                            name: "Project Skil-2 | TTC Westel",
                            imageUrl: "/assets/TTC.gif",
                            link: "/assets/Report_TTC_Westel.pdf",
                            description: "Team project with an internal client at Thomas More. We used Scrum, held stand-ups, created ERDs and use cases, and designed a prototype in Figma.",
                            descriptionLong: (
                                <>
                                    As part of a team of six students, including myself, we were assigned to develop an IT project for an internal client: TTC Westel, a local table tennis club in which one of our teachers is involved. The goal was to gain hands-on experience with the early phases of a software project.
                                    <br />
                                    <br />
                                    Working closely with the client, we conducted several meetings to understand their needs and used the Scrum methodology with daily stand-ups to manage our workflow. Throughout the project, we created an Entity Relationship Diagram (ERD), Use Case diagrams, and analyzed the functional requirements. We also designed a visual proof of concept using Figma and documented the entire process in a detailed report.
                                </>
                            ),
                            myContribution: (
                                <>
                                    My contribution to this project mainly involved helping to create the diagrams, such as the Use Case diagram and the ERD. I was also responsible for designing several pages in Figma and contributed significantly to the final report.
                                    <br />
                                    <br />
                                    Through this project, I learned how to work effectively in a team, communicate with a real client, and apply the Scrum methodology.
                                </>
                            ),
                            tools: ["Figma", "StarUML", "Microsoft Word", "..."],
                            numberOfContributors: 6,
                        },
                        {
                            name: "Project Skil-2 | De Duffalos",
                            imageUrl: "/assets/duffalo.gif",
                            link: "https://de.duffalos.be/",
                            description: "Developed a website for football club De Duffalos. Worked in a team of six using Scrum throughout the entire project lifecycle.",
                            descriptionLong: (
                                <>
                                    During the second semester of my second year studying IT at Thomas More, I worked with six fellow students to develop a website for De Duffalos, an internal client of the school. This project was part of the course Skills Integration Lab 2 and was the largest group project I had taken on so far. 
                                    <br />
                                    <br />
                                    We applied the SCRUM methodology, held regular stand-up meetings, and collaborated closely throughout the different phases of the project. In the end, we successfully delivered a functional and well-structured website for our client.
                                </>
                            ),
                            myContribution: (
                                <>
                                    My contribution to this project included overall code testing, creating the CRUD pages, implementing middleware for authentication, setting up and seeding the database, and more. I also worked on the documentation.
                                    <br />
                                    <br />
                                    Through this project, I strengthened my skills in Laravel, PHP, Blade, and Tailwind CSS. Although I already had some experience with these technologies, working on a real project in a larger team helped me deepen my understanding and apply best practices.
                                </>
                            ),
                            tools: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 6,
                        },
                        {
                            name: "Brussels Brews",
                            imageUrl: "/assets/brews.gif",
                            link: "https://brewery1itf604.netlify.app/",
                            description: "Created a fictional brewery website for Brussels Brews in a group of three, focusing on both front-end and back-end.",
                            descriptionLong: "During the second semester of my first year studying IT at Thomas More, I worked with two classmates on a project for the course Full Stack Essentials. We were tasked with designing and building a website for a fictional client Brussels Brews, a beer brewery. This was our first experience developing a full-stack website, involving both front-end and back-end work. It was a valuable introduction to combining different technologies and collaborating in a small team to bring a project from concept to completion.",
                            myContribution: (
                                <>
                                    We divided the different pages among ourselves and helped each other where needed. I was responsible for the homepage, the 'How it's made' page, and the contact page.
                                    <br />
                                    <br />
                                    Through this project, I built on my existing experience with HTML, CSS, JavaScript, PHP, and Bootstrap, while learning how to integrate a Python API for the first time. It was my first full-stack development project, which taught me how to connect the front end with the back end effectively.
                                    <br />
                                    <strong>**Note:**</strong> Azure Database connection is not running anymore, but the website is still functional.
                                </>
                            ),
                            tools: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Python"],
                            numberOfContributors: 3,
                        },
                        {
                            name: "Project IoT-Bridge",
                            imageUrl: "/assets/IoT.gif",
                            link: "https://www.youtube.com/watch?v=Z2LBS0gXR6E",
                            description: "Built a smart bridge system in a group of three for our IoT course. The bridge opened for boats and closed for cars, based on requirements.",
                            descriptionLong: "During the second semester of my first year at Thomas More, I worked on a group project for the IoT Essentials course. Together with two classmates, we were tasked with designing and building a project based on a set of requirements using IoT technology. We came up with the idea of a smart bridge that uses sound sensors to detect approaching boats. The bridge would automatically open for boat traffic and close again to allow land traffic to cross. It was a challenging and creative project that helped us understand how to apply sensors and automation in real-world scenarios.",
                            myContribution: (
                                <>
                                    My contribution to this project was helping to write the Python code that controlled the opening and closing of the bridge, the bridge design, as well as working on the final documentation.
                                    <br />
                                    <br />
                                    Through this project, I gained practical experience with Python, the Orange Pi, multithreading, and various IoT components. I learned how to work with hardware inputs and manage concurrent processes using multithreading.
                                </>
                            ),
                            tools: ["Python", "OrangePI", "Multithreading", "IoT Gear"],
                            numberOfContributors: 3,
                        },
                        {
                            name: "Shushify",
                            imageUrl: "/assets/shushify.jpg",
                            link: "https://github.com/ThomasDeClerck2004/Shushify",
                            description: "A small automation script that mutes Spotify ads by detecting when an advertisement is playing and restores the volume afterwards.",
                            descriptionLong: "I created a lightweight script to make listening to Spotify more enjoyable without constant interruptions. The script automatically detects when Spotify starts playing an advertisement, mutes the system volume of Spotify, and then restores the sound back to its original level once the ad is finished. This way, I can continue enjoying my music seamlessly without being disturbed by ads. The project demonstrates my ability to identify everyday annoyances and solve them with practical programming solutions.",
                            myContribution: (
                                <>
                                    I independently built this project from scratch, making full use of the Spotify Developer API and several Python libraries. To ensure accessibility, I also created a clear README with a step by step guide, so that anyone can set up and use the script easily.
                                </>
                            ),
                            tools: ["Python", "API usage"],
                            numberOfContributors: 1,
                        },
                    ]}
                />
            </div>
        </section>
    );
}
