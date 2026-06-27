"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLang } from "@/lib/i18n/LanguageProvider";

// Internal link that prefixes the current locale onto a locale-less href.
// Authors write `href="/violinski-vrt"`; the visitor on /en gets /en/violinski-vrt.
export default function LocaleLink({
  href,
  ...rest
}: { href: string } & Omit<ComponentProps<typeof Link>, "href">) {
  const { lang } = useLang();
  // Only prefix in-app paths; leave "#", "http(s):", "mailto:" etc. untouched.
  const prefixed = !href.startsWith("/")
    ? href
    : href === "/"
      ? `/${lang}`
      : `/${lang}${href}`;
  return <Link href={prefixed} {...rest} />;
}
