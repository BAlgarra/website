import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, GraduationCap, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Achievements</h2>

        <div className="space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary mt-1" />
              <div>
                <CardTitle>Bachelor of Science in Computer Engineering</CardTitle>
                <CardDescription className="text-base">Tech University</CardDescription>
              </div>
              <div className="ml-auto flex items-center">
                <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">2020 - 2024</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Specialized in Embedded Systems and Computer Architecture with a minor in Artificial Intelligence.
                Maintained a 3.8/4.0 GPA while participating in multiple research projects and student organizations.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Architecture</Badge>
                  <Badge variant="outline">Operating Systems</Badge>
                  <Badge variant="outline">Embedded Systems</Badge>
                  <Badge variant="outline">Digital Signal Processing</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Computer Networks</Badge>
                  <Badge variant="outline">VLSI Design</Badge>
                  <Badge variant="outline">Database Systems</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold mt-12 mb-6">Certifications & Awards</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard
              title="AWS Certified Solutions Architect"
              organization="Amazon Web Services"
              date="2023"
              description="Validated expertise in designing distributed systems on AWS."
            />
            <AchievementCard
              title="1st Place - University Hackathon"
              organization="Tech University"
              date="2022"
              description="Led a team of 4 to build an AI-powered accessibility tool for visually impaired users."
            />
            <AchievementCard
              title="Dean's List"
              organization="Tech University"
              date="2020 - 2023"
              description="Recognized for academic excellence for 6 consecutive semesters."
            />
            <AchievementCard
              title="Research Grant Recipient"
              organization="National Science Foundation"
              date="2023"
              description="Awarded $5,000 for research in energy-efficient computing systems."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface AchievementCardProps {
  title: string
  organization: string
  date: string
  description: string
}

function AchievementCard({ title, organization, date, description }: AchievementCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4">
        <Award className="h-6 w-6 text-primary mt-1" />
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{organization}</CardDescription>
        </div>
        <div className="ml-auto text-sm text-muted-foreground">{date}</div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

