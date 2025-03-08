import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Profile() {
    const { token, setToken } = useContext(AuthContext)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

    const logoutHandle = () => {
        setToken(null)
    }

    return (
        <div className="relative flex items-center">
            {/* Avatar Button */}
            <button
                type="button"
                onClick={toggleDropdown}
                className="w-10 h-10 rounded-full cursor-pointer p-0 m-0"
            >
                <img
                    className="w-full h-full object-cover rounded-full"
                    src="/docs/images/people/profile-picture-5.jpg"
                    alt="User dropdown"
                />
            </button>

            {/* Dropdown Menu with Framer Motion */}
            <AnimatePresence>
                {dropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}  // Start position
                        animate={{ opacity: 1, y: 0 }}   // End position
                        exit={{ opacity: 0, y: -10 }}    // Exit animation
                        transition={{ duration: 0.3 }}  // Animation duration
                        className="absolute top-12 right-0 z-10 mt-2 divide-y divide-gray-100 rounded-lg shadow-lg w-44 bg-[#FAD0C4] p-0 m-0 max-w-xs sm:w-48"
                    >
                        <div className="px-4 py-3 text-sm text-gray-900">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">name@flowbite.com</div>
                        </div>

                        {token ? (
                            <ul className="py-2 text-sm text-gray-700 m-0">
                                <li>
                                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200 rounded">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200 rounded">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={logoutHandle} className="block px-4 py-2 hover:bg-red-500 text-red-700 hover:text-white rounded">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="py-2 text-sm text-gray-700 m-0">
                                <li>
                                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-200 rounded">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sign-up" className="block px-4 py-2 hover:bg-gray-200 rounded">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
