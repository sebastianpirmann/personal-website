import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"
import {
  User,
  FileText,
  FolderOpen,
  BookOpen,
  PenTool,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Database,
  BarChart3,
  Laptop,
  Code,
  GraduationCap,
  Award,
  Menu,
  X,
  MapPin,
  Users,
  Brain,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "./components/Navigation"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Dr. Sebastian Pirmann | Bioinformatics Data Scientist",
  description: "Personal website of Dr. Sebastian Pirmann, a Bioinformatics Data Scientist specializing in precision oncology and pharmacogenomics.",
  openGraph: {
    title: "Dr. Sebastian Pirmann | Bioinformatics Data Scientist",
    description: "Personal website of Dr. Sebastian Pirmann, a Bioinformatics Data Scientist specializing in precision oncology and pharmacogenomics.",
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        
        {/* DNA Helix Background */}
        <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-[url('/dna-helix.svg')] bg-no-repeat bg-contain opacity-5"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute left-0 bottom-20 w-[500px] h-[500px] bg-[url('/neural-network.svg')] bg-no-repeat bg-contain opacity-5"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative w-full py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-center">
                  Transforming Biomedical Data into Insights
                </h2>
                <div className="space-y-6 text-justify">
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    As a Bioinformatics Data Scientist at DKFZ, I'm passionate about developing cutting-edge solutions for research in oncology and pharmacogenomics. Over the past 4 years, I've had the opportunity to work at the intersection of bioinformatics and oncology, translating biological data into insights.
                  </p>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    My projects involve building pipelines for processing multi-omics data and applying data science and machine learning methods. It's incredibly rewarding to see how research contributes directly to patient care.
                  </p>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    Beyond my research, as a Board Member and Consultant for the DKFZ Life Science Consulting Club, I help our clients navigate scientific challenges and achieve their strategic goals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/cv">
                    <Button 
                      size="lg" 
                      className="bg-sky-600 text-white hover:bg-sky-700 transition-all duration-200 shadow-lg shadow-sky-500/20 font-medium w-full sm:w-auto"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View CV
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button 
                      size="lg" 
                      className="bg-sky-600 text-white hover:bg-sky-700 transition-all duration-200 shadow-lg shadow-sky-500/20 font-medium w-full sm:w-auto"
                    >
                      <FolderOpen className="w-4 h-4 mr-2" />
                      Explore Projects
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center space-x-6 justify-center pt-2">
                  <Link
                    href="https://www.linkedin.com/in/dr-sebastian-pirmann-a1bbb01b2"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:spirmann95@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://github.com/sebastianpirmann"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Overview */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Data Flow Pattern Background */}
        <div className="absolute inset-0 bg-[url('/data-flow.svg')] bg-repeat opacity-[0.02]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Explore My Work</h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
              Discover my research work and technical projects
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CV Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-sky-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white">CV & Experience</CardTitle>
                <CardDescription className="text-sm text-slate-400"></CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    4+ Years in Bioinformatics, Data Science, and AI
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    PhD in Bioinformatics from Heidelberg University
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Professional Training through DKFZ and HIDSS4Health PhD Programs
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-slate-900/80 group-hover:bg-slate-800 text-sm border-slate-700 text-slate-100 hover:text-white hover:bg-slate-800/80 transition-all duration-200">
                  <Link href="/cv" className="flex items-center justify-center w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    View Full CV
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <BarChart3 className="w-6 sm:w-8 h-6 sm:h-8 text-sky-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white">Projects</CardTitle>
                <CardDescription className="text-sm text-slate-400"></CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Biomedical Data Science and Pipeline Engineering
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Data Analysis in Clinical Trials
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Pharmacogenomics and PrecisionOncology
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-sky-950/80 group-hover:bg-sky-900/80 text-sm border-sky-800 text-sky-200 hover:text-sky-100 hover:bg-sky-900 hover:border-sky-700 transition-all duration-200">
                  <Link href="/projects" className="flex items-center justify-center w-full">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Explore Projects
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Publications Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white">Publications</CardTitle>
                <CardDescription className="text-sm text-slate-400">Academic publications and research contributions</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Pharmacogenomics Research
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Omics Analyses of Rare Cancers
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-blue-950/80 group-hover:bg-blue-900/80 text-sm border-blue-800 text-blue-200 hover:text-blue-100 hover:bg-blue-900 hover:border-blue-700 transition-all duration-200">
                  <Link href="/publications" className="flex items-center justify-center w-full">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Publications
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Blog Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-slate-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white">Consulting</CardTitle>
                <CardDescription className="text-sm text-slate-400">
                  My work as a Board Member and Consultant for the DKFZ Life Science Consulting Club
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Familymind.AI
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Sustainability in Life Scince and Publishing
                  </div>
                  <div className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-slate-300 rounded-full mr-3 flex-shrink-0"></div>
                    Technical Advisory
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-slate-900/80 group-hover:bg-slate-800/80 text-sm border-slate-700 text-slate-200 hover:text-slate-100 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200">
                  <Users className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Collaborate</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in discussing research opportunities, collaborations, or consulting projects? I'd love to hear
            from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-sky-600 text-white hover:bg-sky-700 transition-all duration-200 w-full sm:w-[200px]"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/dr-sebastian-pirmann-a1bbb01b2"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:spirmann95@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/sebastianpirmann"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>

          <div className="mt-8 text-sm text-slate-400">
            <p>📍 Munich, Germany | 📧 spirmann95@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2024 Dr. Sebastian Pirmann. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
