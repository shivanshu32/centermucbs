"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm("service_6by4y8w", "template_58czeqf", form.current, {
        publicKey: "SS7aB-TQWD2q2tzAB",
      });
      form.current?.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contactus" className="section contact-section">
      <div className="site-shell contact-shell">
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light">Start a conversation</div>
          <h2>Let&apos;s strengthen your institution—together.</h2>
          <p>
            Tell us where you would value support. Our team will respond with a
            clear, practical next step.
          </p>
          <div className="contact-details">
            <a href="tel:+919870265838"><FiPhone aria-hidden="true" /><span><small>Call us</small>+91 98702 65838</span></a>
            <a href="mailto:cmucbs@gmail.com"><FiMail aria-hidden="true" /><span><small>Email us</small>cmucbs@gmail.com</span></a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="field-row">
            <label>Name<input required name="name" type="text" placeholder="Your full name" /></label>
            <label>Work email<input required name="email" type="email" placeholder="name@bank.com" /></label>
          </div>
          <div className="field-row">
            <label>Organisation<input name="orgname" type="text" placeholder="Bank or organisation" /></label>
            <label>Phone<input name="contactnumber" type="tel" placeholder="Your contact number" /></label>
          </div>
          <label>How can we help?<textarea required name="message" rows={4} placeholder="Tell us about your training or consultancy requirement" /></label>
          <div className="form-footer">
            <p aria-live="polite">
              {status === "success" && "Thank you—your message has been received."}
              {status === "error" && "We couldn't send that. Please email us directly."}
            </p>
            <button className="button button-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send enquiry"} <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
