import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Download, MapPin, Calendar } from "lucide-react"
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
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-slate-600">Dr. Sebastian Pirmann - Data Scientist & Bioinformatician</p>
        </div>

        {/* Education Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-lg">PhD in Bioinformatics (1.1)</h3>
              <p className="text-slate-600">LMU Munich & DKFZ Heidelberg</p>
              <div className="flex items-center text-sm text-slate-500 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                2016 - 2020
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                Heidelberg & Munich, Germany
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">M.Sc. in Medical Informatics (1.1)</h3>
              <p className="text-slate-600">Heilbronn University</p>
              <div className="flex items-center text-sm text-slate-500 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                2013 - 2015
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                Heilbronn, Germany
              </div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">B.Sc. in Medical Engineering (1.3)</h3>
              <p className="text-slate-600">Duale Hochschule Baden-Württemberg</p>
              <div className="flex items-center text-sm text-slate-500 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                2010 - 2013
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                Heilbronn, Germany
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-lg">Postdoctoral Researcher</h3>
              <p className="text-slate-600">German Cancer Research Center (DKFZ)</p>
              <div className="flex items-center text-sm text-slate-500 mt-1 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                2020 - 2022
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                Heidelberg, Germany
              </div>
              <p className="text-sm text-slate-600">
                Developed and applied novel machine learning methods for the analysis of high-dimensional omics data in
                the context of cancer research.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">Visiting Researcher</h3>
              <p className="text-slate-600">Karolinska Institutet</p>
              <div className="flex items-center text-sm text-slate-500 mt-1 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                2018 - 2018
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                Stockholm, Sweden
              </div>
              <p className="text-sm text-slate-600">
                Conducted research on the integration of clinical and genomic data for improved cancer diagnostics.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">Software Engineer</h3>
              <p className="text-slate-600">Mint Medical GmbH</p>
              <div className="flex items-center text-sm text-slate-500 mt-1 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                2015 - 2016
                <MapPin className="w-4 h-4 ml-4 mr-1" />
                Heidelberg, Germany
              </div>
              <p className="text-sm text-slate-600">
                Developed software solutions for medical image analysis and reporting.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">R</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">C++</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Software Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">CI/CD</Badge>
                  <Badge variant="outline">Cloud Computing (AWS)</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Multi-Omics Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">Transcriptomics</Badge>
                  <Badge variant="outline">Proteomics</Badge>
                  <Badge variant="outline">Metabolomics</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Bioinformatics Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Bioconductor</Badge>
                  <Badge variant="outline">GATK</Badge>
                  <Badge variant="outline">Nextflow</Badge>
                  <Badge variant="outline">Machine Learning Libraries</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-center text-sm text-slate-500">
          <MapPin className="w-4 h-4 inline-block mr-1" />
          Munich, Germany
        </div>
      </div>
    </div>
  )
}
