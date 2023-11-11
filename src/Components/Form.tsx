import React from 'react'

interface htmlFormInterface {
    artcileId: string
}

export default function htmlForm({ artcileId }: htmlFormInterface) {

    const [form, setForm] = React.useState<{
        firstName: string,
        lastName: string,
        email: string,
        address: string,
        phone: string,
        company: string,
        quantity: number,
        message: string
    }>({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        company: '',
        quantity: 1,
        message: ''
    })

    //Change input value by id
    const changeInputValue = (id: string, value: string) => {
        setForm({
            ...form,
            [id]: value
        })
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-3 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-brown-700 font-rajdhani bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-brown-700  focus:outline-none focus:ring-0 focus:border-brown-700 peer" placeholder=" " required
                        onChange={(e) => changeInputValue('firstName', e.target.value)}
                    />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-brown-700 font-rajdhani  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-3 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-brown-700 font-rajdhani bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-brown-700  focus:outline-none focus:ring-0 focus:border-brown-700 peer" placeholder=" " required
                        onChange={(e) => changeInputValue('lastName', e.target.value)}
                    />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-brown-700 font-rajdhani  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>

            <div className="relative z-0 w-full mb-3 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-brown-700 font-rajdhani bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-brown-700  focus:outline-none focus:ring-0 focus:border-brown-700 peer" placeholder=" " required
                    onChange={(e) => changeInputValue('email', e.target.value)}
                    value={form?.email || ''}
                />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-brown-700 font-rajdhani  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brown-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>

            <div className="relative z-0 w-full mb-3 group">
                <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-brown-700 font-rajdhani bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-brown-700  focus:outline-none focus:ring-0 focus:border-brown-700 peer" placeholder=" " required
                    onChange={(e) => changeInputValue('address', e.target.value)}
                    value={form?.address || ''}
                />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-brown-700 font-rajdhani  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-3 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-brown-700 font-rajdhani bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-brown-700  focus:outline-none focus:ring-0 focus:border-brown-700 peer" placeholder=" " required
                        onChange={(e) => changeInputValue('phone', e.target.value)}
                        value={form?.phone || ''}
                    />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-brown-700 font-rajdhani  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-brown-700 font-rajdhani bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-brown-700  focus:outline-none focus:ring-0 focus:border-brown-700 peer" placeholder=" " required
                        onChange={(e) => changeInputValue('company', e.target.value)}
                        value={form?.company || ''}
                    />
                    <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-brown-700 font-rajdhani  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-700  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                </div>
            </div>

            <div>
                <textarea
                    name="floating_message"
                    id="floating_message"
                    className="block w-full py-2 px-3 text-sm text-brown-700 font-rajdhani 
                        bg-transparent border border-brown-700 appearance-none placeholder:text-brown-700 mb-6
                        "
                    placeholder="Message"
                    required
                    onChange={(e) => changeInputValue('message', e.target.value)}
                    value={form?.message || ''}
                />

            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group hidden lg:block">
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="number"
                        name="floating_quantity"
                        id="floating_quantity"
                        className="block w-full py-2 px-3 text-sm text-brown-700 font-rajdhani 
                        bg-transparent border border-brown-700 appearance-none placeholder:text-brown-700
                        
                        "
                        placeholder="Quantity"
                        required
                        min={1}
                        defaultValue={100}
                        onChange={(e) => changeInputValue('quantity', e.target.value)}
                        value={form?.quantity || ''}
                    />
                </div>
            </div>

            <button type="submit" className="text-white bg-brown-400 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-brown-700 dark:hover:bg-brown-500 dark:focus:ring-blue-800 font-rajdhani">Request Quotation</button>

        </div>
    )
}
