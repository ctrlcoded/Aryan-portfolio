import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Set NEXT_PUBLIC_SITE_URL to your production domain so OG/canonical URLs resolve.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aryan Raghav — Software Engineer & AI",
  description:
    "Aryan Raghav — software engineer building AI products and scalable web applications. Selected work, experience, and research.",
  keywords: [
    "Aryan Raghav",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "LLM",
    "MERN",
    "Next.js",
  ],
  authors: [{ name: "Aryan Raghav" }],
  creator: "Aryan Raghav",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Aryan Raghav — Software Engineer & AI",
    description:
      "Software engineer building AI products and scalable systems — from multi-model LLM pipelines to production-grade web platforms.",
    siteName: "Aryan Raghav",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Raghav — Software Engineer & AI",
    description:
      "Software engineer building AI products and scalable systems.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Raghav",
  jobTitle: "Software Engineer",
  email: "mailto:delhibhanu2@gmail.com",
  url: siteUrl,
  sameAs: [
    "https://github.com/ctrlcoded",
    "https://www.linkedin.com/in/aryan-raghav-96407b252/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Full-Stack Web Development",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
