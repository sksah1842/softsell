
"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggleButton(props: ButtonProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleActualTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    // Render a placeholder or the button in a default state to avoid hydration mismatch
    return (
      <Button variant="ghost" size="icon" disabled {...props}>
        <Sun className="h-[1.2rem] w-[1.2rem]" /> {/* Default icon */}
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleActualTheme}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} mode`}
      {...props}
    >
      {resolvedTheme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
