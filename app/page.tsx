import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Sneh Shah
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Product Manager & AI Innovation Leader
              </p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                Driving product excellence through data-driven decisions, AI automation, and cross-functional
                leadership. Specialized in scaling SaaS products and building AI-powered solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Chicago, IL
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Phone className="w-4 h-4 mr-2" />
                312-545-4707
              </Button>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <a href="mailto:sshah215@hawk.illinoistech.edu">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <a href="https://www.linkedin.com/in/snehshah74/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <a href="https://github.com/snehshah74" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Product Manager with 4+ years of experience leading cross-functional teams and driving AI-powered
                    product innovations. Currently pursuing Master's in Information Technology & Management at Illinois
                    Institute of Technology with a $10,000 academic scholarship.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Proven track record of scaling SaaS products, reducing time-to-market by 40%, and generating over
                    $10M in client annual sales. Passionate about leveraging AI and data analytics to solve complex
                    business challenges.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Product Strategy & Roadmapping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold text-gray-900">Cross-functional Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Data-Driven Decision Making</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">AI & ML Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold text-gray-900">SaaS Product Scaling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Agile & Scrum Methodologies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="aspect-square bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-IMG_3229-kmw4NDDoR0taSO4ggFnRyuN9SXIHQp.jpeg"
                    alt="Sneh Shah - Product Manager"
                    className="w-80 h-75 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>

            <div className="space-y-8">
              {/* Humanitarians AI */}
              <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">Product Manager (Volunteer)</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">Humanitarians AI</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      July 2025 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Leading a cross-functional team of 11 engineers and data scientists to design and deploy AI
                      agents for crisis resource allocation
                    </li>
                    <li>• Built AI-driven decision support systems improving operational efficiency by 25%</li>
                    <li>
                      • Developed predictive models for optimal resource deployment based on real-time humanitarian
                      operations data
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* JuliaHub */}
              <Card className="border-l-4 border-l-indigo-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">Product Manager Intern</CardTitle>
                      <CardDescription className="text-lg font-medium text-indigo-600">JuliaHub Inc.</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                      Aug 2024 - Feb 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Designed customer onboarding process reducing onboarding time by 40%</li>
                    <li>
                      • Built scalable AI Agent automating Julia-based ML model deployment, reducing manual work by 60%
                    </li>
                    <li>
                      • Conducted 25+ user interviews and developed AI-powered Code Analysis feature projected to save
                      $3M in client churn
                    </li>
                    <li>• Executed A/B testing campaigns achieving 28% speedup in product launch</li>
                  </ul>
                </CardContent>
              </Card>

              {/* MindFire */}
              <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">Product Manager Intern</CardTitle>
                      <CardDescription className="text-lg font-medium text-purple-600">MindFire Inc.</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Jun 2024 - Aug 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Restructured internal data pipelines saving 15+ hours per week in data operations</li>
                    <li>• Created KPI dashboards contributing to 10% increase in revenue and customer growth</li>
                    <li>• Established strategic partnerships reducing time-to-market by 25%</li>
                    <li>• Led AI assistant chatbot integration resulting in 45% reduction in support tickets</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Webvision Solution */}
              <Card className="border-l-4 border-l-green-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">Lead Product Manager</CardTitle>
                      <CardDescription className="text-lg font-medium text-green-600">
                        Webvision Solution Ltd.
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Jan 2022 - Jul 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Executed development of 9 SaaS products using Agile methodologies, reducing time-to-market by
                      40%
                    </li>
                    <li>• Led diverse team of 12 professionals improving team productivity by 30%</li>
                    <li>• Built KPI dashboards realizing 20% improvement in customer satisfaction metrics</li>
                    <li>• Developed internal communication systems enhancing collaboration</li>
                  </ul>
                </CardContent>
              </Card>

              {/* GrowthCruise */}
              <Card className="border-l-4 border-l-orange-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">Co-Founder & Lead Product Manager</CardTitle>
                      <CardDescription className="text-lg font-medium text-orange-600">GrowthCruise</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Sep 2020 - Jan 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Defined product vision and roadmap for 25+ client solutions generating over $10M in client
                      annual sales
                    </li>
                    <li>
                      • Conducted user research and feedback analysis ensuring high adoption across digital products
                    </li>
                    <li>• Scaled company revenue 10X to $300K within the first year</li>
                    <li>• Led end-to-end product development cycles reducing time-to-market by 30%</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">AI Research Agent</CardTitle>
                    <Badge className="bg-blue-600 text-white">AI/ML</Badge>
                  </div>
                  <CardDescription className="text-gray-600">Python, LangChain, OpenAI GPT, Pinecone</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Built an autonomous research assistant that searches academic papers, extracts insights, and
                    generates concise literature reviews. Reduced manual research time by 70% and increased productivity
                    for data-driven decision-making.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    70% reduction in research time
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">Multi-Agent Workflow Orchestrator</CardTitle>
                    <Badge className="bg-purple-600 text-white">AI Automation</Badge>
                  </div>
                  <CardDescription className="text-gray-600">LangGraph, OpenAI, VectorDB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Created a system of cooperating AI agents (research, analysis, and execution agents) that automated
                    end-to-end workflows like report generation and data analysis. Reduced manual involvement by 80% for
                    recurring business processes.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                    <Zap className="w-4 h-4" />
                    80% automation of business processes
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">Tools & Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Excel</Badge>
                    <Badge variant="outline">Tableau</Badge>
                    <Badge variant="outline">Power BI</Badge>
                    <Badge variant="outline">Salesforce</Badge>
                    <Badge variant="outline">HubSpot</Badge>
                    <Badge variant="outline">Azure</Badge>
                    <Badge variant="outline">GCP</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">Programming</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">R</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">AI & Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">LLMs</Badge>
                    <Badge variant="outline">LangChain</Badge>
                    <Badge variant="outline">RAG</Badge>
                    <Badge variant="outline">Vector DB</Badge>
                    <Badge variant="outline">ML</Badge>
                    <Badge variant="outline">Generative AI</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">Product Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">Agile</Badge>
                    <Badge variant="outline">Scrum</Badge>
                    <Badge variant="outline">JIRA</Badge>
                    <Badge variant="outline">A/B Testing</Badge>
                    <Badge variant="outline">User Research</Badge>
                    <Badge variant="outline">PRDs</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>

            <Card className="border-l-4 border-l-blue-600 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Master's in Information Technology & Management
                </CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">
                  Illinois Institute of Technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Management Information Systems</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Aug 2023 - May 2025
                  </Badge>
                </div>
                <p className="text-gray-600">
                  Awarded a $10,000 scholarship based on academics & extracurricular achievements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to drive product innovation and scale your business? Let's discuss how I can help.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <a href="mailto:sshah215@hawk.illinoistech.edu">
                  <Mail className="w-5 h-5 mr-2" />
                  sshah215@hawk.illinoistech.edu
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <a href="https://www.linkedin.com/in/snehshah74/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <a href="https://github.com/snehshah74" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Sneh Shah. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
