import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-shrink-0 items-center">
                <img className="mx-2" src={logo} alt="Logo" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='mg-8 flex items-center justify-center gap-4 text-3xl'>
                <a href='#' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href='https://www.github.com/Robson47' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href='#' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </motion.div>
        </nav>
    )
}

export default Navbar