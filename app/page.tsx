"use client"

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
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900">Dr. Sebastian Pirmann</h1>
                <p className="text-xs sm:text-sm text-slate-600">Bioinformatics Data Scientist at DKFZ</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/cv" className="text-slate-600 hover:text-slate-900 transition-colors">
                CV
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Projects
              </Link>
              <Link href="/publications" className="text-slate-600 hover:text-slate-900 transition-colors">
                Publications
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                Blog
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/cv" className="text-slate-600 hover:text-slate-900 transition-colors">
                  CV
                </Link>
                <Link href="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Projects
                </Link>
                <Link href="/publications" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Publications
                </Link>
                <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Blog
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-600 text-slate-100">
                    <Laptop className="w-3 h-3 mr-1" />
                    DKFZ Researcher
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-100">
                    <MapPin className="w-3 h-3 mr-1" />
                    Munich, Germany
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Transforming Biomedical Data into
                  <span className="text-emerald-400"> Insights</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Bioinformatics Data Scientist at DKFZ specializing in multi-omics data analysis, pharmacogenomics, and
                  precision oncology. Developing scalable pipelines that transform raw biomedical data into actionable
                  insights for clinicians.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <FileText className="w-4 h-4 mr-2" />
                  View CV
                </Button>
                <Button variant="outline" size="lg" className="border-slate-400 text-slate-900 bg-white hover:bg-slate-100">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Explore Projects
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <Link
                  href="https://www.linkedin.com/in/dr-sebastian-pirmann-a1bbb01b2"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:spirmann95@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Explore My Work</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Discover my research contributions, technical projects, and insights in bioinformatics and precision
              oncology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* CV Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                  <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-slate-700" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-slate-900">CV & Certifications</CardTitle>
                <CardDescription className="text-sm">Professional experience and technical certifications</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                    PhD Bioinformatics (1.1)
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    DKFZ Data Scientist
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                    AWS Certified Solutions Architect
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                    Google Cloud Professional Data Engineer
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-slate-50 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  View Full CV & Certificates
                </Button>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
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
                <Button variant="outline" className="w-full group-hover:bg-emerald-50 text-sm">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Explore Projects
                </Button>
              </CardContent>
            </Card>

            {/* Publications Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
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
                <Button variant="outline" className="w-full group-hover:bg-blue-50 text-sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Publications
                </Button>
              </CardContent>
            </Card>

            {/* Blog Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
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
                <Button variant="outline" className="w-full group-hover:bg-purple-50 text-sm">
                  <PenTool className="w-4 h-4 mr-2" />
                  Read Articles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Highlighting key projects that demonstrate innovative approaches to clinical bioinformatics and precision
              oncology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Featured Project 1 */}
            <Card className="overflow-hidden border-slate-200">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 sm:p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <Badge variant="secondary" className="bg-emerald-400 text-emerald-900 mb-2">
                      Clinical Pipeline
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold">Pharmacogenomics Pipeline</h3>
                  </div>
                  <Database className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Fully automated pharmacogenomics pipeline integrated into clinical workflows at DKFZ, successfully
                  applied to over 800 cancer patients for precision oncology applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Nextflow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    R
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button size="sm" className="text-xs">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Project 2 */}
            <Card className="overflow-hidden border-slate-200">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 sm:p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <Badge variant="secondary" className="bg-blue-400 text-blue-900 mb-2">
                      AI Surgery
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold">Real-time Organ Tracking</h3>
                  </div>
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Deep learning algorithm for real-time organ tracking during kidney surgery, successfully integrated
                  into AI-system and applied during surgeries at University Hospital Karlsruhe.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Deep Learning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Computer Vision
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Clinical AI
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button size="sm" className="text-xs">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <FileText className="w-4 h-4 mr-2" />
                    Press Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Consulting Projects</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Selected consulting projects where I helped organizations solve complex technical challenges
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Project 1 */}
            <Card className="overflow-hidden border-slate-200">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 sm:p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <Badge variant="secondary" className="bg-blue-400 text-blue-900 mb-2">
                      Data Pipeline
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold">Healthcare Data Integration</h3>
                  </div>
                  <Database className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Developed an automated data pipeline for a healthcare provider to integrate patient records from multiple sources.
                  Improved data processing efficiency by 60% and reduced manual data entry errors.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="text-xs">Python</Badge>
                  <Badge className="text-xs">Apache Airflow</Badge>
                  <Badge className="text-xs">PostgreSQL</Badge>
                  <Badge className="text-xs">Docker</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden border-slate-200">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 sm:p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <Badge variant="secondary" className="bg-purple-400 text-purple-900 mb-2">
                      Machine Learning
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold">Predictive Analytics System</h3>
                  </div>
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Built a machine learning system for a biotech company to predict experiment outcomes based on historical data.
                  Reduced failed experiments by 40% and saved significant research time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="text-xs">TensorFlow</Badge>
                  <Badge className="text-xs">scikit-learn</Badge>
                  <Badge className="text-xs">AWS</Badge>
                  <Badge className="text-xs">MLflow</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-slate-300 mb-6 text-sm sm:text-lg">
                  Let's discuss how we can work together on your next technical challenge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-400 text-slate-100 hover:bg-slate-700">
                    <FileText className="w-4 h-4 mr-2" />
                    View More Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in discussing research opportunities, collaborations, or consulting projects? I'd love to hear
            from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-slate-400 text-slate-100 hover:bg-slate-800">
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
      <footer className="bg-slate-800 text-slate-300 py-6 sm:py-8">
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
