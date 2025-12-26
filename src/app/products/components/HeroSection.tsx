import Image from "next/image";

type HeroBannerProps = {
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HeroSection({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt,
}: HeroBannerProps) {
  return (
    <section className="container mx-auto px-4 lg:pb-24 lg:px-8 pt-6 lg:pt-12">
      <div className="text-center max-w-5xl mx-auto mb-8">
        <h2 className="text-lg lg:text-xl xl:text-2xl text-black mb-2">
          {subtitle}
        </h2>

        <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
          {title}
        </p>

        <p className="text-black sm:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      </div>

      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={600}
        className="w-full h-[30vh] lg:h-auto rounded-2xl object-cover"
        priority
      />
    </section>
  );
}
