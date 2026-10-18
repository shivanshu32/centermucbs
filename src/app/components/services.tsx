const services = [
  { id: "regulatory-compliance-policy-advisory", title: "Regulatory Compliance & Policy Advisory" },
  { id: "management-development-programmes", title: "Management Development Programmes" },
  { id: "credit-investment-management", title: "Credit & Investment Management" },
  { id: "recovery-stressed-asset-management", title: "Recovery & Stressed Asset Management" },
  { id: "risk-management-internal-controls", title: "Risk Management & Internal Controls" },
  { id: "staff-training-capacity-building", title: "Staff Training & Capacity Building" },
  { id: "technology-risk-cybersecurity-awareness", title: "Technology Risk & Cybersecurity Awareness" },
];

const cardBackgrounds = [
  "from-white via-white to-[#dceeff]",
  "from-[#f1f8ff] via-white to-[#e5f1ff]",
  "from-white via-[#f8fcff] to-[#dff3fb]",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative mt-8 overflow-hidden"
      style={{ background: "linear-gradient(0deg, rgba(243, 243, 245, 1) 0%, rgba(215, 219, 255, 1) 99%)" }}
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-16">
        <h2 className="pt-4 text-left text-4xl font-extrabold leading-tight text-gray-800 md:w-9/12 lg:w-7/12 lg:text-5xl">
          Our Services
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, title }, index) => (
            <article
              key={id}
              id={id}
              className={`scroll-mt-32 min-h-40 rounded-2xl border border-blue-100/80 bg-gradient-to-br ${cardBackgrounds[index % cardBackgrounds.length]} p-6 shadow-[0_8px_24px_rgba(15,66,112,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_32px_rgba(15,66,112,0.16)]`}
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#07569b] to-[#54a9e8]" aria-hidden="true" />
              <h3 className="text-xl font-bold leading-snug text-[#004281]">{title}</h3>
            </article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute right-20 top-0" aria-hidden="true">
        <img className="invisible h-48 w-48 md:visible lg:h-auto lg:w-auto" src="/Group-1.png" alt="" />
      </div>
    </section>
  );
}
