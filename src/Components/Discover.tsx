
export default function Discover() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-brown-500 sm:text-4xl font-rajdhani">Featured Products</h2>
                    <p className="max-w-md mx-auto mt-1 text-brown-500 font-semibold font-rajdhani">
                        Shop our most popular products
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src="/Assets/ToteBags.png"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Tote Bags</h3>
                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="relative block group">
                            <img
                                src="/Assets/DuffleBags.png" alt="Featured2"
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Duffle Bags</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="relative block group">
                            <img
                                src="/Assets/Bagpack.png"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Backpacks</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
