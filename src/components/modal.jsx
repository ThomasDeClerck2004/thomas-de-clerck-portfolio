import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ project, onClose }) {
    // Prevent background scroll
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const modalContent = (
        <div
            className="fixed inset-0 bg-transparent flex justify-center items-center z-[9999] pointer-events-auto backdrop-blur-md"
            onClick={onClose} // Clicking the overlay closes the modal
        >            
            <div
                className="bg-[#1a1a1a] border-2 border-[#009b5f] rounded-lg p-8 w-4/5 max-w-5xl pointer-events-auto relative mx-auto my-auto sm:w-full sm:p-4 sm:mx-4
                max-h-[100vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevents modal clicks from closing
            >         
                {/* Header with close button */}
                <div className="flex justify-between items-start mb-4">
                    <h2 className="inline-flex text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                        <div className='hidden sm:flex items-center pt-1 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="items-end h-8 w-8 text-[#009b5f]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <p className='justify-center items-center ml-1 text-xl'>{project.numberOfContributors}</p>
                        </div>
                        <span className='hidden sm:inline-block pr-2'>-</span> {project.name}
                    </h2>
                    <button
                        onClick={onClose}
                        className="flex justify-center items-center w-10 h-10 min-w-10 min-h-10 aspect-square rounded-full bg-[#2c2b2b] hover:bg-[#353535] text-gray-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Project image */}
                <div className="hidden sm:block relative rounded-lg overflow-hidden mb-6 group">
                    {project.videoUrl ? (
                        <video
                            autoPlay
                            muted
                            defaultMuted
                            loop
                            playsInline
                            disablePictureInPicture
                            preload="none"
                            poster={project.imageUrl || "/assets/placeholder.png"}
                            className="w-full h-70 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                        >
                            <source src={project.videoUrl} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={project.imageUrl || "/assets/placeholder.png"}
                            alt={project.name}
                            className="w-full h-70 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className='space-y-6'>
                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 sm:text-sm sm:break-words">{project.descriptionLong}</p>

                    {/* Contribution */}
                    <div className="bg-[#2c2b2b] shadow-2xl rounded-lg p-4 border-l-4 border-emerald-500">
                        <h3 className="text-lg font-semibold text-white mb-2">My Contribution & What I Learned</h3>
                        <p className="text-gray-300 text-sm">{project.myContribution}</p>
                    </div>

                    {/* Tools */}
                    <div>
                        <div className='mb-2'>
                            <h3 className="text-lg font-semibold text-white flex items-center">
                                <span className="mr-2">Tools Used / Learned</span>
                                <span className="h-px flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="border-2 border-[#009b5f] text-[#009b5f] text-sm font-semibold px-3 py-1 rounded-full"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* More info */}
                    <div className="mt-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#009b5f] hover:bg-[#01b872] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out inline-flex items-center"
                        >
                            More Info
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
}