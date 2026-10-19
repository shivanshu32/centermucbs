import Image from "next/image";

export default function Upcomingtraining() {
  return (
    <section id="upcomingtraining" className="bg-gradient-to-b from-gray-50 to-blue-50 px-4 pb-16 pt-4 sm:px-6 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-blue-900/10 sm:p-3 md:rounded-3xl md:p-4">
          <Image
            src="/Calendar (1).webp"
            alt="Calendar of programmes for October to December 2026"
            width={3511}
            height={2483}
            sizes="(max-width: 768px) 100vw, 1152px"
            className="h-auto w-full rounded-xl md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
