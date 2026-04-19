"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Brand from "@/components/shared/nav/Brand";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground px-6 overflow-hidden">
      

      {/* Animated Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center space-y-6 max-w-xl z-10"
      >
        
        {/* Logo */}
        <motion.div variants={item} className="flex justify-center">
          <Brand />
        </motion.div>      

        {/* 404 */}
        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-primary"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-semibold"
        >
          Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-muted-foreground"
        >
          Sorry, we couldn’t find the page you’re looking for. It might have been removed,
          renamed, or never existed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition"
            >
              Go Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition"
            >
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
