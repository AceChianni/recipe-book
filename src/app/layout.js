import React from "react";
import "./globals.css";

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
