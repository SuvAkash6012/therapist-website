import { Playfair_Display } from "next/font/google";
import "./globals.css";

// ✅ Import the font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Therapist Website",
  description: "Psychological Support for Personal Growth, Clarity, and Well-Being",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
