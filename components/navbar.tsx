"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-10 w-10 overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse" />
              <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
            </motion.div>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            >
              Crowlit
            </motion.span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              Get Started
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden bg-black/95 backdrop-blur-md"
            >
              <div className="relative z-20 grid gap-6 rounded-md p-4">
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex w-full items-center rounded-md p-2 text-sm font-medium text-white hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    Log in
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
