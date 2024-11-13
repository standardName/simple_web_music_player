import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import Player from "./_components/Player";
import { Suspense } from "react";
import Loading from "./loading";
import { SessionProvider } from "next-auth/react";
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "React Music",
  description: "Music Player",
};

export default function RootLayout({
  children,
  modalfavorite,
}: Readonly<{
  children: React.ReactNode;
  modalfavorite: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <span className="copyright">
          The music used in this project is provided by third-party authors and
          is used for demonstration purposes only. All copyrights belong to
          their respective owners.
        </span>
        <SessionProvider>
          <div className="layout">
            <div className="sidebar">
              <Sidebar />
            </div>
            <Suspense fallback={<Loading />}>
              <div className="content">
                <Header />
                {children}
                {modalfavorite}
              </div>
            </Suspense>
            <div className="player">
              <Player />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
