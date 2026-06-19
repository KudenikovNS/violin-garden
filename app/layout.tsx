import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Violin Garden Collection — Violinski Vrt",
  description:
    "Violinski vrt je osebna zbirka violin akademske violinistke Inge Ulokine, mag. art. Ekskluzivna zbirka violin z glasbo, zgodbami in umetniškimi projekti.",
  keywords: ["violin", "violine", "violinski vrt", "Inga Ulokina", "zbirka violin", "glasbeni projekti"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body>{children}</body>
    </html>
  );
}
