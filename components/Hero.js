import React from 'react'

const Hero = () => {
    return (
        <div className="bg-black flex flex-col py-32">
            <h1 className="text-white text-3xl mx-auto mb-2">Career Change Coder</h1>
            <p className="text-gray-500 mx-auto mb-4">Documenting a journey of learning to code</p>
            <button className="bg-blue-700  text-white rounded-md mx-auto py-1 px-4 hover:bg-blue-500 transition ease-in">Subscribe</button>
        </div>
    )
}

export default Hero
