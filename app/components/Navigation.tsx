"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "CV", path: "/cv" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Profile Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/profile_image.png"
                alt="Dr. Sebastian Pirmann"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <span className="text-lg font-semibold text-white">Dr. Sebastian Pirmann</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-all hover:text-sky-400 ${
                  pathname === item.path
                    ? "text-sky-400 border-b-2 border-sky-400"
                    : "text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div>
            <Button
              onClick={scrollToContact}
              variant="ghost"
              className="text-sky-400 hover:text-sky-300 hover:bg-sky-400/10"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 