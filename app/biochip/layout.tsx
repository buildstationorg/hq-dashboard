import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "buildstation HQ - biochip",
  description: "your legacy, your identity, your biochip",
  metadataBase: new URL("https://hq.buildstation.org/biochip"),
  openGraph: {
    title: "buildstation HQ - biochip",
    description: "your legacy, your identity, your biochip",
    url: "https://hq.buildstation.org/biochip",
    siteName: "buildstation",
    images: [
      {
        url: "/buildstation-biochip.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "buildstation HQ - biochip",
    description: "your legacy, your identity, your biochip",
    creator: "@buildstationorg",
    images: ["/buildstation-biochip.png"],
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
