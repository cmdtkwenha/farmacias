import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmácias Angola",
  description: "Encontre medicamentos, reserve e recolha em farmácias perto de si.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body>{children}</body>
    </html>
  );
}
