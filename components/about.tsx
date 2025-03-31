import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Database } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              I'm a final-year Computer Engineering student at Tech University with a passion for building solutions
              that bridge hardware and software. My journey in tech started when I built my first computer at age 12,
              and I've been hooked ever since.
            </p>
            <p className="text-lg">
              With experience in full-stack development, embedded systems, and machine learning, I enjoy tackling
              complex problems that require interdisciplinary approaches. I'm particularly interested in IoT, edge
              computing, and creating efficient systems.
            </p>
            <p className="text-lg">
              When I'm not coding or soldering, you can find me hiking, playing chess, or participating in hackathons.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Software Development</h3>
                  <p className="text-muted-foreground">Building web applications, mobile apps, and backend services</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Embedded Systems</h3>
                  <p className="text-muted-foreground">
                    Working with microcontrollers, IoT devices, and hardware interfaces
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Data Science</h3>
                  <p className="text-muted-foreground">Analyzing data and building machine learning models</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

