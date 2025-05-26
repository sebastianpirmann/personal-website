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
  Heart,
  Trophy,
  Medal,
} from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              <div className="space-y-8">
                {/* DKFZ Current Group */}
                <div className="relative">
                  <div className="absolute left-8 top-[60px] bottom-0 w-0.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg border border-white/20 mb-4 w-fit">
                    <Building2 className="w-5 h-5 text-white flex-shrink-0" />
                    <p className="font-medium">DKFZ German Cancer Research Center</p>
                  </div>
                  <div className="space-y-6 pl-16">
                    {/* Current Role */}
                    <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                      <CardHeader className="pb-2">
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
                        <div className="space-y-2">
                          <div className="text-sm text-slate-300">
                            <p>Computational Oncology Group</p>
                          </div>
                          <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Leading the development of machine learning models for drug response prediction in cancer therapy.
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Implementing cloud-based bioinformatics pipelines for multi-omics data analysis.
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* PhD Role */}
                    <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                      <CardHeader className="pb-2">
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
                        <div className="space-y-2">
                          <div className="text-sm text-slate-300">
                            <p>Computational Oncology Group</p>
                          </div>
                          <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Designed and implemented a fully automated pharmacogenomics pipeline (Nextflow, Docker) and integrated it into clinical workflows at DKFZ with application to over 800 cancer patients to date.
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Analyzed and integrated pharmacogenomic data from more than 2,500 cancer patients, uncovering tumor-specific activity of pharmacogenes for my PhD thesis.
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Contributed to several multi-omics analyses of rare cancers including parathyroid carcinomas, adrenocortical carcinomas, and chordomas.
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Karolinska Role */}
                <div className="relative">
                  <div className="absolute left-8 top-[60px] bottom-0 w-0.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg border border-white/20 mb-4 w-fit">
                    <Building2 className="w-5 h-5 text-white flex-shrink-0" />
                    <p className="font-medium">Karolinska Institutet</p>
                  </div>
                  <div className="pl-16">
                    <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                      <CardHeader className="pb-2">
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
                        <div className="space-y-2">
                          <div className="text-sm text-slate-300">
                            <p>Personalized Medicine and Drug Development Group</p>
                          </div>
                          <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Collaborated on international research project for pharmacogenomic variant effect prediction.
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* DKFZ Division Role */}
                <div className="relative">
                  <div className="absolute left-8 top-[60px] bottom-0 w-0.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg border border-white/20 mb-4 w-fit">
                    <Building2 className="w-5 h-5 text-white flex-shrink-0" />
                    <p className="font-medium">DKFZ German Cancer Research Center</p>
                  </div>
                  <div className="pl-16">
                    <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                      <CardHeader className="pb-2">
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
                        <div className="space-y-2">
                          <div className="text-sm text-slate-300">
                            <p>Division of Intelligent Medical Systems</p>
                          </div>
                          <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Researched and implemented classical and deep learning based models for real-time tissue tracking in laparoscopic imaging.
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Mint Medical Group */}
                <div className="relative">
                  <div className="absolute left-8 top-[60px] bottom-0 w-0.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-900/90 backdrop-blur-sm p-3 rounded-lg border border-white/20 mb-4 w-fit">
                    <Building2 className="w-5 h-5 text-white flex-shrink-0" />
                    <p className="font-medium">Mint Medical GmbH</p>
                  </div>
                  <div className="space-y-6 pl-16">
                    {/* Bachelor Student */}
                    <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                      <CardHeader className="pb-2">
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
                        <div className="space-y-2">
                          <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Developed C++ backend logic and Qt user interfaces for electronic case report forms in the mint lesion radiology software.
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Mint Medical Intern */}
                    <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                      <CardHeader className="pb-2">
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
                        <div className="space-y-2">
                          <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Developed features using C++/Qt and Java, including GUI development and software testing with focus on medical standards (RadLex, SNOMED)
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                              Worked with semantic technologies (OWL, RDF, SPARQL) and modern development tools (Git, CMake, Jira) in an agile environment
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Soft Skills */}
                <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm h-full hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
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
                <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm h-full hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center gap-2 text-lg">
                      <Code2 className="w-5 h-5 text-sky-400" />
                      Technical Skills
                    </CardTitle>
                    <CardContent className="pt-2 px-0">
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Programming and data processing (R, Python, C++, Bash, Nextflow)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Software development (Git, CI/CD, Docker, Scrum)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Development and Automation of pipelines in HPC environments (IBM LSF)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Basic experience in cloud computing (OpenStack)
                        </li>
                      </ul>
                    </CardContent>
                  </CardHeader>
                </Card>

                {/* Areas of Interest */}
                <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm h-full hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center gap-2 text-lg">
                      <Database className="w-5 h-5 text-sky-400" />
                      Areas of Interest
                    </CardTitle>
                    <CardContent className="pt-2 px-0">
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Advanced statistics, Machine Learning, and AI (Multivariate Regression, Random Forests, Neural Networks)
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Reserach on Cancer Genomics, Transcriptomics, Epi-/Pharmacogenomics
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Bioinformatics and Pipeline Development
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                          Biomedical Data integration and analytics
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
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                {/* PhD */}
                <Card className="border-l-4 border-white/50 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white">Ph.D. (Dr. rer. nat.) Bioinformatics</CardTitle>
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
                <Card className="border-l-4 border-white/50 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
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
                <Card className="border-l-4 border-white/50 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
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

            {/* Voluntary Work */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Voluntary Work</h2>
              </div>
              <div className="space-y-4">
                <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white">Board Member and Consultant</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        December 2024 - Present
                        <Building2 className="w-4 h-4 ml-2" />
                        DKFZ Consulting Club
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Awards & Honors */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Awards & Honors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                  <div className="text-white text-sm font-medium">Travel Scholarship (Stockholm)</div>
                  <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    April 2023
                    <Building2 className="w-3 h-3" />
                    HIDSS4Health
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                  <div className="text-white text-sm font-medium">CHILI GmbH Prize for Best Graduate</div>
                  <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    October 2020
                    <Building2 className="w-3 h-3" />
                    CHILI GmbH
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                  <div className="text-white text-sm font-medium">Company Scholarship</div>
                  <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    September 2018
                    <Building2 className="w-3 h-3" />
                    DÜRR DENTAL SE
                  </div>
                  <div className="text-slate-300 text-xs mt-1">
                    One-year scholarship for students in computer science
                  </div>
                </div>
              </div>
            </section>

            {/* Certificates and Courses */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                  <Medal className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Certificates and Courses</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 2024 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white mb-2">2024</h3>
                  <div className="space-y-2">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Helmholtz Summer School: From Data to Knowledge</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        September
                        <Building2 className="w-3 h-3" />
                        Helmholtz Information & Data Science Academy
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Google Advanced Data Analytics</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        August
                        <Building2 className="w-3 h-3" />
                        Google
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Management Consulting Specialization</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        August
                        <Building2 className="w-3 h-3" />
                        Emory University
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">DKFZ International PhD Program</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        July
                        <Building2 className="w-3 h-3" />
                        DKFZ
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Continuous Integration (CI)</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        June
                        <Building2 className="w-3 h-3" />
                        HIDA
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">HIDSS4Health PhD Program</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        June
                        <Building2 className="w-3 h-3" />
                        HIDSS4Health
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2022-2023 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white mb-2">2022-2023</h3>
                  <div className="space-y-2">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Effective Visual Communication of Science</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        January 2023
                        <Building2 className="w-3 h-3" />
                        Seyens
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Deep Learning with TensorFlow 2</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        November 2022
                        <Building2 className="w-3 h-3" />
                        365 Data Science
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Product Management for AI & Data Science</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        November 2022
                        <Building2 className="w-3 h-3" />
                        365 Data Science
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">SQL</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        November 2022
                        <Building2 className="w-3 h-3" />
                        365 Data Science
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2019-2021 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white mb-2">2019-2021</h3>
                  <div className="space-y-2">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">CCE Summer School in Translational Cancer Research</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        October 2021
                        <Building2 className="w-3 h-3" />
                        Cancer Core Europe
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Introduction to Genomic Technologies</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        September 2020
                        <Building2 className="w-3 h-3" />
                        Johns Hopkins University
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Neural Networks and Deep Learning</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        July 2020
                        <Building2 className="w-3 h-3" />
                        DeepLearning.AI
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">Data Science in Stratified Healthcare</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        July 2020
                        <Building2 className="w-3 h-3" />
                        University of Edinburgh
                      </div>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/20 hover:translate-y-[-2px] transition-all duration-300">
                      <div className="text-white text-sm font-medium">ZML Winter School on Machine Learning</div>
                      <div className="text-slate-400 text-xs mt-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        February 2019
                        <Building2 className="w-3 h-3" />
                        ZML
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
