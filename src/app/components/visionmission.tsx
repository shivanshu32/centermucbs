export default function VisionMission() {
  return (
    <section id="visionmission" className="scroll-mt-8 bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-[#004281] md:text-5xl">
          Our Vision/Mission
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-blue-50 p-7 shadow-sm ring-1 ring-blue-900/10 md:p-9">
            <h3 className="mb-4 text-2xl font-bold text-[#004281]">Our Vision</h3>
            <p className="text-lg leading-8 text-gray-700">
              To be a trusted centre of excellence for management development, professional knowledge and institutional capacity building in the co-operative banking sector.
            </p>
          </article>
          <article className="rounded-2xl bg-blue-50 p-7 shadow-sm ring-1 ring-blue-900/10 md:p-9">
            <h3 className="mb-4 text-2xl font-bold text-[#004281]">Our Mission</h3>
            <p className="text-lg leading-8 text-gray-700">
              To strengthen the professional capabilities, governance standards and institutional effectiveness of co-operative banks through specialised training, management development, regulatory advisory and practical consultancy services.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
