import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[28rem] items-center overflow-hidden md:min-h-[34rem] lg:min-h-[42rem]">
      <Image
        src="/b13.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl text-left text-white">
          <h1 className="mb-4 text-2xl font-bold uppercase leading-tight sm:text-3xl md:mb-5 md:text-4xl lg:text-5xl">
            Center for Management of UCBs
          </h1>
          <p className="max-w-3xl text-base font-semibold leading-relaxed sm:text-lg md:text-xl">
            {"From Compliance to Customer Service – We've Got You Covered"}
          </p>
        </div>
      </div>
    </section>
  );
}
