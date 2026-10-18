"use client"
import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser';

export function ContactForm({ className = "" }) {
    const form = useRef();

    const sendEmail = (e) => {
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
              form.current?.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <form ref={form} onSubmit={sendEmail} name="contact" className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      <input required name="name" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" type="text" aria-label="Name" placeholder="Your name" />
      <input required name="email" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" type="email" aria-label="Email" placeholder="Email address" />
      <input name="orgname" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" type="text" aria-label="Organization name" placeholder="Organization name" />
      <input name="contactnumber" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" type="tel" aria-label="Contact number" placeholder="Contact number" />
      <textarea required name="message" aria-label="Your message" placeholder="How can we help?" className="min-h-28 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 sm:col-span-2" />
      <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[#0b4b84] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083b6a] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:col-span-2 sm:justify-self-start">Send message</button>
    </form>
  )
}

export default function Contact() {
  return null
}
