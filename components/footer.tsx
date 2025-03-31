import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Alex Chen</h3>
            <p className="text-muted-foreground">
              Computer Engineering Student passionate about building innovative solutions.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:alex@example.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="#education" className="text-muted-foreground hover:text-primary">
                Education
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Resume
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Blog
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Publications
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Tutorials
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>San Francisco, California</p>
              <p>
                <a href="mailto:alex@example.com" className="hover:text-primary">
                  alex@example.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-primary">
                  (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
          <p className="text-sm mt-2">Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

