import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navigation() {
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <>
            <header className="bg-brown-700 fixed 
            top-0 left-0 right-0 z-20">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center ">
                            <h1 className="
                            text-yellow-500
                            text-3xl
                            font-semibold
                            tracking-wider
                            font-rajdhani
                            ">Heritage Hides</h1>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md cursor-pointer"
                                            onClick={() => navigate('/')}
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md cursor-pointer"
                                            onClick={
                                                () => navigate('/about')
                                            }
                                        >
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md cursor-pointer"
                                            onClick={() => navigate('/contact')}
                                        >
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-white relative transition hover:text-white/75 font-rajdhani text-md cursor-pointer"
                                            onMouseEnter={
                                                () => setIsDropdownOpen(true)
                                            }
                                            onMouseLeave={
                                                () => setIsDropdownOpen(false)
                                            }
                                            onClick={() => {
                                                navigate(
                                                    '/shop/all'
                                                )
                                            }}
                                        >
                                            Shop Now
                                        </a>
                                        {/* Dropdown Content */}
                                        {isDropdownOpen && (
                                            <div className="absolute top-11 bg-white rounded shadow-lg p-4 "
                                                onMouseEnter={
                                                    () => setIsDropdownOpen(true)
                                                }
                                                onMouseLeave={
                                                    () => setIsDropdownOpen(false)
                                                }
                                            >
                                                <ul className="flex flex-col gap-1">
                                                    <li>
                                                        <a
                                                            className="text-brown-700 transition hover:text-brown-700/75 font-bold font-rajdhani text-md cursor-pointer"
                                                            onClick={() => {
                                                                navigate(
                                                                    '/shop/all'
                                                                )
                                                            }}
                                                        >
                                                            All
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-brown-700 transition hover:text-brown-700/75 font-bold font-rajdhani text-md cursor-pointer"
                                                            onClick={() => {
                                                                navigate(
                                                                    '/shop/backpacks'
                                                                )
                                                            }}
                                                        >
                                                            Backpacks
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-brown-700 transition hover:text-brown-700/75 font-bold font-rajdhani text-md cursor-pointer"
                                                            onClick={() => {
                                                                navigate(
                                                                    '/shop/duffle bags'
                                                                )
                                                            }}
                                                        >
                                                            Duffle Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-brown-700 transition hover:text-brown-700/75 font-bold font-rajdhani text-md cursor-pointer"
                                                            onClick={() => {
                                                                navigate(
                                                                    '/shop/tote bags'
                                                                )
                                                            }}
                                                        >
                                                            Tote Bags
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="text-brown-700 transition hover:text-brown-700/75 font-bold font-rajdhani text-md cursor-pointer"
                                                            onClick={() => {
                                                                navigate(
                                                                    '/shop/laptop bags'
                                                                )
                                                            }}
                                                        >
                                                            Laptop Bags
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>                                    <button
                                        className="
                                            bg-white
                                            text-brown-700
                                            px-4
                                            py-2
                                            rounded
                                            text-sm
                                            font-semibold
                                            tracking-wider
                                            hover:bg-white/75
                                            transition
                                            duration-200
                                            ease-in-out
                                            font-rajdhani
                                            "
                                        onClick={() => {
                                            navigate('/quotation')
                                        }}
                                    >Get Quote</button>

                                </ul>


                            </nav>

                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}
