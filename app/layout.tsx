import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/resources/assets/styles/globals.css";
import { APP_NAME, SERVER_URL, APP_DESCRIPTION } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange  
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
