import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ông Bụt AI — Nền tảng giáo dục AI cá nhân hóa",
    template: "%s | Ông Bụt AI",
  },
  description:
    "Nền tảng giáo dục AI cá nhân hóa — học đúng cách, đúng lúc, đúng người. Hơn 1.500 học sinh tin tưởng.",
  keywords: ["giáo dục", "học online", "ông bụt", "AI education", "luyện thi"],
  openGraph: {
    title: "Ông Bụt AI — Học thông minh. Nghĩ sâu. Vươn xa.",
    description:
      "Nền tảng giáo dục AI cá nhân hóa — học đúng cách, đúng lúc, đúng người.",
    url: "https://ongbut.edu.vn",
    siteName: "Ông Bụt AI",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
