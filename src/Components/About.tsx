import { useNavigate } from 'react-router-dom'
export default function About() {
    const navigate = useNavigate()
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 pt-3">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative flex items-center bg-brown-700">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-10 lg:block lg:w-16 "
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-4xl font-rajdhani text-yellow-500">
                                INSPIRED BY HERITAGE. BUILT FOR GENERATIONS.
                            </h2>

                            <p className="mt-4 text-white font-rajdhani">
                                Genuine full grain leather. Durable hardware and finishings. If it bears the Heritage Name, it’s made for the long haul.                            </p>
                            <a
                                className="mt-8 inline-block border font-rajdhani border-white bg-transparent px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                onClick={() => {
                                    navigate('/contact')
                                }}
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="House"
                                src="/Assets/Extention2.png"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
