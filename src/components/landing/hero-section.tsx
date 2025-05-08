import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
              Unlock the Value of Your Unused Software Licenses
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              SoftSell helps you easily and securely resell your surplus software, turning dormant assets into real revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
                <Link href="#contact">Sell My Licenses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group">
             <Image
              src="https://picsum.photos/seed/softwareSale/1200/800"
              alt="Software licenses concept"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="software licenses digital"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
