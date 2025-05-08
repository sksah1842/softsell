"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-choose-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render nothing or a placeholder until hydrated to avoid mismatch
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-auto" />
          </Link>
          <div className="h-8 w-32 animate-pulse rounded-md bg-muted md:hidden"></div>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
             <div className="h-5 w-20 animate-pulse rounded-md bg-muted"></div>
             <div className="h-5 w-16 animate-pulse rounded-md bg-muted"></div>
             <div className="h-5 w-24 animate-pulse rounded-md bg-muted"></div>
             <div className="h-5 w-16 animate-pulse rounded-md bg-muted"></div>
          </nav>
           <div className="hidden md:block h-10 w-32 animate-pulse rounded-md bg-muted"></div>
        </div>
      </header>
    );
  }

  const NavLinksContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        {isMobile ? (
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="mb-4" onClick={() => setMobileMenuOpen(false)}>
                  <Logo className="h-7 w-auto" />
                </Link>
                <nav className="flex flex-col space-y-4">
                  <NavLinksContent />
                </nav>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setMobileMenuOpen(false)}>
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <NavLinksContent />
            </nav>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
