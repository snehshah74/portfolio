"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { CaseStudyCard } from "@/components/case-study-card"
import { ArrowRight, BarChart3, Users, Mail, Linkedin, Github, Brain, Code, Download, Building2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 relative">
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
            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            AI Product Manager & Agentic AI Specialist
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Shipping agentic AI platforms and enterprise AI implementations — from cutting AI hallucination rates in
            half for finance workflows to building AI evaluation infrastructure for commercial real estate — with a
            track record of measurable business impact across AI and SaaS products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 shadow-sm hover:shadow-md transition-all duration-300"
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
      <section id="about" className="py-16 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a Product Manager specializing in AI and Agentic AI platforms. Most recently, I led 0→1 development
                of Mycroft, an AI workflow platform for finance teams at Humanitarians AI, and delivered enterprise AI
                implementations as a Technical Program Manager at CohesionIB.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From co-founding GrowthCruise and scaling it 10X to $300K ARR, to cutting AI hallucination rates
                in half at Humanitarians AI, to leading cross-functional teams at JuliaHub, MindFire, and Webvision,
                I excel at defining product vision, shipping agentic AI systems, and driving measurable business impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Agentic AI</div>
                    <div className="text-sm text-muted-foreground">LangChain & LangGraph</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Team Leadership</div>
                    <div className="text-sm text-muted-foreground">9+ Professionals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Product Analytics</div>
                    <div className="text-sm text-muted-foreground">A/B Testing & KPIs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
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
              <div className="aspect-square border border-border bg-muted/30 flex items-center justify-center rounded-2xl overflow-hidden">
                <img
                  src="/images/profile/sneh-shah.png"
                  alt="Portrait of Sneh Shah, AI Product Manager"
                  className="w-100 h-95 object-cover rounded-xl"
                />
              </div>
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
            <CaseStudyCard
              icon={Building2}
              badges={[{ label: "AI Infrastructure" }, { label: "Commercial Real Estate", variant: "outline" }]}
              title="Savvy AI @ CohesionIB"
              description="Led 3 end-to-end enterprise CRE implementations and built an MCP server integrating real-time building data into the Savvy AI platform, plus 20+ AI evaluation datasets powering 500+ evaluation experiments."
              role="Implementation/Technical Program Manager at CohesionIB (Apr 2026–Sep 2026), owning technical delivery across access control configuration, API/SSO integrations, and cross-functional coordination."
              approach="Built 15+ Databricks pipelines and an MCP server to replace static reporting with live, queryable building data, then shipped 4 client-facing AI capabilities including AI-generated portfolio insights and branded report exports. Built and maintained 20+ curated AI evaluation datasets covering real-world CRE use cases and edge cases."
              outcome="Reduced go-live time by 20% across 3 enterprise implementations and established standardized AI benchmarking across product iterations via 500+ evaluation experiments."
            />

            <CaseStudyCard
              icon={Brain}
              badges={[{ label: "Agentic AI" }, { label: "FinTech", variant: "outline" }]}
              title="Mycroft AI Workflow Platform"
              description="Led 0→1 development of Mycroft, an AI workflow platform for finance teams, reducing hallucination rate from 22% to 11% and improving autonomous task completion from 78% to 89%."
              role="AI Product Manager at Humanitarians AI (Jul 2025–Apr 2026), leading 0→1 product development for Mycroft and orchestrating multi-agent workflows for portfolio analytics, risk modeling, and financial statement intelligence."
              approach="Built an agent observability dashboard tracking 3 KPIs — task success, reasoning quality, and latency — to diagnose failure modes in financial query workflows and iterate on agent reasoning and guardrails."
              outcome="Cut AI hallucination rate from 22% to 11%, improved autonomous task completion from 78% to 89%, and maintained a 95% autonomous rate on production workflows."
            />

            <CaseStudyCard
              icon={Code}
              badges={[{ label: "ML Platform" }, { label: "B2B SaaS", variant: "outline" }]}
              title="JuliaHub AI Assistant"
              description="Retained $1.3M in ARR by shipping AI-powered code analysis APIs, and redesigned the onboarding flow to cut time-to-first-success by 70%."
              role="AI Product Manager Intern at JuliaHub Inc. (Aug 2024–Feb 2025), owning SDK integration requirements and the developer onboarding journey for a developer platform."
              approach="Validated SDK integration requirements through 25+ user interviews, redesigned the onboarding flow, and ran A/B tests across 4 features with 2,000+ users to raise experiment win rate."
              outcome="Retained $1.3M in ARR and cut enterprise churn from 8.4% to 6.0%, cut time-to-first-success from 3 hours to 45 minutes (70% faster) while growing MAUs by 20%, and raised experiment win rate from 18% to 29%."
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground text-lg">
              Measurable impact across AI product launches, team leadership, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border border-border bg-card hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  $5M+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Client Revenue Generated</div>
              </CardContent>
            </Card>

            <Card className="text-center border border-border bg-card hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Client Projects Delivered</div>
              </CardContent>
            </Card>

            <Card className="text-center border border-border bg-card hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  70%
                </div>
                <div className="text-sm text-muted-foreground font-medium">Faster Time-to-Onboard</div>
              </CardContent>
            </Card>

            <Card className="text-center border border-border bg-card hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground font-medium">AI Evaluation Experiments Run</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Career Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Implementation/Technical Program Manager - CohesionIB</div>
                  <div className="text-sm text-muted-foreground mb-2">April 2026 - September 2026</div>
                  <p className="text-sm text-muted-foreground">
                    Led 3 end-to-end enterprise CRE implementations and built an MCP server integrating real-time
                    building data into the Savvy AI platform, reducing go-live time by 20%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">AI Product Manager - Humanitarians AI</div>
                  <div className="text-sm text-muted-foreground mb-2">July 2025 - April 2026</div>
                  <p className="text-sm text-muted-foreground">
                    Led 0→1 development of Mycroft, an AI workflow platform for finance teams, reducing hallucination
                    rate from 22% to 11% and improving autonomous task completion from 78% to 89%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">AI Product Manager Intern - JuliaHub Inc.</div>
                  <div className="text-sm text-muted-foreground mb-2">August 2024 - February 2025</div>
                  <p className="text-sm text-muted-foreground">
                    Retained $1.3M in ARR shipping AI-powered code analysis APIs and redesigned onboarding, cutting
                    time-to-first-success by 70%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Product Manager Intern - MindFire Inc.</div>
                  <div className="text-sm text-muted-foreground mb-2">June 2024 - August 2024</div>
                  <p className="text-sm text-muted-foreground">
                    Built KPI dashboards and launched an AI chatbot for 9,000+ DAUs, reducing support tickets by 30%
                    and raising CSAT from 4.1 to 4.6/5.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Product Manager - Webvision Solution Ltd.</div>
                  <div className="text-sm text-muted-foreground mb-2">January 2022 - July 2023</div>
                  <p className="text-sm text-muted-foreground">
                    Led development of 6 SaaS products and managed a cross-functional team of 9, improving NPS from 47
                    to 63 and growing feature adoption from 31% to 56%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Co-Founder & Product Manager - GrowthCruise</div>
                  <div className="text-sm text-muted-foreground mb-2">September 2019 - January 2022</div>
                  <p className="text-sm text-muted-foreground">
                    Owned product strategy for 15+ client projects generating $5M+ in collective annual revenue,
                    scaling GrowthCruise 10X to $300K ARR within the first year.
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
            <Card className="group border border-border bg-card hover:shadow-md transition-all duration-300 cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-primary/5 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary">AgentLens</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">AI Observability</Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground font-medium">
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

            <Card className="group border border-border bg-card hover:shadow-md transition-all duration-300 cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-primary/5 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary">Molecular Nutrition AI</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">Health Tech</Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground font-medium">
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

            <Card className="group border border-border bg-card hover:shadow-md transition-all duration-300 cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-primary/5 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary">ConversaAI</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-primary-foreground border-0 font-medium">Voice AI</Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground font-medium">
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
              className="text-lg px-8 shadow-sm hover:shadow-md transition-all duration-300"
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
              asChild
            >
              <a href="https://calendly.com/snehshah/60min" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/snehshah74/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://github.com/snehshah74"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a
              href="mailto:snehshah741@gmail.com"
              className="p-4 border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
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
            © 2026 Sneh Shah.
          </p>
        </div>
      </footer>
    </div>
  )
}
