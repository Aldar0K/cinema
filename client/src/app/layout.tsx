import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/main.scss";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/widgets";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
