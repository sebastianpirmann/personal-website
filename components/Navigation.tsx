import Link from "next/link"
import { MoveLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToHome() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <Link href="/">
        <Button 
          variant="outline" 
          className="bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm group"
        >
          <MoveLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Home
        </Button>
      </Link>
    </nav>
  )
} 