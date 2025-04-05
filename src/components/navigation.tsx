"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 border-b backdrop-blur-3xl bg-background/50 dark:bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6" />
              <span className="font-bold text-lg">LOSLC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/tracks/development"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Development Track
            </Link>
            <Link
              href="/tracks/security"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Security Track
            </Link>
            <Link
              href="/login"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/tracks/development"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Development Track
            </Link>
            <Link
              href="/tracks/security"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Security Track
            </Link>
            <Link
              href="/auth"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
