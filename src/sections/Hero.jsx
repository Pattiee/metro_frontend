import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="bg-orange-500 dark:bg-orange-700 text-white dark:text-gray-100 py-20 px-6 text-center transition-colors duration-300">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Metro</h2>
                <p className="text-lg md:text-xl mb-6">Your favorite products, just a click away.</p>
                <button className="bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-300 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"> Shop Now </button>
            </section>
        </>
  )
}

export default Hero
