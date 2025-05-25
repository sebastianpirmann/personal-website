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
  Award,
} from "lucide-react"
import Link from "next/link"
import { BackToHome } from "@/components/Navigation"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <BackToHome />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full">
                <img
                  src="/images/profile_image.png"
                  alt="Dr. Sebastian Pirmann"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Bioinformatics Data Scientist with expertise in Pipeline Development, Omics-Data Analysis, Machine Learning, and AI
              </p>
            </div>

            {/* Professional Experience */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              <div className="space-y-6">
                {/* Current Role */}
                <Card className="border-l-4 border-blue-600 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Bioinformatics Data Scientist</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        June 2024 - Present
                        <MapPin className="w-4 h-4 ml-2" />
                        Munich, Germany
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <p>DKFZ German Cancer Research Center - Computational Oncology Group</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Bioinformatics</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Machine Learning</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Data Science</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* PhD Role */}
                <Card className="border-l-4 border-blue-600 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Bioinformatician / PhD Researcher</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        September 2020 - June 2024
                        <MapPin className="w-4 h-4 ml-2" />
                        Heidelberg, Germany
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <p>DKFZ German Cancer Research Center - Computational Oncology Group</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">NGS Data Analysis</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Machine Learning</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Nextflow</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Karolinska Role */}
                <Card className="border-l-4 border-red-900 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Visiting PhD Researcher</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        April 2023 - June 2023
                        <MapPin className="w-4 h-4 ml-2" />
                        Stockholm, Sweden
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <p>Karolinska Institutet - Personalized Medicine and Drug Development Group</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">NGS Data Analysis</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Machine Learning</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Pharmacogenomics</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Research Assistant */}
                <Card className="border-l-4 border-blue-600 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Research Assistant / Master Student</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        September 2019 - April 2020
                        <MapPin className="w-4 h-4 ml-2" />
                        Heidelberg, Germany
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <p>DKFZ German Cancer Research Center - Division of Intelligent Medical Systems</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Computer Vision</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">PyTorch</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Deep Learning</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">OpenCV</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bachelor Student */}
                <Card className="border-l-4 border-emerald-600 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Working Student (Bachelor Thesis)</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        September 2017 - March 2018
                        <MapPin className="w-4 h-4 ml-2" />
                        Heidelberg, Germany
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <p>Mint Medical GmbH</p>
                      </div>
                      <div className="text-sm text-slate-300 space-y-2">
                        <p>Bachelor thesis project in medical software development</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">C++</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Medical Software</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Software Development</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mint Medical Intern */}
                <Card className="border-l-4 border-emerald-600 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Software Development Intern</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        August 2016 - February 2017
                        <MapPin className="w-4 h-4 ml-2" />
                        Heidelberg, Germany
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <p>Mint Medical GmbH</p>
                      </div>
                      <div className="text-sm text-slate-300 space-y-2">
                        <p>Implementing C++ components in the mint lesion radiology software using Scrum methodology</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">C++</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Scrum</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Agile Development</Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-white border-white">Radiology Software</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Soft Skills */}
                <Card className="border-l-4 border-sky-600 bg-slate-900/50 backdrop-blur-sm h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center gap-2 text-lg">
                      <Brain className="w-5 h-5 text-sky-400" />
                      Professional Skills
                    </CardTitle>
                    <CardContent className="pt-2 px-0">
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Problem-solving and analytical thinking
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Interdisciplinary collaboration and effective communication
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Leadership, project and team management
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Resilience and adaptability
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Continuous learning & mentoring
                        </li>
                      </ul>
                    </CardContent>
                  </CardHeader>
                </Card>

                {/* Technical Skills */}
                <Card className="border-l-4 border-blue-600 bg-slate-900/50 backdrop-blur-sm h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center gap-2 text-lg">
                      <Code2 className="w-5 h-5 text-blue-400" />
                      Technical Skills
                    </CardTitle>
                    <CardContent className="pt-2 px-0">
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-blue-400 mt-2" />
                          Programming and data processing (R, Python, C++, Bash, Nextflow)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-blue-400 mt-2" />
                          Software development (Git, CI/CD, Docker, Scrum)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-blue-400 mt-2" />
                          Automation of pipelines in HPC environments (IBM LSF)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-blue-400 mt-2" />
                          Basic experience in cloud computing (OpenStack)
                        </li>
                      </ul>
                    </CardContent>
                  </CardHeader>
                </Card>

                {/* Data Science Skills */}
                <Card className="border-l-4 border-purple-600 bg-slate-900/50 backdrop-blur-sm h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center gap-2 text-lg">
                      <Database className="w-5 h-5 text-purple-400" />
                      Data Science
                    </CardTitle>
                    <CardContent className="pt-2 px-0">
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                          Multi-Omics Data integration and analytics
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                          Genomics, Transcriptomics, Epi-/Pharmacogenomics
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                          Machine learning and AI models
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                          Advanced statistics (Multivariate Regression, Random Forests, Neural Networks)
                        </li>
                      </ul>
                    </CardContent>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                {/* PhD */}
                <Card className="border-l-4 border-white/50 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white">Ph.D. (Dr. rer. nat.) in Bioinformatics</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        2020 - 2024
                        <Building2 className="w-4 h-4 ml-2" />
                        Heidelberg University
                        <Award className="w-4 h-4 ml-2" />
                        Grade: 1.1
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Masters */}
                <Card className="border-l-4 border-white/50 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white">M.Sc. Medical Informatics</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        2018 - 2020
                        <Building2 className="w-4 h-4 ml-2" />
                        Heidelberg University
                        <Award className="w-4 h-4 ml-2" />
                        Grade: 1.1
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Bachelors */}
                <Card className="border-l-4 border-white/50 bg-slate-900/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white">B.Sc. Medical Engineering</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        2014 - 2018
                        <Building2 className="w-4 h-4 ml-2" />
                        Technische Hochschule Mannheim
                        <Award className="w-4 h-4 ml-2" />
                        Grade: 1.3
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
