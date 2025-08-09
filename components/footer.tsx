'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground">Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Code className="h-4 w-4 text-blue-500" />
            <span className="text-muted-foreground">by Pravav</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
            <Coffee className="h-4 w-4" />
            <span>Fueled by curiosity and learning</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {currentYear} Pravav. All rights reserved.
          </p>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Powered by Next.js, TypeScript, Tailwind CSS & Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
