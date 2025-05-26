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
      type: "Journal Article",
      url: "https://www.sciencedirect.com/science/article/pii/S0031699724116146"
    },
    {
      title: "APF2: an improved ensemble method for pharmacogenomic variant effect prediction",
      journal: "The Pharmacogenomics Journal",
      date: "27. May 2024",
      type: "Preprint",
      url: "https://www.nature.com/articles/s41397-024-00338-x"
    },
    {
      title: "Translating pharmacogenomic sequencing data into drug response predictions - how to interpret variants of unknown significance",
      journal: "British Journal of Clinical Pharmacology",
      date: "27. Sept. 2023",
      type: "Journal Article",
      url: "https://bpspubs.onlinelibrary.wiley.com/doi/full/10.1111/bcp.15915"
    },
    {
      title: "Spectral imaging enables contrast agent-free real-time ischemia monitoring in laparoscopic surgery",
      journal: "Science Advances",
      date: "10. Mar. 2023",
      type: "Journal Article",
      url: "https://www.science.org/doi/10.1126/sciadv.add6778"
    },
    {
      title: "Targeted therapy of advanced parathyroid carcinoma guided by genomic and transcriptomic profiling",
      journal: "Molecular Oncology",
      date: "19. Feb. 2023",
      type: "Journal Article",
      url: "https://febs.onlinelibrary.wiley.com/doi/full/10.1002/1878-0261.13398"
    },
    {
      title: "Gene expression-based prediction of pazopanib efficacy in sarcoma",
      journal: "Eur J Cancer",
      date: "25. Juni 2022",
      type: "Journal Article",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0959804922003045"
    },
    {
      title: "Video-rate multispectral imaging in laparoscopic surgery: First-in-human application",
      journal: "arXiv",
      date: "28. Mai 2021",
      type: "Preprint",
      url: "https://arxiv.org/abs/2105.13901"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Publications</h1>
          <div className="text-center mb-12">
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My contributionss to research in pharmacogenomics, precision oncology, and medical imaging.
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card key={index} className="border-l-4 border-white/20 bg-slate-800/50 backdrop-blur-sm hover:translate-y-[-4px] hover:translate-x-[-4px] transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.4)] hover:shadow-[12px_12px_24px_0px_rgba(0,0,0,0.5)]">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-white text-lg">{publication.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <BookOpen className="w-4 h-4" />
                          {publication.journal}
                          <Calendar className="w-4 h-4 ml-2" />
                          {publication.date}
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2 text-xs">
                      {publication.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" size="sm" className="text-sky-400 hover:text-sky-300" asChild>
                    <a href={publication.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>View Publication</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
