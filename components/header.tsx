"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-[#1A1A1A] backdrop-blur-md transition-all duration-200",
        isScrolled ? "bg-[#0F0F0F]/90" : "bg-[#0F0F0F]/80",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text font-poppins">NFTMarket</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/explore"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith("/explore") ? "text-white" : "text-white/70 hover:text-white",
              )}
            >
              Explore
            </Link>
            <Link
              href="/top-nfts"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith("/top-nfts") ? "text-white" : "text-white/70 hover:text-white",
              )}
            >
              Top NFTs
            </Link>
            <Link
              href="/create-collection"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith("/create-collection") ? "text-white" : "text-white/70 hover:text-white",
              )}
            >
              Create
            </Link>
            <Link
              href="/help-center"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith("/help-center") ? "text-white" : "text-white/70 hover:text-white",
              )}
            >
              Help Center
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
            <Input
              type="search"
              placeholder="Search items, collections..."
              className="w-[240px] pl-9 bg-[#1A1A1A] border-none rounded-full h-9 focus-visible:ring-primary"
            />
          </div>
          <Link href="/create-item">
            <Button variant="outline" size="sm" className="border-primary text-white hover:bg-primary/10">
              <Plus className="h-4 w-4 mr-1" />
              Create
            </Button>
          </Link>
          <Link href="/wallet">
            <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
              Connect Wallet
            </Button>
          </Link>
        </div>
        <button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-[#0F0F0F] border-b border-[#1A1A1A] md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
        )}
      >
        <div className="container px-4 py-4 flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
            <Input
              type="search"
              placeholder="Search items, collections..."
              className="w-full pl-9 bg-[#1A1A1A] border-none rounded-full h-9"
            />
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              href="/explore"
              className="px-4 py-2 text-sm font-medium hover:bg-[#1A1A1A] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/top-nfts"
              className="px-4 py-2 text-sm font-medium hover:bg-[#1A1A1A] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Top NFTs
            </Link>
            <Link
              href="/create-collection"
              className="px-4 py-2 text-sm font-medium hover:bg-[#1A1A1A] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <Link
              href="/help-center"
              className="px-4 py-2 text-sm font-medium hover:bg-[#1A1A1A] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Help Center
            </Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Link href="/create-item" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-1" />
                Create
              </Button>
            </Link>
            <Link href="/wallet" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full border-primary text-white hover:bg-primary/10">
                Connect Wallet
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
