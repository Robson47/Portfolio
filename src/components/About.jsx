import aboutImg from '../assets/computer.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="my-20 text-center text-4xl">Sobre
                <span className="text-neutral-500"> mim</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    transition={{ duration: 0.5, delay: 0.5 }}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="Imagem sobre mim" />
                    </div>
                </motion.div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        transition={{ duration: 0.5, delay: 0.5 }}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-2xl font-light tracking-tighter">{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About;