import "../globals.css";
import { Roboto } from "next/font/google";

// Types
import { Metadata } from "next";

// Components
import Sidebar from "@/components/Sidebar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beatbooth",
  description: "Dive into a world of limitless melodies and curated playlists.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
