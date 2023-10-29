import styles from './styles.module.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Discover from '../Components/Discover';
import About from '../Components/About';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.Slider}>

                <Splide
                    options={{
                        rewind: true,
                        width: '100%',
                        height: '100%',
                        autoplay: true,
                        interval: 5000,
                        pauseOnHover: false,
                        arrows: false,
                        pagination: true,
                        lazyLoad: true,
                        classes: {
                            arrows: styles.arrows,
                            prev: styles.prev,
                            next: styles.next,
                        },
                        loop: true,
                    }}
                >

                    <SplideSlide>
                        <div className={styles.Slide1}>
                            <img src="./../Assets/Cover3.png" alt="banner1" className={styles.CoverImg} />
                            <div className={styles.Slide1Text}>
                                <h1 className='
                                text-7xl
                                font-bold
                                text-white
                                text-center
                                font-rajdhani
                                '>EARLY HOLIDAY SALE</h1>
                                <p className='
                                text-2xl
                                text-white
                                text-center
                                font-rajdhani
                                '>Up to 50% off on all products</p>
                                <div className={styles.SliderBtns}>
                                    <button
                                        onClick={() => { navigate('/shop/all') }}
                                    >Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>

            <div className={styles.Featured}>
                <Discover />
            </div>

            <div className="grid gap-5 row-gap-10 lg:grid-cols-2 bg-brown-700">
                <div>
                    <img
                        className="object-cover w-full h-56 sm:h-96"
                        src="/Assets/Landing.png"
                        alt=""
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6 p-5">
                        <img
                            className="object-cover object-center w-full h-5 sm:h-5 mb-5"
                            src="/Assets/LandingTop.png"
                            alt=""
                        ></img>
                        <h2 className="max-w-lg mb-6 text-3xl font-bold font-rajdhani tracking-tight text-white sm:text-4xl sm:leading-none">
                            Built to roam™
                        </h2>
                        <p className="text-base font-rajdhani text-white md:text-lg">
                            Rugged jackets, luggage and outerwear. Made to unlock your spirit of adventure.
                        </p>
                        <button
                            onClick={() => { navigate('/about') }}
                            className="flex items-center justify-center px-6 py-2 mt-6 font-ragdhani text-brown-700 capitalize transition-colors duration-200 transform border border-brown-700 bg-new-600 hover:bg-brown-700
                            hover:text-white
                            focus:outline-none
                            focus:bg-brown-700
                            focus:text-white
                            hover:border 
                            hover:border-brown-700
                            ">
                            About Us
                        </button>
                        <img
                            className="object-cover object-center w-full h-5 sm:h-5 mt-5"
                            src="/Assets/LandingTop.png"
                            alt=""
                        ></img>

                    </div>

                </div>
            </div>

            <div className={styles.Featured}>
                <About />
            </div >

            <div className='border border-brown-700'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
                    <div className="grid row-gap-8 sm:grid-cols-3">
                        <div className="text-center">
                            <h6 className="text-5xl font-bold font-rajdhani text-brown-700">144K</h6>
                            <p className="font-bold font-rajdhani">Customer</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-5xl font-bold font-rajdhani text-brown-700">120</h6>
                            <p className="font-bold font-rajdhani">Products</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-5xl font-bold font-rajdhani text-brown-700">12</h6>
                            <p className="font-bold font-rajdhani">Categories</p>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}