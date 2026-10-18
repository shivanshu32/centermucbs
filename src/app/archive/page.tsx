import Image from "next/image";

const programmeGallery = [
  {
    src: "/slider3.png",
    width: 1445,
    height: 1088,
    alt: "Co-operative banking professionals attending a training session",
  },
  {
    src: "/slider2.png",
    width: 1672,
    height: 941,
    alt: "Participants receiving recognition at a programme",
  },
  {
    src: "/slider1.png",
    width: 1426,
    height: 1103,
    alt: "Programme participants gathered after a training session",
  },
  {
    src: "/slider6.png",
    width: 1844,
    height: 853,
    alt: "Participants receiving programme certificates",
  },
  {
    src: "/slider4.png",
    width: 1448,
    height: 1086,
    alt: "Programme participants gathered for a group photograph",
  },
  {
    src: "/slider5.png",
    width: 1672,
    height: 941,
    alt: "Participants at a management development programme",
  },
  {
    src: "/slider7.png",
    width: 1448,
    height: 1086,
    alt: "Co-operative banking professionals at a programme gathering",
  },
];

export default function ProgrammeGalleryPage() {
  return (
    <main id="previoustraining" className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 px-4 pb-20 pt-12 sm:px-6 md:pt-16">
      <header className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#DE466C]">
          Learning · Leadership · Community
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#004281] sm:text-5xl md:text-6xl">
          Programme Gallery
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Moments from our training programmes and the co-operative banking community.
        </p>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {programmeGallery.map((image, index) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-blue-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#edf2f8]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={index < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </figure>
        ))}
      </div>
    </main>
  );
}
