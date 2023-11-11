import { useParams } from "react-router-dom"
import { Products } from "../Meta/BackbacksMeta"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ShopPage() {
    window.scrollTo(0, 0)

    const navigate = useNavigate()
    const { type } = useParams()
    const [products, setProducts] = useState(Products)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [type])
    useEffect((
    ) => {
        if (type) {
            if (type === "all") {
                setProducts(Products)
            }
            else {
                setProducts(Products.filter((product) => product.Category.toLowerCase() === type.toLowerCase()))
            }
        }
    }, [type])


    return (
        <>
            <section className="text-gray-600 body-font">
                <header className="text-center mt-24">
                    <h2 className="text-xl font-bold text-brown-700 sm:text-4xl font-rajdhani">
                        {type &&
                            (type === "all")
                            ? "Our Collection"
                            :
                            type && type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                        }
                    </h2>
                    <p className="max-w-md mx-auto mt-1 text-brown-700 font-semibold font-rajdhani">
                        Shop our most popular products
                    </p>
                </header>

                <nav aria-label="Breadcrumb" className="flex ml-20" >
                    <ol
                        className="flex overflow-hidden rounded-lg border border-gray-200  text-gray-600"
                    >
                        <li className="flex items-center">
                            <a
                                onClick={() => {
                                    navigate('/')
                                }}
                                className="flex h-10 items-center gap-1.5 bg-brown-700 text-white px-4 transition hover:text-white cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>

                                <span className="ms-1.5 text-xs font-medium"> Home </span>
                            </a>
                        </li>

                        <li className="relative flex items-center">
                            <span
                                className="absolute inset-y-0 -start-px h-10 w-4 bg-brown-700 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                            >
                            </span>

                            <a
                                className="flex h-10 items-center b-1 border-brown-700 bg-new-600 pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                            >
                                {type &&
                                    (type === "all")
                                    ? "All Products"
                                    :
                                    type && type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                }
                            </a>
                        </li>



                    </ol>
                </nav>
                <div className="container md:px-20 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map(
                            (product) => {
                                return (
                                    <div className="p-4 md:w-1/4 m-4 lg:m-0">
                                        <div className="h-full border b-1 border-yellow-500 rounded overflow-hidden bg-new-600 p-3">
                                            <img className="max-h-50 w-full object-cover object-center bg-brown-700"
                                                loading="lazy"
                                                src={`/Products/${product["Article-No"]}.jpg`} alt="blog" />
                                            <div className="pt-1">
                                                <h2 className="tracking-widest text-xs title-font font-mediummb-1 bg-brown-700 text-white border border-brown-700
                                                px-2 py-1 rounded
                                                mt-3
                                                inline-block
                                                uppercase
                                                font-ragdhani
                                                ">{product.Category}</h2>
                                                <h1 className="text-lg  text-gray-900 mb-1 mt-3 font-ragdhani">Article No: {product["Article-No"]}</h1>
                                                <p className="leading-relaxed mb-3 line-clamp-2 font-ragdhani 
                                                text-black-700 font-thin font-sm">{product.Description}</p>
                                                <div className="flex items-center flex-wrap">
                                                    <button
                                                        className="text-white border border-brown-700 b-1 flex justify-center items-center
                                                         bg-brown-700 font-ragdhani 
                                                         mt-3 py-[0.3rem] px-5 focus:outline-none text-sm font-ragdhani
                                                        hover:bg-new-500 hover:text-brown-700
                                                        hover:border
                                                        hover:border-brown-700
                                                        cursor-pointer
                                                        transition
                                                        duration-300
                                                        ease-in-out
                                                    
                                                        "
                                                        onClick={
                                                            () => {
                                                                navigate(
                                                                    `/product/${product["Article-No"]}`
                                                                )
                                                            }
                                                        }
                                                    >View Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </section>\
        </>
    )
}
