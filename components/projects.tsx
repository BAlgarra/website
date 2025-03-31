import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Home IoT System",
      description:
        "A complete IoT solution for home automation using Raspberry Pi, custom PCB designs, and a React dashboard.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["IoT", "React", "Node.js", "Raspberry Pi", "MQTT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Machine Learning Traffic Analyzer",
      description:
        "Computer vision system that analyzes traffic patterns using TensorFlow and provides real-time analytics.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "TensorFlow", "OpenCV", "Flask", "AWS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Embedded Medical Device",
      description: "Low-power wearable medical monitoring device with custom firmware and mobile app integration.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["C++", "Bluetooth LE", "PCB Design", "React Native", "Embedded"],
      github: "https://github.com",
      demo: null,
    },
    {
      id: 4,
      title: "Distributed Database System",
      description: "Scalable distributed database with custom consensus algorithm implemented in Go.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Go", "Distributed Systems", "Docker", "Kubernetes", "gRPC"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string | null
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        {project.demo && (
          <Button size="sm" asChild>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

