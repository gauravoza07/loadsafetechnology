import Hero from "@/app/components/Hero";
import AboutUs from "@/app/components/AboutUs";
import ProductCard from "@/app/components/ProductCard";
import ServicesCard from "@/app/components/ServicesCard";
import Industries from "@/app/components/Industries";
import Reviews from "@/app/components/Reviews";
import BottomCTA from "@/app/components/BottomCTA";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductCard />
      <ServicesCard />
      <Industries />
      <Reviews />
      <BottomCTA />
      <ContactForm />
    </>
  );
}
