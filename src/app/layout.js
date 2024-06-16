import React from "react";
import "./globals.css";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="flex-grow">{children}</main>
    <footer className="bg-gray-800 text-white text-center p-4">
      &copy; 2024 Ace Chianni
    </footer>
  </div>
);

export const metadata = {
  title: "Recipe Book",
  description: "This is a Recipe Book application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
