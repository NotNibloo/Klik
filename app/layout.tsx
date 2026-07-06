import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Silk from "./components/reactbits/Silk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klik",
  description: "Klik and uhhh i dont know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body
        className={`min-h-full text-[#F9FBFB] flex flex-col ${geistSans.className}`}>
        <ClerkProvider>
          <div className="absolute h-full w-full z-1">
            <Silk color="#1D1E20" />
          </div>
          <header className="fixed top-0 left-0 right-0 z-50 px-4">
            <div className="border backdrop-blur dark:border-neutral-800 mt-4 bg-background/80 border-[#1D1E20] max-w-7xl mx-auto w-full">
              <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-18 items-center justify-between border border-transparent bg-transparent">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-md bg-gray-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Show when="signed-out">
                      <SignInButton>
                        <button className="cursor-pointer px-4 py-2.5 text-sm font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton>
                        <button className="cursor-pointer px-4 py-2.5 text-sm font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                      <UserButton
                        appearance={{
                          elements: {
                            userButtonTrigger:
                              "border border-[#1D1E20] hover:scale-105 transition-transform duration-200 outline-none focus:ring-2 focus:ring-neutral-700",
                            avatarBox:
                              "scale-160 mr-2 border border-[#1D1E20] p-0.5",
                          },
                        }}
                      />
                    </Show>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="pt-28 flex-1 z-40">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
