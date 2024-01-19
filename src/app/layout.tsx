import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Chooose technical assessment",
  description: "Created by Isabelle Pinheiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
