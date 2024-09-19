import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-b bg-neutral-950 pb-20">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="my-20 text-center text-4xl">
                Contato
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    href="#" className="border-b">
                    {CONTACT.email}
                </motion.a>
            </div>
        </div>
    )
}

export default About