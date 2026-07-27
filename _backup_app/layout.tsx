import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johanvasquez.dev"),
  title: {
    default: "Johan Gabriel Vasquez | Full-Stack Product Engineer",
    template: "%s | Johan Gabriel Vasquez"
  },
  description:
    "Portfolio of Johan Gabriel Vasquez, a full-stack product engineer building polished web platforms, AI-assisted systems, APIs, databases, and cloud-ready software architecture.",
  authors: [{ name: "Johan Gabriel Vasquez" }],
  creator: "Johan Gabriel Vasquez",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Johan Gabriel Vasquez | Full-Stack Product Engineer",
    description:
      "Modern software from interface craft to backend architecture: web apps, APIs, AI tools, cloud deployment, databases, QA, and product systems.",
    type: "website",
    url: "/",
    siteName: "Johan Gabriel Vasquez"
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Gabriel Vasquez | Full-Stack Product Engineer",
    description:
      "Full-stack portfolio focused on product interfaces, APIs, AI-assisted systems, cloud deployment, and scalable architecture."
  },
  keywords: [
    "Johan Gabriel Vasquez",
    "Full-Stack Product Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "AI",
    "RAG",
    "API Development",
    "Software Architecture",
    "Dominican Republic"
  ],
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Johan Gabriel Vasquez",
    url: "https://johanvasquez.dev",
    jobTitle: "Full-Stack Product Engineer",
    sameAs: [
      "https://github.com/Johanvasquezdev",
      "https://www.linkedin.com/in/johan-gabriel-vasquez-5b539a312"
    ],
    knowsAbout: ["Next.js", "TypeScript", "API development", "AI systems", "Cloud deployment", "Software architecture"]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-ink font-sans text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
