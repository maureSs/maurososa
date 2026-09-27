import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Camera,
  Code2,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/maureSs",
    icon: Code2,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sosamauro/",
    icon: BriefcaseBusiness,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maurososaa/",
    icon: Camera,
  },
  {
    name: "X / Twitter",
    href: "https://twitter.com/maurososaa_",
    icon: AtSign,
  },
];

export default function SocialMedia() {
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <li key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-sm border border-border/70 bg-card px-3 py-3 transition hover:border-gold/50"
            >
              <span className="flex items-center gap-2.5">
                <Icon aria-hidden="true" className="size-4 text-gold" />
                <span className="text-sm font-medium">{social.name}</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-muted-foreground transition group-hover:text-gold"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
