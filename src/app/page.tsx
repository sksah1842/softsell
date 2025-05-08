import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ContactForm } from "@/components/landing/contact-form";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
