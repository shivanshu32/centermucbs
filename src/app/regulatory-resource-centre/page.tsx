import { FaArrowUpRightFromSquare, FaLandmark } from "react-icons/fa6";

export default function RegulatoryResourceCentrePage() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <header className="bg-[#064b88] px-5 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Resources for co-operative banks</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Regulatory Resource Centre</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg">
            Find official Reserve Bank of India regulatory updates and circulars to support governance and compliance.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <section className="grid gap-6">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#07569b]">
              <FaLandmark className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#123d68]">Official RBI circulars</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Visit the Reserve Bank of India circulars page for official notifications and regulatory updates. Refer to the relevant circular and current directions for authoritative requirements.
            </p>
            <a
              href="https://website.rbi.org.in/web/rbi/notifications/rbi-circulars"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#07569b] px-5 py-3 font-semibold text-white transition hover:bg-[#064578] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Browse RBI circulars <FaArrowUpRightFromSquare className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </article>

        </section>

      </div>
    </main>
  );
}
