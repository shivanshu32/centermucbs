"use client"
import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>;

    const sendEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const SERVICE_ID = "service_6by4y8w";
        const TEMPLATE_ID = "template_58czeqf";
        const PUBLIC_KEY = "SS7aB-TQWD2q2tzAB";
    
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
          })
          .then(
            () => {
              alert('SUCCESS!, We have received your message and will get back to you');
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div id="contactus">
    <div className="xl:container xl:mx-auto py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-center items-center items-strech h-full mx-4">
            <div className="lg:w-full 2xl:w-3/5">
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 w-11/12">Get in touch with Us</h1>
                <p className="mt-3 lg:mt-4 text-base leading-normal text-gray-600 md:w-8/12 2xl:w-7/12">We will get back to you soon</p>
            </div>
            <div className="lg:w-full 2xl:w-2/5 flex w-full bg-gray-50 flex flex-col justify-center px-5 py-5 md:px-7 md:py-7 lg:py-12 lg:px-20 mt-2 md:mt-6 lg:mt-0">
                <h2 className="text-lg font-semibold text-gray-800">Send us a message</h2>
                <form ref={form} onSubmit={sendEmail} name="contact">
                <input name="name" className="rounded-md border border-gray-300 mt-4 md:mt-6 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700" type="text" aria-label="Name" placeholder="Enter your Name" />
                <input name="email" className="rounded-md border border-gray-300 mt-4 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700" type="email" aria-label="Email" placeholder="Enter your email" />
                <input name="orgname" className="rounded-md border border-gray-300 mt-4 md:mt-6 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700" type="text" aria-label="orgname" placeholder="Organization Name" />
                <input name="contactnumber" className="rounded-md border border-gray-300 mt-4 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700" type="number" aria-label="Contact" placeholder="Contact Number" />
                <textarea name="message" id="" aria-label="Your message" placeholder="Message" className="w-full h-48 lg:h-36 xl:h-48 2xl:h-56 mt-4 md:mt-6 p-4 rounded-md border border-gray-300 resize-none text-base text-gray-600 focus:outline-none focus:border-gray-700"></textarea>
                <button type="submit" className="bg-indigo-700 hover:bg-indigo-600 rounded-md mt-4 md:mt-5 leading-4 p-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Send</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
