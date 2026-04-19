"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loader from "@/assets/loader.gif";
import Brand from "@/components/shared/nav/Brand";

function LoadingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">

      {/* === Soft Background Gradient === */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.12),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.12),transparent_40%)]" />

      {/* === Animated Glow === */}
      <motion.div
        className="absolute w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === Content (No Box) === */}
      <div className="flex flex-col items-center gap-6 z-10">

        {/* Brand */}
        <motion.div className="flex justify-center">
          <Brand />
        </motion.div>

        {/* Spinner Ring */}
        <motion.div
          className="h-10 w-10 rounded-full border-2 border-border border-t-primary"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-1"
        >
          <p className="text-sm font-medium tracking-tight">
            Loading
          </p>

          {/* Animated dots */}
          <motion.span
            className="inline-block text-muted-foreground text-sm"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Please wait while we prepare your experience...
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default LoadingPage;
