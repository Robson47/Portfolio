import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Techs = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="my-20 text-center text-4xl">
                Tecnologias
            </motion.h2>
            <motion.div
                transition={{ duration: 0.5, delay: 0.5 }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNpm className="text-7xl text-red-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-gray-600" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Techs