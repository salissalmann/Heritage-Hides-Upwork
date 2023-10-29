import styles from './styles.module.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Discover from '../Components/Discover';
import About from '../Components/About';


export default function LandingPage() {
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
                                    <button>Shop Bags</button>
                                    <button>Shop Accessories</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>

            <div className={styles.Featured}>
                <Discover />

                <About />
            </div>




        </>
    )
}