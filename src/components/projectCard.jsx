import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ projectName, imageUrl, description, onView, numberOfContributors }) {
    return (
        <Tilt
            className="w-full max-w-[340px] sm:max-w-[360px] 2xl:max-w-[400px] shadow-lg"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={400}
        >
            <motion.div
                className="relative bg-gradient-to-bl from-[#031e1456] to-[#399b75] border-4 border-[#0d0d0d] rounded-2xl shadow-lg shadow-primary p-4 sm:p-5 2xl:p-6 w-full min-h-[460px] sm:min-h-[470px] 2xl:min-h-[500px]"
                whileHover={{ scale: 1.05 }}
            >
                <div className="w-full max-w-md mx-auto bg-[#399b75] shadow-lg rounded-xl overflow-hidden">
                    <img
                        src={imageUrl || "/src/assets/placeholder.png"}
                        alt={projectName}
                        className="w-full h-44 sm:h-52 2xl:h-60 object-cover"
                    />
                    <div className="p-3 2xl:p-4">
                        <h2 className="text-base 2xl:text-lg font-semibold text-white">{projectName}</h2>
                    </div>
                </div>

                <div className='flex items-center mt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex items-end h-7 w-7 2xl:h-8 2xl:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <p className='flex justify-center items-center ml-1 text-lg 2xl:text-xl'>{numberOfContributors}</p>
                </div>

                <p className="text-gray-300 text-sm mt-2">{description}</p>
                <button
                    onClick={onView}
                    className="bg-[#009b5f] hover:bg-[#01b872] font-bold text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out absolute bottom-4 right-4 cursor-pointer"
                >
                    View
                </button>
            </motion.div>
        </Tilt>
    );
}
