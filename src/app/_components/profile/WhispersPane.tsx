import Link from "next/link";
import { Mail } from "lucide-react";

import { buttonStyles } from "@/components/ui/Button";
import ContactForm from "@/app/contact/ContactForm";
import SocialMedia from "@/app/contact/SocialMedia";

export default function WhispersPane() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          Open channel
        </p>
        <h3 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
          Send a whisper
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Have a project, an opportunity, or an idea worth forging together?
          Reach out — I&apos;ll get back as soon as I can.
        </p>
        <Link
          href="mailto:maurososa118@gmail.com"
          className={buttonStyles("secondary", "mt-4")}
        >
          <Mail aria-hidden="true" className="size-4" />
          maurososa118@gmail.com
        </Link>
      </div>

      <section aria-labelledby="social-heading">
        <h4 id="social-heading" className="sr-only">
          Social media
        </h4>
        <SocialMedia />
      </section>

      <section aria-labelledby="form-heading">
        <h4
          id="form-heading"
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Compose whisper
        </h4>
        <ContactForm />
      </section>
    </div>
  );
}
