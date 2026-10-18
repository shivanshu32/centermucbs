import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-10rem)] w-full overflow-hidden bg-[#07569b]">
      <Image
        src="/hero-background-clean.png"
        alt="Delivering Expert Advice — Centre for Management of UCBs"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#031d40]/65 via-[#062f5e]/30 to-transparent" />
      <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-7xl items-center px-6 sm:px-8 md:px-12 lg:px-16">
        <h1 className="max-w-[12ch] text-left text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl">
          Delivering Expert Advice
        </h1>
      </div>
    </section>
  );
}
