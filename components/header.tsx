"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            DevPortfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-primary">
            Education
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-b">
          <nav className="flex flex-col space-y-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="#contact" onClick={toggleMenu}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

