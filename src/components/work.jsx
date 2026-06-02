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
            <div className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-10 2xl:pt-12 pb-8 2xl:pb-10">
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
                            imageUrl: "/assets/thumbnails/filmvault.jpg",
                            videoUrl: "/assets/FilmVault.mp4",
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
                            imageUrl: "/assets/thumbnails/donkeykong.jpg",
                            videoUrl: "/assets/Donkeykong.mp4",
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
                            name: "Knowledge Sharing Platform",
                            imageUrl: "/assets/thumbnails/kennisdelingsplatform.jpg",
                            videoUrl: "/assets/Kennisdelingsplatform.mp4",
                            link: "/assets/internship-realization-document.pdf",
                            description: "An internal knowledge-sharing platform built for Axxes during my internship, focused on centralizing and managing company knowledge.",
                            descriptionLong: (
                                <>
                                    During my internship at Axxes, I worked on an internal knowledge-sharing platform together with a team of fellow interns. The goal of this project was to create a central place where employees could share, manage and discover knowledge more easily, instead of having information spread across different tools and channels.
                                    <br />
                                    <br />
                                    This project gave me the opportunity to work on a larger real-world application using Angular, Java Spring Boot, MySQL and Azure Entra ID. I contributed to several parts of the platform, including frontend components, topic management, tag management, user roles, authentication-related functionality and backend refactoring. It was a valuable experience because I learned how to work in a team, handle feedback from stakeholders and build software that had to fit within a professional company context.
                                </>
                            ),
                            myContribution: "I worked on both the frontend and backend, including topic features, tag management, user role management, the responsive sidebar, error pages and parts of the backend refactor.",
                            tools: ["Angular", "Java Spring Boot", "MySQL", "Azure Entra ID", "Tailwind CSS", "Bitbucket", "Jira", "..."],
                            numberOfContributors: 4,
                        },
                        {
                            name: "Salesforce Business Case",
                            imageUrl: "/assets/thumbnails/salesforce.jpg",
                            videoUrl: "/assets/SalesForce.mp4",
                            link: "https://www.linkedin.com/posts/thomas-de-clerck-b9162b2a2_thomasmore-itfactory-deloittedigital-ugcPost-7403019827679748096-EPtE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkQWt0BGbrMGjCZIGxx3ZZTTmX_Qi5CQeM",
                            description: "A full Salesforce platform built as part of a Deloitte-led business case, where we designed and implemented a solution for a simulated company.",
                            descriptionLong: (
                                <>
                                    During the first semester of my third year as an IT student, I took part in a Deloitte-led business case focused on Salesforce. The assignment was based on Equibel Automotive, a simulated company active in the horse truck and motorhome industry. Together with my teammate, I had to analyse the client’s needs and translate them into a working Salesforce solution.
                                    <br />
                                    <br />
                                    The project started with a Salesforce and Deloitte bootcamp, where we learned the foundations of Salesforce, Jira, client interviews and agile project delivery. After that, we worked on the actual business case by configuring the Salesforce environment, setting up the CRM structure, implementing user stories and preparing the solution for a client-style presentation.
                                    <br />
                                    <br />
                                    This project was especially valuable because it combined technical configuration with business analysis and client communication. I learned how important it is to ask the right questions, document requirements clearly and build a solution that matches the needs of the business instead of only focusing on the technical side.
                                </>
                            ),
                            myContribution: "I worked on the Salesforce configuration, translated business requirements into user stories, helped structure the CRM solution and contributed to the final client presentation.",
                            tools: ["Salesforce", "Sales Cloud", "Salesforce Flow", "Validation Rules", "Reports & Dashboards", "Jira", "..."],
                            numberOfContributors: 2,
                        },
                        {
                            name: "Microsoft 365 Project",
                            imageUrl: "/assets/thumbnails/microsoft.jpg",
                            videoUrl: "/assets/Microsoft.mp4",
                            link: "https://youtu.be/ZPyLV5aCMYE",
                            description: "A Microsoft 365 and Power Platform proof of concept built for IOK Waste Management, focused on digitalising the paper-based ROS registration process.",
                            descriptionLong: (
                                <>
                                    During the first semester of my third year as an IT student, I took part in a real business case for IOK Waste Management. The assignment focused on the ROS process, where drivers currently register collections from recycling parks on paper. Together with my teammate, I had to analyse the existing workflow and design a proof of concept that could digitalise this process using Microsoft 365 and Power Platform.
                                    <br />
                                    <br />
                                    The project started with an introduction to Microsoft 365, Power Apps, Power Automate, Dataverse and SharePoint. After that, we analysed the needs of the different users, such as ROS drivers, administrative employees and management. Based on those needs, we built a low-code solution that allowed collection data to be registered digitally, reduced manual input, improved traceability and supported reporting.
                                    <br />
                                    <br />
                                    This project was especially valuable because it was not only about building an application, but also about thinking like a consultant. We had to understand the client’s process, ask the right questions, make realistic choices within the Microsoft ecosystem and explain how our solution created business value for IOK Waste Management.
                                </>
                            ),
                            myContribution: "I worked on the analysis of the ROS process, helped translate the business requirements into a Power Platform solution, contributed to the Power Apps and Dataverse structure, and helped prepare the final customer-oriented demo.",
                            tools: ["Microsoft 365", "Power Apps", "Power Automate", "Dataverse", "SharePoint", "Power BI", "..."],
                            numberOfContributors: 2,
                        },
                        {
                            name: "Shushify",
                            imageUrl: "/assets/shushify.jpg",
                            videoUrl: null,
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
                        {
                            name: "Project Skil-2 | De Duffalos",
                            imageUrl: "/assets/thumbnails/duffalo.jpg",
                            videoUrl: "/assets/Duffalo.mp4",
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
                            tools: ["Laravel", "Tailwind CSS", "Alpine.js", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 6,
                        },
                        {
                            name: "Over21",
                            imageUrl: "/assets/thumbnails/over21.jpg",
                            videoUrl: "/assets/Over21.mp4",
                            link: "/assets/Over21 Voorstel.pdf",
                            description: "Created an AI-powered blackjack chatbot application called Over21 in a team project, focusing on chatbot interaction, API integration, and adaptive cards.",
                            descriptionLong: "During the AI.NET course at Thomas More, I worked on Over21, a fictional casino application built around a transactional chatbot. The goal of the project was to create a chatbot that could interact with users in Microsoft Teams and allow them to play blackjack against an AI opponent. The application combined a .NET API, Semantic Kernel plugins, Microsoft Bot Framework, Azure Bot Service, and adaptive cards to create an interactive and user-friendly experience. This project was a valuable introduction to building AI-supported applications that do more than only answer questions, by also connecting to APIs, managing game state, and performing real actions based on user input.",
                            myContribution: (
                                <>
                                    Within this project, we worked together on building the chatbot structure, the API connection, and the blackjack functionality. I contributed to the development of the chatbot flow, the communication between the Azure Bot and the API, and the adaptive cards that allowed users to start a game, place a bet, and choose actions such as hit or stand.
                                    <br />
                                    <br />
                                    Through this project, I gained experience with Semantic Kernel, plugin-based AI functionality, and Microsoft Bot Framework. I also learned how to build a chatbot that communicates with a back-end API and returns structured responses using adaptive cards. This helped me better understand how AI can be combined with traditional software development to create interactive applications.
                                    <br />
                                    <strong>**Note:**</strong> The Azure and Teams hosting setup may no longer be active, but the project still demonstrates the full chatbot architecture and game logic.
                                </>
                            ),
                            tools: [".NET", "C#", "ASP.NET Core Web API", "Semantic Kernel", "Microsoft Bot Framework", "Azure Bot Service", "Microsoft Teams"],
                            numberOfContributors: 2,
                        },
                        {
                            name: "Vinylla",
                            imageUrl: "/assets/thumbnails/vinylla.jpg",
                            videoUrl: "/assets/Vinylla.mp4",
                            link: "/assets/Flutter + Unity Vuforia AR Project.pdf",
                            description: "Created a Spotify/music-themed mobile application called Vinylla in a group project, combining app development with augmented reality features.",
                            descriptionLong: "During my IT studies at Thomas More, I worked with a teammate on Vinylla, a fictional music-themed mobile application. The name Vinylla was created by us and was used as the identity for the project. The app focused on combining a modern mobile experience with interactive features, where users could engage with music-related content in a more visual and innovative way. This project gave us the opportunity to work with mobile development, back-end integration and augmented reality technologies within one complete application.",
                            myContribution: (
                                <>
                                    Within this project, we divided the work between the two of us and supported each other where needed. I contributed to the development of the mobile application by working on assigned parts of the app, helping with the integration between the front-end, back-end and database, and making sure the different parts of the project worked together properly.
                                    <br />
                                    <br />
                                    Through this project, I gained experience with building a mobile application instead of a traditional website. I also learned more about combining different technologies into one coherent project. This helped me improve both my technical skills and my ability to collaborate in a small team.
                                </>
                            ),
                            tools: ["Flutter", "Unity", "Vuforia", "Tailwind CSS", "Supabase", "Java Spring Boot"],
                            numberOfContributors: 2,
                        },
                    ]}
                />
            </div>
        </section>
    );
}
