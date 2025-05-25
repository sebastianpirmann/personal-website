"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X, MoveLeft } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-white/70 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden relative">
              <Image
                src="/images/profile_image.png"
                alt="Dr. Sebastian Pirmann"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 48px, 56px"
                priority
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                Dr. Sebastian Pirmann
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">Bioinformatics Data Scientist</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-slate-900 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-emerald-500 after:transition-transform hover:after:scale-x-100">
              Home
            </Link>
            <Link href="/cv" className="text-slate-600 hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-emerald-500 after:transition-transform hover:after:scale-x-100">
              CV
            </Link>
            <Link href="/projects" className="text-slate-600 hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-emerald-500 after:transition-transform hover:after:scale-x-100">
              Projects
            </Link>
            <Link href="/publications" className="text-slate-600 hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-emerald-500 after:transition-transform hover:after:scale-x-100">
              Publications
            </Link>
            {/* Blog link - temporarily removed
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-emerald-500 after:transition-transform hover:after:scale-x-100">
              Blog
            </Link>
            */}
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex border-slate-300 hover:border-slate-400 transition-all"
              onClick={scrollToContact}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/50 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/cv" className="text-slate-600 hover:text-slate-900 transition-colors">
                CV
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Projects
              </Link>
              <Link href="/publications" className="text-slate-600 hover:text-slate-900 transition-colors">
                Publications
              </Link>
              <button 
                onClick={scrollToContact}
                className="text-slate-600 hover:text-slate-900 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 