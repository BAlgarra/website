import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-primary">Alex Chen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Computer Engineering Student</h2>
          <p className="text-muted-foreground text-lg">
            Passionate about building innovative solutions through software and hardware integration. Currently
            exploring machine learning and embedded systems.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:alex@example.com">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/placeholder.svg?height=320&width=320" alt="Alex Chen" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

