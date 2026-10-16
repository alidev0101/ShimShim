import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "SHIMSHIM | مد زنانه لوکس", template: "%s | SHIMSHIM" },
  description: "فروشگاه آنلاین لباس و اکسسوری زنانه منتخب؛ طراحی ماندگار، کیفیت ممتاز و ارسال سریع.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fa_IR", siteName: "SHIMSHIM", title: "SHIMSHIM | مد زنانه لوکس", description: "مجموعه‌ای گزیده از پوشاک زنانه معاصر و ماندگار." },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="fa" dir="rtl" suppressHydrationWarning><body><Providers><Header /><main>{children}</main><Footer /></Providers></body></html>;
}