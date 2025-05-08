import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "IT Manager",
    company: "TechSolutions Inc.",
    review: "SoftSell made selling our old licenses incredibly easy. The valuation was fair, and we got paid much faster than expected!",
    avatar: "SL",
    image: "https://picsum.photos/seed/sarah/100/100",
    aiHint: "woman portrait"
  },
  {
    name: "John B.",
    role: "CFO",
    company: "Innovate Corp.",
    review: "I was hesitant about reselling software, but SoftSell's team was professional and guided us through every step. Highly recommend!",
    avatar: "JB",
    image: "https://picsum.photos/seed/john/100/100",
    aiHint: "man portrait"
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Hear from businesses that have successfully partnered with SoftSell.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg flex flex-col">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                    <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                 <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 italic">&quot;{testimonial.review}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
