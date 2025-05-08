import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { UploadCloud, DollarSign, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="h-10 w-10 text-accent" />,
    title: "Submit Your Licenses",
    description: "Easily tell us about the software licenses you want to sell. Our secure platform makes it quick and simple.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-accent" />,
    title: "Receive a Fair Valuation",
    description: "Our experts assess your licenses based on current market demand and provide a transparent, competitive offer.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-accent" />,
    title: "Get Paid Quickly",
    description: "Once you accept our offer, receive prompt payment. It's that easy to convert unused software into cash.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple Steps to Maximize Your Software ROI
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Selling your surplus software licenses with SoftSell is a straightforward process designed for your convenience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <Card className="w-full h-full flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-4 bg-accent/10 rounded-full mb-6">
                  {step.icon}
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl font-semibold text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-foreground/70">{step.description}</CardDescription>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-4 -translate-y-1/2 h-8 w-8 text-primary/30 hidden md:block transform scale-x-150" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
