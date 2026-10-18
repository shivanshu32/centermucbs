import Link from "next/link";
import { FaArrowUpRightFromSquare, FaBookOpen, FaFilePdf, FaLandmark } from "react-icons/fa6";

const referenceDocuments = [
  {
    title: "Board Meetings in UCBs",
    description: "Reference material on board meetings and governance in urban co-operative banks.",
    href: "/BoardMeetingsinUCBs.pdf",
  },
  {
    title: "Governance and Risk Management in UCBs",
    description: "A practical reference on governance practices and risk management for UCBs.",
    href: "/GovernanceandRiskManagementinUCBs.pdf",
  },
  {
    title: "KYC and AML",
    description: "Learning material covering know-your-customer and anti-money-laundering practices.",
    href: "/KYC-AML.pdf",
  },
];

export default function RegulatoryResourceCentrePage() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <header className="bg-[#064b88] px-5 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Resources for co-operative banks</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Regulatory Resource Centre</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg">
            Find official regulatory updates and selected CMUCBs learning references to support governance, compliance and professional development.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
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

          <aside className="rounded-2xl border border-blue-100 bg-[#eef6ff] p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#07569b] shadow-sm">
              <FaBookOpen className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#123d68]">How to use this centre</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Use the official RBI source for current regulatory instructions. The CMUCBs documents below are learning references for training and discussion.
            </p>
            <Link href="/#trainingprogram" className="mt-5 inline-flex font-semibold text-[#07569b] underline decoration-blue-300 underline-offset-4 hover:text-[#063b68]">
              Explore Training &amp; Development
            </Link>
          </aside>
        </section>

        <section className="mt-12" aria-labelledby="cmucbs-references-heading">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#DE466C]">CMUCBs learning references</p>
            <h2 id="cmucbs-references-heading" className="mt-2 text-2xl font-bold text-[#123d68] sm:text-3xl">Selected reading</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {referenceDocuments.map((document) => (
              <a
                key={document.href}
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <FaFilePdf className="h-6 w-6 text-[#07569b]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-[#123d68] group-hover:text-[#07569b]">{document.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{document.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#07569b]">Open PDF <FaArrowUpRightFromSquare className="h-3 w-3" aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
