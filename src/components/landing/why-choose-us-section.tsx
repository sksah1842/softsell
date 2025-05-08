import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, Rocket, Users } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Maximum Value",
    description: "We leverage extensive market data to ensure you get the best possible price for your licenses.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Compliant",
    description: "Our process is fully compliant with vendor policies, guaranteeing a risk-free transaction.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Fast & Hassle-Free",
    description: "From submission to payment, we've streamlined every step to save you time and effort.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Support",
    description: "Our dedicated team is here to guide you through the process and answer any questions.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Partner with SoftSell?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the advantages of choosing SoftSell for reselling your software licenses.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  {benefit.icon}
                </div>
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-foreground/70">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
