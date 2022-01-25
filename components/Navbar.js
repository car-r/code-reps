import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="bg-black">
            <nav className="flex">
                <div className="w-full py-4">
                    <div className=" flex items-center mx-auto max-w-4xl w-11/12 justify-between">
                        <div className="text-4xl text-gray-600">
                            <Link href="/">C.</Link>
                        </div>
                        <div className="flex gap-6">
                            <Link href="/about">
                                <a className="text-gray-600 py-1 px-3 rounded-lg border-2 border-gray-800 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-400 transition ease-in duration-300">
                                    About
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a className="text-gray-600 py-1 px-3 rounded-lg border-2 border-gray-800 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-400 transition ease-in duration-300">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="text-gray-600 py-1 px-3 rounded-lg border-2 border-gray-800 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-400 transition ease-in duration-300">
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
