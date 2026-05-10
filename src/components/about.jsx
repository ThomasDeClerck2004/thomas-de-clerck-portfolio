import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { slideIn } from '../utils/animations';

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section 
            id="about" 
            ref={sectionRef} 
            className="scroll-mt-40 sm:scroll-mt-36 lg:scroll-mt-32 flex justify-center items-center overflow-hidden"
        >
            <div className="container mx-auto px-4 lg:px-10 2xl:px-20 pt-10 2xl:pt-12">
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                >
                    <p className="text-[#009b5f] pb-2 sm:text-left text-center text-xs lg:text-base 2xl:text-lg font-medium tracking-wider uppercase">INTRODUCTION</p>
                    <h3 className="text-white font-bold text-3xl lg:text-5xl 2xl:text-6xl sm:text-left text-center">About me.</h3>
                </motion.div>

                <div className="flex flex-col lg:flex-row py-8 2xl:py-10 gap-8 2xl:gap-10">
                    {/* Image Section */}
                    <motion.div
                        className="hidden 2xl:block 2xl:rounded-md 2xl:w-[3000px] 2xl:h-[500px] 2xl:shadow-lg 2xl:shadow-primary"
                        variants={slideIn('left', 'tween', 0.2, 1)}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        <Tilt
                            className="shadow-lg border-4 border-[#009b5f] rounded-2xl"
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={400}
                            style={{
                                width: '100%',
                                height: '100%',
                                boxShadow: '0 0 20px #009b5f', // Add green glow effect
                                borderRadius: '1.2rem',
                            }}
                        >
                            <img
                                src="/assets/Thomas_De_Clerck_Portrait.jpg"
                                alt="about"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </Tilt>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="flex flex-col justify-start"
                        variants={slideIn('right', 'tween', 0.2, 1)}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        <h2 className="text-gray-300 font-bold text-3xl lg:text-4xl sm:text-left text-center">
                            Hello, I'm <span className="text-[#009b5f]">Thomas</span>
                        </h2>
                        <p className="text-gray-300 font-bold text-lg lg:text-xl 2xl:text-2xl pt-4 sm:text-left text-center">
                          I am an enthusiastic 21-year-old IT developer currently studying at Thomas More in Geel, Belgium. 
                          My love for technology and creative design drives me to build modern, responsive websites using the latest frameworks and tools. 
                          Ever since high school, I’ve been fascinated by how digital systems work and have constantly sought to expand my knowledge. 
                          I’m highly motivated, eager to learn, and always open to discovering new technologies. With a strong eye for detail, I enjoy working with others and want to keep improving my skills by building useful and well-designed digital products.
                        </p>

                        <div className='flex flex-col mt-4 text-white'>
                            <div className='flex flex-row items-center gap-1 mb-3'>
                                <img src="/assets/gmail.png" alt="about" className="w-6 h-6 mr-2" />
                                <p>Email: <a href='mailto:thomas.seth.de.clerck@gmail.com' className='underline underline-offset-4 decoration-[#009b5f] hover:text-[#009b5f] transition duration-300 ease-in-out'>thomas.seth.de.clerck@gmail.com</a></p>
                            </div>
                            <div className='flex flex-row items-center gap-1 mb-3'>
                                <img src="/assets/github.png" alt="about" className="w-6 h-6 mr-2" />
                                <p>Github: <a href='https://github.com/ThomasDeClerck2004' target='_blank' className='underline underline-offset-4 decoration-[#009b5f] hover:text-[#009b5f] transition duration-300 ease-in-out'>ThomasDeClerck2004</a></p>
                            </div>
                            <div className='flex flex-row items-center gap-1 mb-3'>
                                <img src="/assets/linkedin.png" alt="about" className="w-6 h-6 mr-2" />
                                <p>LinkedIn: <a href='https://www.linkedin.com/in/thomas-de-clerck-b9162b2a2/' target='_blank' className='underline underline-offset-4 decoration-[#009b5f] hover:text-[#009b5f] transition duration-300 ease-in-out'>thomas-de-clerck</a></p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-3">
                            <a
                                href="/assets/CV_Thomas_De_Clerck_2025_EN.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="CV_Thomas_De_Clerck_2025_EN.pdf"
                                className="bg-[#009b5f] hover:bg-[#01b872] border-2 border-[#009b5f] hover:border-[#01b872] transition duration-300 ease-in-out py-3 px-6 w-full sm:w-auto text-white font-bold shadow-md shadow-primary rounded-xl text-center inline-block"
                            >
                               VIEW RESUME (EN)
                            </a>
                            <a
                                href="/assets/CV_Thomas_De_Clerck_2025_NL.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="CV_Thomas_De_Clerck_2025_NL.pdf"
                                className="bg-[#0d0d0d] hover:bg-[#009b5f] border-2 border-[#009b5f] transition duration-300 ease-in-out py-3 px-6 w-full sm:w-auto text-white font-bold shadow-md shadow-primary rounded-xl text-center inline-block"
                            >
                                VIEW RESUME (NL)
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
