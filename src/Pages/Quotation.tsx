

import React, { useState, useEffect } from 'react'
import { notification } from 'antd'
import emailjs from "@emailjs/browser";


export default function Quotation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", company: "", email: "", message: "" })
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

        if (form.company === '') {
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
            company: form.company
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
                message: '',
                company: ''
            });
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
                                    Quotation
                                </div>
                                <h1 className="text-5xl font-bold dark:text-brown-600"> Request <span className="text-brown-700"> Quotation
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
                    <div className="px-8 py-8 border border-brown-700 rounded-md shadow-md">
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
                                    value={form.firstName}
                                    onChange={handleChange}

                                />
                            </div>
                            <div className="w-full px-2 lg:w-1/2">
                                <input
                                    className="w-full px-3 py-1 leading-loose border bg-new-600 border-brown-700"
                                    type="text" placeholder="Last Name.." required
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}

                                />
                            </div>
                        </div>
                        <input
                            className="w-full px-3 py-1 mb-4 leading-loose border bg-new-600 border-brown-700"
                            type="email" placeholder="abc@gmail.com" required
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <div className="flex flex-wrap mb-4 -mx-2">
                            <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                                <input
                                    className="w-full px-3 py-1 leading-loose border  bg-new-600 border-brown-700"
                                    type="text" placeholder="Phone Number" required
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}

                                />
                            </div>
                            <div className="w-full px-2 lg:w-1/2">
                                <input
                                    className="w-full px-3 py-1 leading-loose border bg-new-600 border-brown-700"
                                    type="text" placeholder="Company" required
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <textarea placeholder="Write a message..." required
                            className="block w-full px-4 py-2 mb-4 leading-tight border-brown-700 text-brown-700 border  bg-new-600"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        ></textarea>
                        <button
                            className="w-full py-2 text-sm font-bold leading-normal text-white transition-all duration-300  dark:bg-brown-700 dark:hover:bg-brown-600 hover:bg-blue-700"
                            onClick={submit}
                            disabled={clicked}
                        >
                            Send Message
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}