
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "The Carpark Society",
  description: "Prophecies, surveillance, and wine beneath Lombard Street.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
