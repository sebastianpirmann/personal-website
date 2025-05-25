import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Articles & Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Insights on programming, bioinformatics, research methodologies, and the latest developments in
            computational biology
          </p>
        </div>

        <div className="space-y-8">
          {/* Blog Post 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="outline" className="mb-2">
                    Python
                  </Badge>
                  <CardTitle className="text-xl">
                    Getting Started with Python for Bioinformatics: A Comprehensive Guide
                  </CardTitle>
                  <CardDescription className="mt-2">
                    A beginner-friendly introduction to using Python for biological data analysis and computational
                    biology tasks.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                March 15, 2024
                <Clock className="w-4 h-4 ml-4 mr-1" />8 min read
              </div>
              <p className="text-slate-600 mb-4">
                Python has become the go-to language for bioinformatics due to its simplicity and powerful libraries. In
                this comprehensive guide, we'll explore the essential Python tools and techniques...
              </p>
              <Button variant="outline">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Blog Post 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="outline" className="mb-2">
                    Machine Learning
                  </Badge>
                  <CardTitle className="text-xl">
                    Machine Learning in Drug Discovery: Current Trends and Future Directions
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Exploring how artificial intelligence is revolutionizing pharmaceutical research and drug
                    development processes.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                February 28, 2024
                <Clock className="w-4 h-4 ml-4 mr-1" />
                12 min read
              </div>
              <p className="text-slate-600 mb-4">
                The pharmaceutical industry is experiencing a paradigm shift with the integration of machine learning
                technologies. From target identification to clinical trial optimization...
              </p>
              <Button variant="outline">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
