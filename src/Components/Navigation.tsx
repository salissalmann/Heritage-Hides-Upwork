import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

export default function Navigation() {
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    const [isMobile, setIsMobile] = useState(false);


    const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const [showServices, setShowServices] = useState(false)
    const toggleServices = () => {
        setShowServices(!showServices);
    };


    return (
        <>
            {!isMobile &&
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
                                        </li>
                                        <button
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
            }

            {isMobile &&
                <div className="fixed top-0 left-0 right-0 z-50">
                    <div className="flex flex-row justify-center">
                        <header className="text-gray-600 body-font w-full pt-4 pb-4 bg-brown-700">
                            <div className="container mx-auto flex p-1 flex-row  justify-between pl-4 pr-4 pt-0 pb-0 items-center">
                                <h1 className="
                                text-yellow-500
                                text-3xl
                                font-semibold
                                tracking-wider
                                font-rajdhani
                                ">Heritage Hides</h1>
                                <MenuOutlined className="
                                text-2xl
                                text-yellow-500
                                " onClick={handleToggleDrawer} />
                                <Drawer
                                    placement="right"
                                    closable={false}
                                    onClose={handleToggleDrawer}
                                    visible={isDrawerOpen}
                                    className='drawer'
                                >
                                    <div className='flex flex-row item-center justify-between'>
                                        <div className='text-xl text-brown-700 font-rajdhani font-bold'>Heritage<span className="text-primary"></span>{" "}Hides</div>
                                        <CloseOutlined className='close-icon'
                                            onClick={handleToggleDrawer}
                                        />
                                    </div>
                                    <div className='flex flex-col p-3 items-center mt-1'>
                                        <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                            onClick={() => {
                                                navigate('/')
                                                handleToggleDrawer()
                                            }}
                                        >Home</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center mt-1'>
                                        <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                            onClick={() => {
                                                navigate('/about')
                                                handleToggleDrawer()
                                            }}
                                        >About</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center mt-1'>
                                        <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                            onClick={() => {
                                                navigate('/contact')
                                                handleToggleDrawer()
                                            }}
                                        >Contact</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center mt-1'>
                                        <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700 flex flex-row gap-2 justify-center items-center
                                        '
                                            onClick={() => {
                                                toggleServices()
                                            }}
                                        >
                                            <span>Products</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>

                                        </div>
                                    </div>
                                    {showServices
                                        ?
                                        <>
                                            <div className='flex flex-col p-3 items-center mt-1'>
                                                <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                                    onClick={() => {
                                                        navigate('/shop/all')
                                                        handleToggleDrawer()
                                                    }}
                                                >All</div>
                                            </div>
                                            <div className='flex flex-col p-3 items-center mt-1'>
                                                <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                                    onClick={() => {
                                                        navigate('/shop/backpacks')
                                                        handleToggleDrawer()
                                                    }}
                                                >Backpacks</div>
                                            </div>
                                            <div className='flex flex-col p-3 items-center mt-1'>
                                                <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                                    onClick={() => {
                                                        navigate('/shop/duffle bags')
                                                        handleToggleDrawer()
                                                    }}
                                                >Duffle Bags</div>
                                            </div>
                                            <div className='flex flex-col p-3 items-center mt-1'>
                                                <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                                    onClick={() => {
                                                        navigate('/shop/tote bags')
                                                        handleToggleDrawer()
                                                    }}
                                                >Tote Bags</div>
                                            </div>
                                            <div className='flex flex-col p-3 items-center mt-1'>
                                                <div className='text-brown-700 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700
                                        '
                                                    onClick={() => {
                                                        navigate('/shop/laptop bags')
                                                        handleToggleDrawer()
                                                    }}
                                                >Laptop Bags</div>
                                            </div>

                                        </>
                                        : null
                                    }



                                    <div className='flex flex-col p-3 items-center mt-1'>
                                        <div className='text-new-500 font-rajdhani font-bold border
                                        shadow w-full text-center p-2
                                        border-brown-700 bg-brown-700
                                        '
                                            onClick={() => {
                                                navigate('/quotation')
                                                handleToggleDrawer()

                                            }}
                                        >Get Quote</div>
                                    </div>
                                </Drawer>
                            </div>
                        </header>
                    </div>
                </div>
            }
        </>
    )
}
