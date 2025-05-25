import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Briefcase,
  Download,
  MapPin,
  Calendar,
  Building2,
  Beaker,
  Brain,
  Code2,
  Database,
  GitBranch,
  Microscope,
  Server,
  Dna,
} from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              ← Back to Home
            </Link>
            <Button className="bg-slate-900 hover:bg-slate-800">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Curriculum Vitae</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Bioinformatics Data Scientist with expertise in Machine Learning, NGS Analysis, and Medical AI
            </p>
          </div>

          {/* Professional Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-emerald-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              {/* Current Role */}
              <Card className="border-l-4 border-emerald-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Dna className="w-5 h-5 text-emerald-700" />
                    </div>
                    Bioinformatics Data Scientist
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      June 2024 - Present
                      <MapPin className="w-4 h-4 ml-2 text-emerald-600" />
                      Munich, Germany
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-600" />
                      <p>DKFZ German Cancer Research Center - Computational Oncology Group</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Bioinformatics</Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">Machine Learning</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">Data Science</Badge>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">R</Badge>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Python</Badge>
                      <Badge variant="secondary" className="bg-red-100 text-red-700">Bash</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* PhD Role */}
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Beaker className="w-5 h-5 text-blue-700" />
                    </div>
                    Bioinformatician / PhD Researcher
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      September 2020 - June 2024
                      <MapPin className="w-4 h-4 ml-2 text-blue-600" />
                      Heidelberg, Germany
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-600" />
                      <p>DKFZ German Cancer Research Center - Computational Oncology Group</p>
                    </div>
                    <p className="text-slate-600 pl-6">Doctoral Researcher in DKFZ PhD Program and HIDSS4Health</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">NGS Data Analysis</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">Machine Learning</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Nextflow</Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">CI/CD</Badge>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">Pharmacogenomics</Badge>
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">Multi-Omics</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Karolinska Role */}
              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Microscope className="w-5 h-5 text-purple-700" />
                    </div>
                    Visiting PhD Researcher
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      April 2023 - June 2023
                      <MapPin className="w-4 h-4 ml-2 text-purple-600" />
                      Stockholm, Sweden
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-600" />
                      <p>Karolinska Institutet - Personalized Medicine and Drug Development Group</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">NGS Data Analysis</Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">Machine Learning</Badge>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">Pharmacogenomics</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Assistant */}
              <Card className="border-l-4 border-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Brain className="w-5 h-5 text-yellow-700" />
                    </div>
                    Research Assistant / Master Student
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-yellow-600" />
                      September 2019 - April 2020
                      <MapPin className="w-4 h-4 ml-2 text-yellow-600" />
                      Heidelberg, Germany
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-600" />
                      <p>DKFZ German Cancer Research Center - Division of Intelligent Medical Systems</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Computer Vision</Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">PyTorch</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">Deep Learning</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">OpenCV</Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">Medical Imaging</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mint Medical */}
              <Card className="border-l-4 border-slate-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <Code2 className="w-5 h-5 text-slate-700" />
                    </div>
                    Software Developer
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-600" />
                      August 2016 - February 2017
                      <MapPin className="w-4 h-4 ml-2 text-slate-600" />
                      Heidelberg, Germany
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-600" />
                      <p>Mint Medical</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">C++</Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">Scrum</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Agile Development</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">Software Documentation</Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">Quality Assurance</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
