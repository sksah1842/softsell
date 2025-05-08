"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const licenseTypes = [
  "Microsoft Office",
  "Adobe Creative Suite",
  "CAD Software (e.g., AutoCAD)",
  "ERP Licenses (e.g., SAP, Oracle)",
  "CRM Licenses (e.g., Salesforce)",
  "Operating Systems (e.g., Windows Server)",
  "Other",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  licenseType: z.string({ required_error: "Please select a license type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll be in touch shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Sell or Have Questions?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Fill out the form below, and one of our specialists will get back to you shortly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>We&apos;re here to help you unlock the value of your software assets.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="licenseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a license type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {licenseTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about the licenses you want to sell or any questions you have."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl group hidden md:block">
            <Image
              src="https://picsum.photos/seed/contactUs/800/600"
              alt="Contact us concept image"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="office contact support"
            />
             <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 flex items-end p-8">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-md">
                <h3 className="text-xl font-semibold text-primary mb-2">Our Commitment</h3>
                <p className="text-sm text-foreground/80">
                  We typically respond within 24 business hours. Your inquiry is important to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
