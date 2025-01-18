import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Footer from "@/layouts/footer";
import NextTopLoader from "nextjs-toploader";
import Video_module from "@/Components/Video_Preview";
import Enter from "@/Provider/Enter";
import { Settings } from "@/data/data";
import Header_2 from "@/layouts/Header_2";
import Header_1 from "@/layouts/Header_1";
import "./globals.css";

// font form goole
const anaheim = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// meta tags for seo
export const metadata: Metadata = {
  title: Settings.title,
  description: Settings.description,
  keywords: Settings.keywords,
  icons: {
    icon: Settings.favorit,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anaheim.className} antialiased`}>
        <NextTopLoader color="#4078ff" zIndex={1600} />
        <Enter>
          {Settings.header == 1 ? <Header_1 /> : <Header_2 />}

          <Video_module>{children}</Video_module>
          <Footer />
        </Enter>
      </body>
    </html>
  );
}
