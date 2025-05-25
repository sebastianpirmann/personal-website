import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Database, BarChart3 } from "lucide-react"
import Link from "next/link"
import { BackToHome } from "@/components/Navigation"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <BackToHome />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Projects</h1>
          <div className="text-center mb-12">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore my data science and bioinformatics projects, featuring methodologies, results, and code repositories
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Database className="w-6 h-6 text-emerald-600 mr-3" />
                    <div>
                      <CardTitle>Pharmacogenomics Pipeline</CardTitle>
                      <CardDescription>DKFZ • Karolinska Institutet</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  A Nextflow pipeline for analyzing pharmacogenomic variants and predicting drug response in cancer
                  patients. Impacted treatment decisions for 800+ patients.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Nextflow</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">R</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
                <div className="flex space-x-3">
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <CardTitle>Real-time Organ Tracking Algorithm</CardTitle>
                      <CardDescription>C++ • Deep Learning</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Developed a real-time organ tracking algorithm using C++ and deep learning for improved radiotherapy
                  targeting.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Medical Imaging</Badge>
                </div>
                <div className="flex space-x-3">
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 - Example of adding another project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <CardTitle>ML Models for Pharmacogenomic Variants</CardTitle>
                      <CardDescription>Machine Learning • Genomics</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Developed and deployed machine learning models to predict the impact of pharmacogenomic variants on drug
                  efficacy and toxicity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                  <Badge variant="outline">Genomics</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
                <div className="flex space-x-3">
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
