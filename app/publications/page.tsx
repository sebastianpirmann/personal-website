import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic publications, journal articles, and conference papers in computational biology and bioinformatics
          </p>
        </div>

        <div className="space-y-6">
          {/* Publication 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    Machine learning approaches for identifying drug repurposing opportunities in rare diseases
                  </CardTitle>
                  <CardDescription className="mt-2">
                    <span className="font-medium">Nature Biotechnology</span> • 2024 • Impact Factor: 68.2
                  </CardDescription>
                </div>
                <Badge variant="secondary">Featured</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                This study presents a novel machine learning framework for systematic identification of drug repurposing
                opportunities...
              </p>
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                Published: March 2024
                <TrendingUp className="w-4 h-4 ml-4 mr-1" />
                Citations: 45
              </div>
              <div className="flex space-x-3">
                <Button size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read Paper
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Abstract
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Publication 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                Integrative analysis of multi-omics data reveals novel biomarkers for cancer prognosis
              </CardTitle>
              <CardDescription className="mt-2">
                <span className="font-medium">Bioinformatics</span> • 2023 • Impact Factor: 6.9
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                We developed an integrative computational framework that combines genomics, transcriptomics, and
                proteomics data...
              </p>
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                Published: November 2023
                <TrendingUp className="w-4 h-4 ml-4 mr-1" />
                Citations: 23
              </div>
              <div className="flex space-x-3">
                <Button size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read Paper
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Abstract
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
