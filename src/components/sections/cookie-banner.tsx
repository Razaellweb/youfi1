"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md rounded-2xl border bg-card p-6 shadow-lg">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        aria-label="Close"
      >
        <X className="size-4" />
      </button>

      <h4 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        Cookie Notice
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        We use cookies to enhance your experience, analyze platform usage, and ensure security. By continuing, you agree to our cookie policy.{" "}
        <a href="#" className="text-primary hover:underline">
          Learn more
        </a>
      </p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl"
          onClick={() => setIsVisible(false)}
        >
          Decline
        </Button>
        <Button
          size="sm"
          className="rounded-xl bg-primary hover:bg-primary/90"
          onClick={() => setIsVisible(false)}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}