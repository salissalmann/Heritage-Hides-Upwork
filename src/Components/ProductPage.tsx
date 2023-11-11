
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../Meta/BackbacksMeta'
import Form from './Form'


export default function ProductPage() {

    const { articleId } = useParams()

    const product = Products.find((product) => product["Article-No"].toString() === articleId)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    //remove spaces from image link and replace it by no space
    const ImageLink = `${product?.Category.toLowerCase()}/${product?.["Article-No"]}/${product?.["Article-No"]}`.replace(/ /g, '')
    const [hoveredImage, setHoveredImage] = useState('');


    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto ">
                <div className="lg:w-4/5 mx-auto flex flex-wrap border border-brown-500 rounded-lg">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-12 mx-auto flex flex-wrap">
                            <div className="flex flex-col lg:flex-row  md:-m-2 -m-1">
                                <div className="flex flex-wrap w-full lg:w-1/2">
                                    <div className="md:p-2 p-1 w-full relative">
                                        <img
                                            alt="gallery"
                                            className="w-full h-full object-cover border object-center block"
                                            src={`/Products/${product?.["Article-No"]}.jpg`}
                                        />
                                        {hoveredImage && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                                                <img
                                                    alt="hovered-gallery"
                                                    className="w-full h-full object-cover border object-center block"
                                                    src={hoveredImage}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    {[1, 2, 3, 4].map((index) => (
                                        <div key={index} className="md:p-2 p-1 w-1/4 relative">
                                            {index !== selectedIndex ?
                                                <img
                                                    alt={`gallery-${index}`}
                                                    className="w-full object-cover h-full border object-center block"
                                                    src={`/${ImageLink}_${index}.jpg`}
                                                    onClick={() => {
                                                        setHoveredImage(`/${ImageLink}_${index}.jpg`)
                                                        setSelectedIndex(index)
                                                    }}
                                                /> :
                                                <img
                                                    alt={`gallery-${index}`}
                                                    className="w-full object-cover h-full border object-center block"
                                                    src={`/Products/${product?.["Article-No"]}.jpg`}
                                                    onClick={() => {
                                                        setHoveredImage('')
                                                        setSelectedIndex(-1)
                                                    }}
                                                />
                                            }
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap w-full lg:w-1/2">
                                    <div className="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h1 className="text-brown-700 font-bold text-3xl font-rajdhani mb-1">Article-Number: {product?.['Article-No']} {product?.Category}</h1>
                                        <h2 className="text-sm text-brown-700 font-rajdhani tracking-widest">Dimensions: {product?.Dimensions}</h2>

                                        <div className="flex mb-4">
                                            <span className="flex items-center">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                                <span className="text-brown-700 font-rajdhani ml-3">4 Reviews</span>
                                            </span>
                                        </div>
                                        <p className="leading-relaxed text-black font-rajdhani font-semibold">{product?.Description}</p>
                                        <div className="flex mt-6 items-center pb-1 border-b-2 border-brown-700 mb-7">
                                        </div>
                                        {articleId && <Form artcileId={articleId} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="text-gray-600 body-font overflow-hidden ">
                    <div className="container mt-3 px-5 py-8 mx-auto w-4/5 bg-brown-500 rounded-lg">
                        <header className="text-center mb-4">
                            <h2 className="text-xl font-bold text-white sm:text-4xl font-rajdhani">Product Characteristics</h2>
                        </header>

                        {product?.Characteristics.map(
                            (characteristic) => {
                                return (
                                    <div className="-my-8 divide-y-2 divide-gray-100 ">
                                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                                <span className="font-semibold font-rajdhani text-white">{characteristic.Title}</span>
                                            </div>
                                            <div className="md:flex-grow">
                                                <p className="leading-relaxed font-rajdhani text-white">{characteristic.Description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}

                        {product?.p1 &&
                            <div className="mt-10 flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <p className="leading-relaxed font-rajdhani text-white">{product?.p1}</p>
                                </div>
                            </div>
                        }
                        {product?.p2 &&
                            <div className="flex flex-wrap md:flex-nowrap">
                                <div className="md:flex-grow">
                                    <p className="leading-relaxed font-rajdhani text-white">{product?.p2}</p>
                                </div>
                            </div>
                        }
                    </div>
                </section>


            </div>

        </section>
    )
}
