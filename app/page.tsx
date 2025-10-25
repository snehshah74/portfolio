import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, BarChart3, Users, Mail, Linkedin, Github, Brain, Code, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-foreground">Sneh Shah</div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Case Studies
              </a>
              <a
                href="#achievements"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Achievements
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            AI Product Manager & Agentic AI Specialist
            <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Building Intelligent Product Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Leading AI product strategy at Humanitarians AI, specializing in agentic AI platforms, workflow automation, 
            and cross-functional team leadership to deliver measurable business impact across SaaS products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#case-studies">
                View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="link"
              size="lg"
              className="text-lg px-8 bg-transparent hover:bg-primary/5 border-2 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="/Sneh_Shah_Resume.pdf" download="Sneh_Shah_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a Product Manager specializing in AI and Agentic AI platforms, currently leading product strategy 
                at Humanitarians AI for Madison, an Agentic AI marketing intelligence platform.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From co-founding GrowthCruise and scaling it 10X to $200K ARR to leading cross-functional teams of 8+ 
                engineers at top-tier companies like JuliaHub and MindFire, I excel at defining product vision, 
                conducting user research, and driving measurable business impact through AI-powered solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Agentic AI</div>
                    <div className="text-sm text-muted-foreground">LangChain & LangGraph</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Team Leadership</div>
                    <div className="text-sm text-muted-foreground">8+ Engineers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Product Analytics</div>
                    <div className="text-sm text-muted-foreground">A/B Testing & KPIs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-primary/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Workflows</div>
                    <div className="text-sm text-muted-foreground">n8n & Automation</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center shadow-2xl rounded-3xl">
                <img
                  src="/images/design-mode/Screenshot%202025-10-16%20at%202.42.51%E2%80%AFAM.png"
                  alt="Sneh Shah - Product Manager"
                  className="w-100 h-95 object-cover rounded-xl shadow-lg text-justify"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world examples of AI-powered product solutions and cross-functional team leadership driving
              measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/mobile-app-dashboard-interface.jpg"
                    alt="AI Agent Automation"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">AI Automation</Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent font-medium">
                    Humanitarian Tech
                  </Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  Madison AI Platform
                </CardTitle>
                <CardDescription className="mb-4 leading-relaxed">
                  Leading product strategy for Madison, an Agentic AI marketing intelligence platform, managing 8 engineers 
                  to build agent orchestration and workflow automation with 25% accuracy improvement.
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/saas-analytics-dashboard.jpg"
                    alt="Julia ML Platform"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">ML Platform</Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent font-medium">
                    B2B SaaS
                  </Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  JuliaHub AI Assistant
                </CardTitle>
                <CardDescription className="mb-4 leading-relaxed">
                  Developed AI-powered deployment assistant that automated 3 manual configuration steps, reducing deployment 
                  time from 5 hours to 2 hours per model and increasing MAUs by 20%.
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/ai-recommendation-interface.png"
                    alt="Multi-Agent Workflow"
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">AI Agents</Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent font-medium">
                    Workflow Automation
                  </Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  GrowthCruise Scaling
                </CardTitle>
                <CardDescription className="mb-4 leading-relaxed">
                  Co-founded and scaled GrowthCruise 10X from $20K to $200K ARR, managing 25+ client projects across 
                  e-commerce and SaaS domains with $2M+ collective annual revenue.
                </CardDescription>
                <div className="flex items-center text-sm text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground text-lg">
              Measurable impact across AI product launches, team leadership, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-primary/5 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  $10M+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Client Revenue Generated</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-primary/5 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Product Solutions</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-primary/5 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  70%
                </div>
                <div className="text-sm text-muted-foreground font-medium">Research Time Reduction</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-primary/5 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  12+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Team Members Led</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Career Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Product Manager - Humanitarians AI</div>
                  <div className="text-sm text-muted-foreground mb-2">July 2025 - Present</div>
                  <p className="text-sm text-muted-foreground">
                    Leading cross-functional team of 11 engineers building AI agents to transform data-driven
                    operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Product Manager Intern - JuliaHub Inc.</div>
                  <div className="text-sm text-muted-foreground mb-2">August 2024 - February 2025</div>
                  <p className="text-sm text-muted-foreground">
                    Designed customer onboarding process and built scalable AI features, conducting 25+ user interviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Product Manager Intern - MindFire Inc.</div>
                  <div className="text-sm text-muted-foreground mb-2"> June 2024 - August 2024</div>
                  <p className="text-sm text-muted-foreground">
                    Restructured data pipelines, built KPI dashboards, and launched AI chatbot integration reducing
                    support tickets by 45%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Lead Product Manager - Webvision Solution Ltd.</div>
                  <div className="text-sm text-muted-foreground mb-2">January 2022 - July 2023</div>
                  <p className="text-sm text-muted-foreground">
                    Executed development of 9 SaaS products using Agile methodologies, leading diverse team of 12
                    professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Co-Founder & Lead Product Manager - GrowthCruise</div>
                  <div className="text-sm text-muted-foreground mb-2">September 2020 - January 2022</div>
                  <p className="text-sm text-muted-foreground">
                    Defined product vision for 20+ client solutions, scaling company revenue 10X to $300K within first
                    year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI-powered projects showcasing expertise in agentic AI, observability platforms, and intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary">AgentLens</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">AI Observability</Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent font-medium">
                    Real-time Monitoring
                  </Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  AI Observability Platform
                </CardTitle>
                <CardDescription className="mb-4 leading-relaxed">
                  Monitor and optimize AI agents with real-time tracing and AI-powered insights for better performance and reliability.
                </CardDescription>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://agent-lens-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/snehshah74/AgentLens" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-accent">Molecular Nutrition AI</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-accent text-accent-foreground border-0 font-medium">Health Tech</Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary font-medium">
                    AI Analysis
                  </Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  Molecular Nutrition Analysis
                </CardTitle>
                <CardDescription className="mb-4 leading-relaxed">
                  AI system that analyzes nutrition at the molecular level using data on genes and nutrients for personalized health insights.
                </CardDescription>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://molecularnutritionai.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/snehshah74/Molecular-Nutrition-AI" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary">ConversaAI</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">Voice AI</Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent font-medium">
                    Customer Support
                  </Badge>
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                  Conversational Voice AI Platform
                </CardTitle>
                <CardDescription className="mb-4 leading-relaxed">
                  Create and manage conversational Voice AI agents for customer support, sales, and automated interactions.
                </CardDescription>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://conversa-voiceai.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/snehshah74/ConversaAI" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing AI product opportunities, technical challenges, or sharing insights
            about building intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:snehshah741@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:bg-primary/5 border-2 hover:border-primary transition-all duration-300"
            >
              <a href="https://calendly.com/snehshah/60min?month=2025-09" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/snehshah74/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-muted to-primary/10 rounded-xl hover:from-primary/10 hover:to-accent/10 hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://github.com/snehshah74"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-muted to-primary/10 rounded-xl hover:from-primary/10 hover:to-accent/10 hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="mailto:snehshah741@gmail.com"
              className="p-4 bg-gradient-to-br from-muted to-primary/10 rounded-xl hover:from-primary/10 hover:to-accent/10 hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Sneh Shah. 
          </p>
        </div>
      </footer>
    </div>
  )
}
