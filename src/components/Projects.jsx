import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="my-20 text-center text-4xl">
                Projetos
            </motion.h1>
            <div className="">{PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        transition={{ duration: 0.5, delay: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/4">
                        <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
                    </motion.div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <motion.h6
                            transition={{ duration: 0.5, delay: 0.5 }}
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-2 font-semibold">
                            <a href="https://github.com/Robson47/Java-OS" target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </motion.h6>
                        <motion.p
                            transition={{ duration: 0.5, delay: 1 }}
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-4 text-neutral-400">
                            {project.description}
                        </motion.p>
                        {project.technologies.map((tech, index) => (
                            <motion.span
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                key={index} className="mr-2 rounded bg-neutral-900 py-1 text-sm font-medium text-blue-500">
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            ))}</div>
        </div>
    )
}

export default Projects;