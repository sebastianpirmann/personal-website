import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Database, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Projects</h1>
          <div className="text-center mb-12">
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore my data science and bioinformatics projects, featuring methodologies, results, and code repositories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* APF2 Project */}
            <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-sky-400 border-sky-800">Machine Learning</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href="https://github.com/spirmann/apf2" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href="https://www.nature.com/articles/s41397-024-00338-x" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">External Link</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-white">APF2: Pharmacogenomic Variant Effect Prediction</CardTitle>
                <CardDescription>An improved ensemble method for predicting the functional impact of pharmacogenomic variants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                    Developed a novel machine learning ensemble that combines multiple variant effect prediction tools
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                    Achieved state-of-the-art performance in predicting functional effects of pharmacogenomic variants
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-sky-400 mt-2" />
                    Implemented as a Python package with comprehensive documentation and example notebooks
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PGx Pipeline Project */}
            <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-emerald-400 border-emerald-800">Pipeline Development</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href="https://github.com/spirmann/pgx-pipeline" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-white">Clinical Pharmacogenomics Pipeline</CardTitle>
                <CardDescription>Automated analysis pipeline for pharmacogenomic variant detection and interpretation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-emerald-400 mt-2" />
                    Built a Nextflow-based pipeline for processing genomic data and detecting pharmacogenomic variants
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-emerald-400 mt-2" />
                    Integrated multiple variant callers and annotation tools for comprehensive analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-emerald-400 mt-2" />
                    Successfully deployed in clinical setting, processing over 800 patient samples
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancer Multi-Omics Project */}
            <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-purple-400 border-purple-800">Data Analysis</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href="https://github.com/spirmann/cancer-multiomics" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-white">Cancer Multi-Omics Integration</CardTitle>
                <CardDescription>Comprehensive analysis of genomic, transcriptomic, and clinical data in rare cancers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                    Analyzed multi-omics data from parathyroid carcinomas and adrenocortical carcinomas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                    Developed R scripts for integrative analysis and visualization
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-purple-400 mt-2" />
                    Identified novel therapeutic targets and biomarkers
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Drug Response Prediction */}
            <Card className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-amber-400 border-amber-800">Machine Learning</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href="https://github.com/spirmann/drug-response" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-white">Drug Response Prediction</CardTitle>
                <CardDescription>Machine learning models for predicting patient response to targeted therapies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-amber-400 mt-2" />
                    Developed predictive models using gene expression and clinical data
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-amber-400 mt-2" />
                    Implemented in Python using scikit-learn and TensorFlow
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full w-1.5 h-1.5 bg-amber-400 mt-2" />
                    Validated models on independent patient cohorts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
