"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const body = encodeURIComponent(
      `Hi Mauro,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );
    window.location.href = `mailto:maurososa118@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
    setStatus("Your email app should open with the whisper ready to send.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-border/70 bg-background/50 p-4 sm:p-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="mt-2"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className="mt-2"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          className="mt-2"
          name="subject"
          type="text"
          placeholder="What would you like to build?"
          required
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me a little about your project, team, or idea."
          required
          className={cn(
            "mt-2 flex min-h-36 w-full resize-y rounded-md border border-border bg-background/80 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 transition",
            "hover:border-gold/35 focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/25",
          )}
        />
      </div>

      <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs leading-5 text-muted-foreground" aria-live="polite">
          {status || "Opens your default email app. No data is stored."}
        </p>
        <Button type="submit" className="w-full sm:w-auto">
          Send whisper
          <Send aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </form>
  );
}
