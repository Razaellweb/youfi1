import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-12 lg:py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary">
                <Wallet className="size-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                YouFi
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Finance Powered by You
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Borrow</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Lend</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Use</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="max-w-md">
              <h4 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest updates on beta access and platform features.
              </p>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl lg:w-64"
              />
              <Button className="rounded-xl bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col lg:flex-row gap-4 items-center justify-between border-t pt-8">
          <p className="text-sm text-muted-foreground">
            YouFi — Finance Powered by You
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="size-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="size-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="size-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
