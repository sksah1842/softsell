import { Logo } from "@/components/icons/logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Logo className="h-8 w-auto" />
            </Link>
          </div>
          
          <p className="text-center text-sm text-foreground/60">
            &copy; {currentYear} SoftSell Marketplace. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-foreground/60 hover:text-accent transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
