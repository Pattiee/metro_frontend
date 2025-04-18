import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-20 px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Metro Shop</h2>
                <p className="text-lg md:text-xl mb-6">Your favorite products, just a click away.</p>
                <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">
                    Shop Now
                </button>
            </section>
        </>
  )
}

export default Hero
