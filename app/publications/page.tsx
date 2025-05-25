import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, ExternalLink } from "lucide-react"
import { BackToHome } from "@/components/Navigation"

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
      date: "27. May 2024",
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
      date: "10. Mar. 2023",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <BackToHome />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Publications</h1>
          <div className="text-center mb-12">
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My research contributions in pharmacogenomics, precision oncology, and medical imaging
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-800 bg-transparent backdrop-blur-sm">
                <CardContent className="p-3">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-0.5 flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {pub.date && (
                            <Badge variant="outline" className="text-slate-400 border-slate-700 text-xs py-0">
                              <Calendar className="w-3 h-3 mr-1" />
                              {pub.date}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-base font-semibold text-slate-200 leading-snug">{pub.title}</h3>
                        {pub.journal && (
                          <p className="text-slate-400 flex items-center text-sm">
                            <BookOpen className="w-3 h-3 mr-1.5 text-slate-500" />
                            {pub.journal}
                          </p>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="text-xs border-slate-700 text-slate-900 hover:text-slate-200 hover:bg-slate-800 ml-4 shrink-0 bg-slate-200/10">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
