
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // Removed ShoppingCart as it's not used
import { Logo } from "@/components/icons/logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { ThemeToggleButton } from '@/components/theme-toggle-button';

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
    // Render simplified placeholder to avoid layout shifts and hydration issues
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 animate-pulse rounded-md bg-muted md:hidden"></div> {/* Mobile menu placeholder */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`h-5 animate-pulse rounded-md bg-muted w-${16 + i * 2}`}></div>
              ))}
            </div>
            <div className="hidden md:block h-10 w-8 animate-pulse rounded-md bg-muted"></div> {/* Theme toggle placeholder */}
            <div className="hidden md:block h-10 w-32 animate-pulse rounded-md bg-muted"></div> {/* Get a quote placeholder */}
          </div>
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
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
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
                  {/* Theme toggle is now outside the sheet content, next to menu trigger for mobile */}
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-auto" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="#contact">Get a Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <NavLinksContent />
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggleButton />
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
