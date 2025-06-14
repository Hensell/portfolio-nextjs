import type { Metadata } from "next";
import { Roboto_Serif, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import "@/app/styles/theme-transition.css";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HENSELL",
  description: "HENSELL ESPINOZA - FULL STACK DEVELOPER",
  other: {
    "google-site-verification": "3u0uYIpFLgOisQ5AWoggP5hsV8Oh5Fym2V7sWnbmrk8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSerif.variable} ${robotoFlex.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
