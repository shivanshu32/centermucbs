import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[calc(100svh-10.5rem)] w-full overflow-hidden bg-[#07569b]">
      <Image
        src="/image.png"
        alt="Delivering Expert Advice — Centre for Management of UCBs"
        width={1672}
        height={941}
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />
    </section>
  );
}
