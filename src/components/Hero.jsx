import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/profile-pic.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-5">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            transition={{ duration: 0.5, delay: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Robson Luciano
                        </motion.h1>
                        <motion.span
                            transition={{ duration: 0.5, delay: 0.5 }}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="ml-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-purple-500 to-90% bg-clip-text text-4xl tracking-tight text-transparent">
                            Desenvolvedor Back-End
                        </motion.span>
                        <motion.p
                            transition={{ duration: 0.5, delay: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="ml-2 mx-w-xl py-10 text-2xl font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    transition={{ duration: 0.5, delay: 1 }}
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <img className="rounded-3xl" src={profilePic} alt="Robson Luciano" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero