import type { Metadata } from "next";
import { Arima, Geist_Mono } from "next/font/google";
import "./globals.css";

const arimaSans = Arima({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick Chimezie Chukwudifu | UIUX Designer Portfolio",
  description:
    "Portfolio of Patrick Chimezie Chukwudifu, a skilled UIUX Designer/Product Manager specializing in designing intuitive, scalable, and user-centered digital products that seamlessly connect business goals with customer needs.",
  keywords: [
    "Patrick Chimezie Chukwudifu",
    "UIUX Designer",
    "Product Manager",
    "ICT Project Manager",
    "Product Designer",
    "Software Designer",
    "Web Designer",
    "Mobile Designer",
  ],
  authors: [{ name: "Patrick Chimezie Chukwudifu" }],
  creator: "Patrick Chimezie Chukwudifu",
  publisher: "Patrick Chimezie Chukwudifu",
  metadataBase: new URL("https://patoski.netlify.app"),
  alternates: {
    canonical: "https://patoski.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Add if needed
    yahoo: "your-yahoo-verification-code", // Add if needed
  },
  category: "technology",
  classification: "Portfolio",
  openGraph: {
    title: "Patrick Chimezie Chukwudifu | UIUX Designer/ Product Manager Portfolio",
    description:
      "Portfolio of Patrick Chimezie Chukwudifu, a skilled UIUX Designer/Product Manager specializing in designing intuitive, scalable, and user-centered digital products that seamlessly connect business goals with customer needs.",
    url: "https://patoski.netlify.app",
    siteName: "Patrick Chimezie Chukwudifu Portfolio",
    images: [
      {
        url: "/Assets/proc.JPG",
        width: 1200,
        height: 630,
        alt: "Patrick Chimezie Chukwudifu Portfolio Preview",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Nigeria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Chimezie Chukwudifu | UIUX Designer Portfolio",
    description:
      "Explore my projects, skills, and experience as a UIUX Designer specializing in modern, responsive, and high-performance web and Mobile applications.",
    images: ["/Assets/Pics1.JPG"],
    creator: "@techieconso",
    site: "@techieconso",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Consolation Portfolio",
    "application-name": "Consolation Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data for Portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Patrick Chimezie Chukwudifu",
              jobTitle: "UIUX Designer",
              description: "Portfolio of Patrick Chimezie Chukwudifu, a skilled UIUX Designer/Product Manager specializing in designing intuitive, scalable, and user-centered digital products that seamlessly connect business goals with customer needs.",
              url: "https://patoski.netlify.app",
              sameAs: [
                "https://www.linkedin.com/in/patrick-chukwudifu-908b901ab/",
              ],
              knowsAbout: [
                "UI Designer",
                "Product Management", 
                "UX Designer",
                "Promt Engneering",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Unity Bank"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Nigeria"
              }
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Patrick Chimezie Chukwudifu Portfolio",
              description: "Portfolio website showcasing web and mobile design projects and skills",
              url: "https://patoski.netlify.app",
              author: {
                "@type": "Person",
                name: "Patrick Chimezie Chukwudifu"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://patoski.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${arimaSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
