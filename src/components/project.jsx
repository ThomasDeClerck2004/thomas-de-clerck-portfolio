import React, { useState } from 'react';
import { ProjectCard } from "../components";
import Modal from './modal';

export default function Project({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row flex-wrap py-8 2xl:py-12 gap-8 2xl:gap-13 justify-center items-center text-gray-300">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.name}
                        imageUrl={project.imageUrl}
                        description={project.description}
                        index={index}
                        onView={() => openModal(project)}
                        numberOfContributors={project.numberOfContributors}
                    />
                ))}
            </div>

            {selectedProject && (
                <Modal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );
}
