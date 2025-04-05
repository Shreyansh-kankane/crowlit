"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github, Send, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse" />
                <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Crowlit
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70">Transforming customer support with AI-powered conversations.</p>
            <div className="mt-6 flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">Social media</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-white">Product</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Features", "Pricing", "Integrations", "Documentation", "Changelog"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["About", "Customers", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-white/70 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white">Subscribe to our newsletter</h3>
              <p className="mt-4 text-sm text-white/70">Get the latest updates and news directly to your inbox.</p>
              <form className="mt-4 flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none bg-white/5 border-white/10 text-white"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Crowlit. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-white/50">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

