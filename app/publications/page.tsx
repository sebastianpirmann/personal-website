"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, ExternalLink } from "lucide-react"

export default function PublicationsPage() {
  const publications = [
    {
      title: "Innovation in cancer pharmacotherapy through integrative consideration of germline and tumor genomes",
      journal: "Pharmacological Reviews",
      date: "15. Okt. 2024",
      type: "Journal Article"
    },
    {
      title: "APF2: an improved ensemble method for pharmacogenomic variant effect prediction",
      journal: "",
      date: "",
      type: "Preprint"
    },
    {
      title: "Translating pharmacogenomic sequencing data into drug response predictions - how to interpret variants of unknown significance",
      journal: "British Journal of Clinical Pharmacology",
      date: "27. Sept. 2023",
      type: "Journal Article"
    },
    {
      title: "Spectral imaging enables contrast agent-free real-time ischemia monitoring in laparoscopic surgery",
      journal: "Science Advances",
      date: "10. März 2023",
      type: "Journal Article"
    },
    {
      title: "Targeted therapy of advanced parathyroid carcinoma guided by genomic and transcriptomic profiling",
      journal: "Molecular Oncology",
      date: "19. Feb. 2023",
      type: "Journal Article"
    },
    {
      title: "Gene expression-based prediction of pazopanib efficacy in sarcoma",
      journal: "Eur J Cancer",
      date: "25. Juni 2022",
      type: "Journal Article"
    },
    {
      title: "Video-rate multispectral imaging in laparoscopic surgery: First-in-human application",
      journal: "arXiv",
      date: "28. Mai 2021",
      type: "Preprint"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Research publications in pharmacogenomics, precision oncology, and medical imaging
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200/60 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                          {pub.type}
                        </Badge>
                        {pub.date && (
                          <Badge variant="outline" className="text-slate-500 border-slate-200">
                            <Calendar className="w-3 h-3 mr-1" />
                            {pub.date}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">{pub.title}</h3>
                      {pub.journal && (
                        <p className="text-slate-600 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-slate-400" />
                          {pub.journal}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs border-slate-300">
                      <ExternalLink className="w-3 h-3 mr-1.5" />
                      View Publication
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
