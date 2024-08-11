import { motion } from 'framer-motion';

const SlidingImage = ({ imageSrc }) => {

    const variants = {
        initial: { opacity: 0, x: '-100w' }, // Start position
        visible: { opacity: 1, x: 0 }, // End position
    }

    return (
        <motion.div
        initial="initial"
        animate="visible"
        variants={variants} 
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1, 
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        }}
        >

        </motion.div>
    )
}

export default SlidingImage