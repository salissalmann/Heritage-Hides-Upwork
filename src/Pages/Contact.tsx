
import React, { useState, useEffect } from 'react'
import { notification } from 'antd'
import emailjs from "@emailjs/browser";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" })
    const [clicked, setClicked] = useState(false)


    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => emailjs.init("VdQ-GDMozP9PtJFXL"), []);

    const submit = (e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setClicked(true)
        //Email Validation
        if (!form.email.includes('@')) {
            notification.error({
                message: 'Error!',
                description: 'Please enter a valid email address.'
            })
            setClicked(false)
            return
        }
        //Phone Validation
        if (form.phone.length < 11) {
            notification.error({
                message: 'Error!',
                description: 'Please enter a valid phone number.'
            })
            setClicked(false)
            return
        }
        //Empty Fields
        if (form.firstName === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your first name.'
            })
            setClicked(false)
            return
        }
        if (form.lastName === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your last name.'
            })
            setClicked(false)
            return
        }
        if (form.email === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your email.'
            })
            setClicked(false)
            return
        }
        if (form.phone === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your phone number.'
            })
            setClicked(false)
            return
        }
        if (form.message === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your message.'
            })
            setClicked(false)
            return
        }

        notification.info(
            {
                message: 'Sending your request...'
            }
        )



        emailjs.send("service_079uq4t", "template_73saxla", {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            message: form.message,
        }).then(() => {
            notification.success({
                message: 'Request sent!',
                description: 'We have received your request. We will contact you soon.'
            })
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            })
        }).catch(() => {
            notification.error({
                message: 'Error!',
                description: 'There was an error sending your request. Please try again later.'
            })
        });
        setClicked(false)
    }



    return (
        <>
            <section className="py-16 bg-new-600 font-rajdhani dark:bg-new-600">
                <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center ">
                            <div className="relative flex flex-col items-center">
                                <div
                                    className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                                    Contact
                                </div>
                                <h1 className="text-5xl font-bold dark:text-brown-600"> Our <span className="text-brown-700"> Contact
                                </span> </h1>
                                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-brown-600">
                                    </div>
                                    <div className="flex-1 h-2 bg-brown-700">
                                    </div>
                                    <div className="flex-1 h-2 bg-brown-600">
                                    </div>
                                </div>
                            </div>
                            <p className="mb-16 text-base text-center text-brown-700">
                                If you have an order question, product related questions, or need more information about our company, we would love to help. You can fill out this form here, or email us directly using the links below.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-8 -mx-4">
                        <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                            <div
                                className="h-full py-12 text-center transition-all rounded-lg shadow border border-brown-700 hover:shadow-lg">
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-brown-700 rounded-full dark:bg-brown-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path
                                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z">
                                        </path>
                                    </svg>
                                </div>
                                <h2 className="mb-4 text-xl font-bold leading-9 text-brown-700 md:text-2xl ">
                                    Email</h2>
                                <a href="#"
                                    className="text-base font-medium text-gray-500 md:text-lg ">haarisanjum@heritagehides.com  </a>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                            <div
                                className="h-full py-12 text-center transition-all rounded-lg shadow border border-brown-700 hover:shadow-lg">
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-brown-700 rounded-full dark:bg-brown-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                        </path>
                                    </svg>
                                </div>
                                <h2 className="mb-4 text-xl font-bold leading-9 text-brown-700 md:text-2xl ">
                                    Phone</h2>
                                <a href="#"
                                    className="text-base font-medium text-gray-500 md:text-lg ">+92 331 5055501</a>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                            <div
                                className="h-full py-12 text-center transition-all rounded-lg shadow border border-brown-700 hover:shadow-lg">
                                <div
                                    className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-brown-700 rounded-full dark:bg-brown-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-grid-3x3" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z">
                                        </path>
                                    </svg>
                                </div>
                                <h2 className="mb-4 text-xl font-bold leading-9 text-brown-700 md:text-2xl ">
                                    Social</h2>
                                <a href="https://www.facebook.com/profile.php?id=61550487876484" target='_blank'
                                    className="inline-block mr-4 ml-3 text-brown-700 hover:text-brown-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-6 h-6 bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                        </path>
                                    </svg>
                                </a>

                                <a href="https://www.instagram.com/heritage.hides/" target='_blank'
                                    className="inline-block mr-4 text-brown-500 hover:text-brown-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="px-8 py-8 border border-brown-700 rounded-md shadow-md">
                        <form action="">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-00 ">
                                    Please send message for futher information! </h2>
                            </div>
                            <div className="flex flex-wrap mb-4 -mx-2">
                                <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                                    <input
                                        className="w-full px-3 py-1 leading-loose border  bg-new-600 border-brown-700"
                                        type="text" placeholder="First Name.." required
                                        name="firstName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full px-2 lg:w-1/2">
                                    <input
                                        className="w-full px-3 py-1 leading-loose border bg-new-600 border-brown-700"
                                        type="text" placeholder="Last Name.." required
                                        name="lastName"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <input
                                className="w-full px-3 py-1 mb-4 leading-loose border bg-new-600 border-brown-700"
                                type="email" placeholder="abc@gmail.com" required
                                name="email"
                                onChange={handleChange}
                            />
                            <input
                                className="w-full px-3 py-1 mb-4 leading-loose border bg-new-600 border-brown-700"
                                type="text" placeholder="Phone" required
                                name="phone"
                                onChange={handleChange}
                            />

                            <textarea placeholder="Write a message..." required
                                className="block w-full px-4 py-2 mb-4 leading-tight border-brown-700 text-brown-700 border  bg-new-600 "
                                name="message"
                                onChange={handleChange}
                            ></textarea>
                            <button
                                className="w-full py-2 text-sm font-bold leading-normal text-white transition-all duration-300  dark:bg-brown-700 dark:hover:bg-brown-600 hover:bg-blue-700"
                                onClick={submit}
                                disabled={clicked}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
