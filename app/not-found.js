"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 13l4-3 3 2 4-4 3 3v8H5v-6z"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-6xl font-serif font-bold">404</h1>
        <p className="text-2xl mt-4 font-light">Page not found.</p>
        <p className="mt-2 text-gray-500">It might have been moved or deleted.</p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
}

