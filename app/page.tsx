import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative w-full py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Transforming Biomedical Data into
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent block mt-2">
                    Insights
                  </span>
                </h1>
                <div className="space-y-6">
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    As a Bioinformatics Data Scientist at DKFZ, I specialize in developing innovative solutions for precision oncology and pharmacogenomics. With over 5 years of experience in medical AI and bioinformatics, I bridge the gap between complex biological data and actionable clinical insights.
                  </p>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    My work focuses on building scalable pipelines for multi-omics data analysis, implementing machine learning solutions for clinical applications, and developing tools that empower healthcare professionals in making data-driven decisions. Through my research, I've successfully integrated AI-powered solutions into clinical workflows, directly impacting patient care and treatment strategies.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Button 
                    size="lg" 
                    className="bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/20 font-medium"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View CV
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-slate-200/20 bg-slate-900/50 text-slate-200 hover:bg-slate-800 hover:border-slate-200/40 hover:text-white transition-all duration-200 font-medium backdrop-blur-sm"
                  >
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Explore Projects
                  </Button>
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
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Explore My Work</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Discover my research contributions, technical projects, and insights in bioinformatics and precision
              oncology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CV Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200/60 bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-slate-100 to-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-slate-700" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">CV & Experience</CardTitle>
                <CardDescription className="text-sm">Professional journey in Bioinformatics and Data Science</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    Bioinformatics Data Scientist at DKFZ
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    PhD in Computational Oncology
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                    Visiting Researcher at Karolinska
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    5+ Years in Medical AI & Bioinformatics
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="text-xs bg-slate-100">Python</Badge>
                  <Badge className="text-xs bg-slate-100">R</Badge>
                  <Badge className="text-xs bg-slate-100">Machine Learning</Badge>
                  <Badge className="text-xs bg-slate-100">NGS Analysis</Badge>
                  <Badge className="text-xs bg-slate-100">Nextflow</Badge>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-slate-50 text-sm border-slate-300">
                  <FileText className="w-4 h-4 mr-2" />
                  View Full CV
                </Button>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200/60 bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-emerald-100 to-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <BarChart3 className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-700" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Research Projects</CardTitle>
                <CardDescription className="text-sm">
                  Pharmacogenomics pipelines and precision oncology tools
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    Pharmacogenomics Pipeline
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    Organ Tracking Algorithm
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    Clinical Data Science
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-emerald-50 text-sm border-slate-300 text-slate-700">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Explore Projects
                </Button>
              </CardContent>
            </Card>

            {/* Publications Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200/60 bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-100 to-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 text-blue-700" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Publications</CardTitle>
                <CardDescription className="text-sm">Academic publications and research contributions</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    PhD Thesis Research
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    Pharmacogenomics Studies
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    Clinical Applications
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-blue-50 text-sm border-slate-300">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Publications
                </Button>
              </CardContent>
            </Card>

            {/* Blog Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200/60 bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-100 to-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <PenTool className="w-6 sm:w-8 h-6 sm:h-8 text-purple-700" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">Articles & Blog</CardTitle>
                <CardDescription className="text-sm">
                  Insights on bioinformatics and computational biology
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    Nextflow Pipelines
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    Machine Learning
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    Clinical Workflows
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-purple-50 text-sm border-slate-300">
                  <PenTool className="w-4 h-4 mr-2" />
                  Read Articles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Collaborate</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in discussing research opportunities, collaborations, or consulting projects? I'd love to hear
            from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="mailto:spirmann95@gmail.com"
              className="inline-flex items-center justify-center"
            >
              <Button size="lg" className="bg-white text-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800/50">
              <FileText className="w-4 h-4 mr-2" />
              Download CV
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
          </div>

          <div className="mt-8 text-sm text-slate-400">
            <p>📍 Munich, Germany | 📧 spirmann95@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 sm:py-12">
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
