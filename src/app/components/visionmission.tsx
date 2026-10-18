const objectives = [
  {
    title: "Developing Skilled Banking Professionals",
    description:
      "To provide relevant learning opportunities that strengthen the technical knowledge, managerial capabilities and professional competence of bank personnel.",
  },
  {
    title: "Encouraging Knowledge Sharing and Best Practices",
    description:
      "To create opportunities for co-operative banking professionals to exchange experiences, understand emerging developments and learn from practical approaches adopted by other institutions.",
  },
  {
    title: "Supporting Institutional Sustainability",
    description:
      "To help banks improve their organisational effectiveness, customer service, operational discipline and capacity to respond to changing business and regulatory environments.",
  },
];

export default function VisionMission() {
  return (
    <section id="visionmission" className="scroll-mt-8 bg-white px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-left text-3xl font-extrabold text-[#004281] md:mb-10 md:text-5xl">
          Our Vision and Mission
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-900/10 md:p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#004281]">Our Vision</h3>
            <p className="text-base font-semibold leading-7 text-gray-700 md:text-lg md:leading-8">
              To be a trusted centre of excellence for management development, professional knowledge and institutional capacity building in the co-operative banking sector.
            </p>
          </article>
          <article className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-900/10 md:p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#004281]">Our Mission</h3>
            <p className="text-base leading-7 text-gray-700 md:text-lg md:leading-8">
              Our mission is to strengthen the professional capabilities, governance standards and institutional effectiveness of co-operative banks through specialised training, management development, regulatory advisory and practical consultancy services.
            </p>
          </article>
        </div>

        <div className="mt-10 md:mt-14">
          <h3 className="mb-3 text-2xl font-bold text-[#004281] md:text-3xl">Our Goals and Objectives</h3>
          <p className="mb-6 max-w-4xl text-base leading-7 text-gray-600 md:text-lg">
            CMUCBs aims to contribute to the professional development and institutional strengthening of co-operative banks through the following objectives:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {objectives.map((objective) => (
              <article
                key={objective.title}
                className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm md:p-6"
              >
                <h4 className="mb-3 text-lg font-bold leading-snug text-[#004281] md:text-xl">
                  {objective.title}
                </h4>
                <p className="text-sm leading-6 text-gray-600 md:text-base md:leading-7">
                  {objective.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
