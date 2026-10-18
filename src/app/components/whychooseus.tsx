import Image from "next/image"
import { FaArrowRight, FaQrcode } from "react-icons/fa"
import { ContactForm } from "./contact"

const strengths = [
  "Governance and sustained regulatory compliance",
  "Cybersecurity awareness and technology readiness",
  "Business growth guided by customer expectations",
  "Practical SOPs for credit, funds and recovery",
  "Policies aligned with Reserve Bank of India guidance",
]

export default function Whychooseus() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071f3b] px-6 py-16 text-white sm:px-8 md:py-20 xl:px-20">
      <div aria-hidden="true" className="absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-36 left-1/4 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Professional support for co-operative banks
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Why Choose Us</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            We help co-operative banks strengthen governance, sustain compliance and build the capabilities needed for responsible growth. Through practical training, management development and advisory support, we help teams improve everyday banking processes and meet customer expectations.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div key={strength} className="flex min-h-[76px] items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 shadow-sm shadow-black/10">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-300/15 text-sky-200">
                  <FaArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-6 text-slate-100 sm:text-[15px]">{strength}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white p-5 text-[#0b2f55] shadow-xl shadow-black/15 sm:p-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Talk to our team</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">Tell us what your bank needs, and we’ll get in touch.</p>
            </div>
            <ContactForm />
          </div>
        </div>

        <aside className="mx-auto w-full max-w-[300px] rounded-2xl border border-white/15 bg-white p-5 text-center text-[#0b2f55] shadow-2xl shadow-black/25 sm:p-6">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#0b4b84]">
            <FaQrcode className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="mt-3 text-lg font-bold">Connect with CMUCBs</h3>
          <p className="mt-1 text-sm leading-5 text-slate-600">Scan the QR code to get in touch</p>
          <div className="mx-auto mt-5 w-full max-w-[220px] overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
            <Image
              src="/qr-get-in-touch.png"
              alt="QR code to get in touch with CMUCBs"
              width={420}
              height={420}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-xs font-medium tracking-wide text-slate-500">Centre for Management of UCBs</p>
        </aside>
      </div>
    </section>
  )
}
