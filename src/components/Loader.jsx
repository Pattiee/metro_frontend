import React from 'react'
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div>
            <dialog>
                <p>Loading data...</p>
            </dialog>
        </motion.div>
  )
}

export default Loader
