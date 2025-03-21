import { useNavigate } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="text-white text-md font-rajdhani body-font bg-brown-700">
            <div className="container md:px-32 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="/Assets/Logo.png" alt="logo" className="w-10 h-10" />
                        <span className="ml-3 text-xl text-white font-rajdhani">Heritage Hides</span>
                    </a>
                    <p className="mt-2 text-sm text-white">Herirage Hides is a leather goods and apparel brand with a love for adventure and dedication to choosing a simpler way of living.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li
                                onClick={() => {
                                    navigate('/shop/all')
                                }}
                            >
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer"
                                    onClick={() => {
                                        navigate('/shop/all')
                                    }}
                                >All Products</a>
                            </li>
                            <li
                                onClick={() => {
                                    navigate('/shop/tote bags')
                                }}
                            >
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Tote Bags</a>
                            </li>
                            <li
                                onClick={() => {
                                    navigate('/shop/laptop bags')
                                }}
                            >
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Laptop Bags</a>
                            </li>
                            <li
                                onClick={() => {
                                    navigate('/shop/duffle bags')
                                }}
                            >
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Duffle Bags</a>
                            </li>
                            <li
                                onClick={() => {
                                    navigate('/shop/backpacks')
                                }
                                }
                            >
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Backpacks</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Pages</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer"
                                    onClick={() => { navigate('/') }}
                                >Home</a>
                            </li>
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer"
                                    onClick={() => { navigate('/about') }}
                                >About Us</a>
                            </li>
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer"
                                    onClick={() => { navigate('/contact') }}
                                >Contact</a>
                            </li>
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer"
                                    onClick={() => { navigate('/quotation') }}
                                >Request Quotatation</a>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Phone: +92 331 5055501</a>
                            </li>
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Email: haarisanjum@heritagehides.com  </a>
                            </li>
                            <li>
                                <a className="text-white text-md font-rajdhani hover:text-new-500 cursor-pointer">Address: DHA Phase 2 - J Block - Islamabad</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-brown-600">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2024 Heritage Hides —
                        <a href="/" rel="noopener noreferrer" className="text-white text-md font-rajdhani ml-1">@heritagehides.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-white" href="https://www.facebook.com/profile.php?id=61550487876484" target="_blank">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white" href="https://www.instagram.com/heritage.hides/" target="_blank">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
