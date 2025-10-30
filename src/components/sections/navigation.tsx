"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary">
            <Wallet className="size-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            YouFi
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Button variant="ghost" className="rounded-xl text-nav-link">
            How It Works
          </Button>
          <Button variant="ghost" className="rounded-xl text-nav-link">
            For Borrowers
          </Button>
          <Button variant="ghost" className="rounded-xl text-nav-link">
            For Lenders
          </Button>
          <Button variant="ghost" className="rounded-xl text-nav-link">
            Security
          </Button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" className="rounded-xl text-button">
            Sign In
          </Button>
          <Button className="rounded-xl h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-button shadow-sm">
            Join Beta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex size-9 items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container flex flex-col gap-2 py-4">
            <Button variant="ghost" className="justify-start rounded-xl text-nav-link">
              How It Works
            </Button>
            <Button variant="ghost" className="justify-start rounded-xl text-nav-link">
              For Borrowers
            </Button>
            <Button variant="ghost" className="justify-start rounded-xl text-nav-link">
              For Lenders
            </Button>
            <Button variant="ghost" className="justify-start rounded-xl text-nav-link">
              Security
            </Button>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="rounded-xl">
                Sign In
              </Button>
              <Button className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
                Join Beta
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}