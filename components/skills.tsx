import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const programmingLanguages = ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "SQL"]

  const webTechnologies = ["React", "Next.js", "Node.js", "Express", "HTML/CSS", "Tailwind CSS", "REST APIs", "GraphQL"]

  const devTools = ["Git", "Docker", "AWS", "Linux", "CI/CD", "Jest", "Webpack"]

  const hardwareSkills = ["Arduino", "Raspberry Pi", "PCB Design", "Circuit Analysis", "FPGA", "Embedded C"]

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard title="Programming Languages" skills={programmingLanguages} />
          <SkillCard title="Web Technologies" skills={webTechnologies} />
          <SkillCard title="Development Tools" skills={devTools} />
          <SkillCard title="Hardware" skills={hardwareSkills} />
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  skills: string[]
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

