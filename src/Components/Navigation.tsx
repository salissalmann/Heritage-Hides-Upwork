
export default function Navigation() {
    return (
        <>
            <header className="bg-brown-500 fixed 
            top-0 left-0 right-0 z-20">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
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
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md"
                                            href="/"
                                        >
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md"
                                            href="/"
                                        >
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-white transition hover:text-white/75 font-rajdhani text-md"
                                            href="/"
                                        >
                                            Shop Now
                                        </a>
                                    </li>
                                    <button
                                        className="
                                            bg-white
                                            text-brown-500
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
