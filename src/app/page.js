import React from "react";
import Link from "next/link";

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
    <header className="bg-blue-600 text-white p-4 w-full">
      <nav className="flex justify-center">
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
    <main className="flex flex-col items-center justify-center flex-grow">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">
        Welcome to Recipe Book
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        This is the home page of Recipe Book.
      </p>
    </main>
    <footer className="bg-gray-800 text-white text-center p-4 w-full">
      &copy; 2024 Ace Chianni
    </footer>
  </div>
);

export default Home;
