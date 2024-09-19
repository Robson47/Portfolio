import { EXPERIENCES } from "../constants";
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="my-20 text-center text-4xl">
                Experiência
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            transition={{ duration: 0.5, delay: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <motion.h6
                                transition={{ duration: 0.5, delay: 0.75 }}
                                initial={{ x: 200, opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-blue-700">{experience.company}</span>
                            </motion.h6>
                            <motion.p
                                transition={{ duration: 0.5, delay: 1.25 }}
                                initial={{ x: 200, opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-4 text-neutral-400">
                                {experience.description}
                            </motion.p>
                            {experience.technologies.map((tech, index) => (
                                <motion.span
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500" >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;