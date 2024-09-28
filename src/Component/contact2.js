import React, { useState } from "react";

export default function Contact2() {
    const [formData, setFormData] = useState({ fullName: "", email: "", company: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>,
            contact: "Support@syncromate.com"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>,
            contact: "+92 (306) -1443976"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>,
            contact: "NASTP, Karachi, Pakistan."
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('${API_URL}/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                alert('Thank you! Your message has been sent.');
            } else {
                alert('There was a problem submitting the form.');
            }
        } catch (error) {
            console.error('Form submission error: ', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <main className=" relative py-14" id="contact">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-indigo-600 font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have. We look forward to hearing from you!
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {contactMethods.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-3">
                                        <div className="flex-none text-gray-400">{item.icon}</div>
                                        <p>{item.contact}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="font-medium">Full name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                ></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}






// import React from "react"
// export default function Contact2() {

//     // return (
//     //     <main className="relative py-28 bg-gray-900">
//     //         <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
//     //             <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
//     //                 <h3 className="text-cyan-400 font-semibold">
//     //                     Contact
//     //                 </h3>
//     //                 <p className="text-white text-3xl font-semibold sm:text-4xl">
//     //                     Get in touch
//     //                 </p>
//     //                 <p className="text-gray-300">
//     //                     We’d love to hear from you! Please fill out the form bellow.
//     //                 </p>
//     //             </div>
//     //             <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
//     //                 <form
//     //                     onSubmit={(e) => e.preventDefault()}
//     //                     className="space-y-5"
//     //                 >
//     //                     <div>
//     //                         <label className="font-medium">
//     //                             Full name
//     //                         </label>
//     //                         <input
//     //                             type="text"
//     //                             required
//     //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//     //                         />
//     //                     </div>
//     //                     <div>
//     //                         <label className="font-medium">
//     //                             Email
//     //                         </label>
//     //                         <input
//     //                             type="email"
//     //                             required
//     //                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//     //                         />
//     //                     </div>
//     //                     <div>
//     //                         <label className="font-medium">
//     //                             Phone number
//     //                         </label>
//     //                         <div className="relative mt-2">
//     //                             <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
//     //                                 <select className="text-sm bg-transparent outline-none rounded-lg h-full">
//     //                                     <option>US</option>
//     //                                     <option>ES</option>
//     //                                     <option>MR</option>
//     //                                 </select>
//     //                             </div>
//     //                             <input
//     //                                 type="number"
//     //                                 placeholder="+1 (555) 000-000"
//     //                                 required
//     //                                 className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
//     //                             />
//     //                         </div>
//     //                     </div>
//     //                     <div>
//     //                         <label className="font-medium">
//     //                             Message
//     //                         </label>
//     //                         <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
//     //                     </div>
//     //                     <button
//     //                         className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
//     //                     >
//     //                         Submit
//     //                     </button>
//     //                 </form>
//     //             </div>
//     //         </div>
//     //         <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
//     //     </main>


//     const contactMethods = [
//         {
//             icon:
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//                 </svg>
//             ,
//             contact: "Support@syncromate.com"
//         },
//         {
//             icon:
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//                 </svg>
//             ,
//             contact: "+92 (306) -1443976"
//         },
//         {
//             icon:
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                 </svg>
//             ,
//             contact: "NASTP, Karachi, Pakistan."
//         },
//     ]

//     return (
//         <main className=" relative py-14" id="contact">
 
//             <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
//                 <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
//                     <div className="max-w-lg space-y-3">
//                         <h3 className="text-indigo-600 font-semibold">
//                             Contact
//                         </h3>
//                         <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//                             Let us know how we can help
//                         </p>
//                         <p>
//                             We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
//                         </p>
//                         <div>
//                             <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
//                                 {
//                                     contactMethods.map((item, idx) => (
//                                         <li key={idx} className="flex items-center gap-x-3">
//                                             <div className="flex-none text-gray-400">
//                                                 {item.icon}
//                                             </div>
//                                             <p>{item.contact}</p>
//                                         </li>
//                                     ))
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
//                         <form
//                             onSubmit={(e) => e.preventDefault()}
//                             className="space-y-5"
//                         >
//                             <div>
//                                 <label className="font-medium">
//                                     Full name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     required
//                                     className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="font-medium">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     required
//                                     className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="font-medium">
//                                     Company
//                                 </label>
//                                 <input
//                                     type="text"
//                                     required
//                                     className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="font-medium">
//                                     Message
//                                 </label>
//                                 <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
//                             </div>
//                             <button
//                                 className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                     </div>
//                 </div>
                
//             </div>
//         </main>
//     )
// }