import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Grokpedia",
  description: "???????????????, ??????????? ???????????? ??????",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-neutral-900/60">
              <div className="container-default py-6 text-sm text-accent">
                ? {new Date().getFullYear()} Grokpedia
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
