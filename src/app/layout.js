import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevSS Store",
  description: "A place for anything or everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
