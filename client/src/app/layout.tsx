import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/shared/styles/main.scss";

import { Header } from "@/widgets/header";
import { Providers } from "./providers";
// import { Footer } from "@/components/footer";
// import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinema | Client",
  description: "Book your favorite movies online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
