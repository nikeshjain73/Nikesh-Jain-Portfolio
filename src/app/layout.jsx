import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// You can remove `metadata` entirely in JSX, or keep a plain object
export const metadata = {
  title: "Nikesh Jain Portfolio",
  description: "Welcome to my personal portfolio website where I showcase my projects, skills, and experiences as a developer. Feel free to explore and get in touch! nikeshjain.dev nikeshjain73",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
