import { useNavigate } from "react-router-dom"

export default function Discover() {
    const navigate = useNavigate()
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-brown-700 sm:text-4xl font-rajdhani">Featured Products</h2>
                    <p className="max-w-md mx-auto mt-1 text-brown-700 font-semibold font-rajdhani">
                        Shop our most popular products
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li>
                        <a className="relative block group" onClick={
                            () => navigate('/shop/tote bags')
                        }>
                            <img
                                src="/Assets/ToteBags.png"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-bold font-rajdhani text-brown-700">Tote Bags</h3>
                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide
                                     text-white
                                     hover:bg-transparent
                                        hover:text-black
                                        transition
                                        duration-300
                                        hover:border
                                        hover:border-black
                                     "
                                    onClick={() => {
                                        navigate('/shop/tote bags')
                                    }}
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a className="relative block group"
                            onClick={
                                () => navigate('/shop/duffle bags')
                            }
                        >
                            <img
                                src="/Assets/DuffleBags.png" alt="Featured2"
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-bold font-rajdhani text-brown-700">Duffle Bags</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide
                                     text-white
                                     hover:bg-transparent
                                        hover:text-black
                                        transition
                                        duration-300
                                        hover:border
                                        hover:border-black
                                     "
                                    onClick={() => {
                                        navigate('/shop/duffle bags')
                                    }}
                                >
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a className="relative block group"
                            onClick={
                                () => navigate('/shop/backpacks')
                            }
                        >
                            <img
                                src="/Assets/Bagpack.png"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-bold text-brown-700 font-rajdhani">Backpacks</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide
                                     text-white
                                     hover:bg-transparent
                                        hover:text-black
                                        transition
                                        duration-300
                                        hover:border
                                        hover:border-black
                                     "
                                    onClick={() => {
                                        navigate('/shop/backpacks')
                                    }}
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
