import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07569b]">
      <Image
        src="/image.png"
        alt="Delivering Expert Advice — Centre for Management of UCBs"
        width={1672}
        height={941}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  );
}
