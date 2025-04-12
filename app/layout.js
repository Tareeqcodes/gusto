import "@/assets/styles/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/context/CartContext";
import Cart from "@/components/Cart";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
  display: "swap",
});

export const viewport = {
  themeColor: '#B45309',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://gusto-resto.vercel.app/'),
  title: {
    default: "Gusto | Authentic African Dining Experience",
    template: "%s | Gusto Restaurant", // Dynamic title for other pages
    menu: "Menu | Gusto", // Specific page titles
    locations: "Locations | Gusto",
    about: "About Us | Gusto"
  },
  description: "Premium Nigerian cuisine in Abuja, Kano & Lagos. Experience our signature dishes like Jollof Risotto and Suya-Spiced Steak in elegant settings.",
  keywords: [
    "Nigerian restaurant",
    "Abuja fine dining",
    "Lagos seafood",
    "Kano traditional cuisine",
    "African fusion food",
    "Gusto restaurant menu"
  ],
  authors: [{ name: "Gusto Culinary Team" }],
  openGraph: {
    title: "Gusto - A masterpiece you can taste",
    description: "Where authentic African flavors meet modern culinary artistry",
    url: "https://gusto-resto.vercel.app/",
    siteName: "Gusto Restaurant",
    images: [
      {
        url: "/images/10.png",
        width: 1200,
        height: 630,
        alt: "Gusto's signature dish plated elegantly",
      },
    ],
    locale: "en_NG", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gusto Restaurant",
    description: "Follow us for daily specials and events",
    images: ["/images/10.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    }
  },
  icons: {
    icon: "icons/faviconB.ico",
    shortcut: "icons/favicon.png", 
    apple: "icons/apple-touch.png",
    other: {
      rel: "apple-touch--precomposed",
      url: "icons/apple-touch--precomposed.png",
    },
  },
  manifest: "/site.webmanifest", 
  alternates: {
    canonical: "https://gusto-resto.vercel.app/",
    languages: {
      en: "https://gusto-resto.vercel.app/en",
    },
  },
  verification: {
    google: "6GPrJZ7YUXkR3Qt38gEbtqi7dBrrv_bNVv9DUbArgGA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Navbar />
          <CartProvider>
        <main className="flex-grow">
          {children}
            <Cart />
        </main>
          </CartProvider>
        <Footer />
      </body>
    </html>
  );
} 
