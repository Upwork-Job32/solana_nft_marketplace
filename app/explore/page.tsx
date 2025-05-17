"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ChevronDown, Grid3X3, LayoutGrid, Filter } from "lucide-react"
import NFTCard from "@/components/nft-card"
import { cn } from "@/lib/utils"

// Mock data
const nfts = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `Cosmic Perspective #${i + 31}`,
  image: "/placeholder.svg?height=400&width=400",
  price: (Math.random() * 3 + 0.5).toFixed(2),
  currency: "ETH",
  creator: {
    name: `creator${i + 1}`,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  likes: Math.floor(Math.random() * 300) + 50,
}))

const categories = ["All", "Art", "Collectibles", "Photography", "Music", "Video", "Virtual Worlds"]

export default function ExplorePage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 10])
  const [showFilters, setShowFilters] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setShowFilters(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold font-poppins">Explore NFTs</h1>
          <p className="text-white/70 max-w-3xl">
            Browse through thousands of unique digital collectibles. Find your next favorite NFT.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="overflow-x-auto">
              <TabsList className="bg-[#1A1A1A] p-1 overflow-x-auto flex-nowrap md:flex-wrap min-w-max">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category.toLowerCase()}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="flex gap-2">
              {isMobile && (
                <Button
                  variant="outline"
                  className={cn("border-[#2A2A2A]", showFilters && "bg-primary/20")}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                className={`border-[#2A2A2A] ${view === "grid" ? "bg-primary/20" : ""}`}
                onClick={() => setView("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`border-[#2A2A2A] ${view === "list" ? "bg-primary/20" : ""}`}
                onClick={() => setView("list")}
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Filters */}
            <div
              className={`md:col-span-1 space-y-6 bg-[#1A1A1A] p-4 rounded-xl ${showFilters ? "block" : "hidden md:block"}`}
            >
              <div>
                <h3 className="font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
                  <Input type="search" placeholder="Search items..." className="pl-9 bg-[#0F0F0F] border-[#2A2A2A]" />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={0.1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-md p-2 w-[45%]">
                      <p className="text-xs text-white/70">Min</p>
                      <p>{priceRange[0]} ETH</p>
                    </div>
                    <div className="bg-[#0F0F0F] border border-[#2A2A2A] rounded-md p-2 w-[45%]">
                      <p className="text-xs text-white/70">Max</p>
                      <p>{priceRange[1]} ETH</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Collections</h3>
                <div className="space-y-2">
                  {["Bored Ape Yacht Club", "Azuki", "Doodles", "CryptoPunks", "Art Blocks"].map((collection) => (
                    <div key={collection} className="flex items-center">
                      <input
                        type="checkbox"
                        id={collection.toLowerCase().replace(/\s+/g, "-")}
                        className="mr-2 h-4 w-4 rounded border-[#2A2A2A] bg-[#0F0F0F]"
                      />
                      <label htmlFor={collection.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                        {collection}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Chains</h3>
                <div className="space-y-2">
                  {["Ethereum", "Polygon", "Solana", "Binance"].map((chain) => (
                    <div key={chain} className="flex items-center">
                      <input
                        type="checkbox"
                        id={chain.toLowerCase()}
                        className="mr-2 h-4 w-4 rounded border-[#2A2A2A] bg-[#0F0F0F]"
                      />
                      <label htmlFor={chain.toLowerCase()} className="text-sm">
                        {chain}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">Apply Filters</Button>
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-white/70">{nfts.length} items</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <Button variant="outline" className="border-[#2A2A2A]">
                    Recently Listed <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                {view === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nfts.map((nft) => (
                      <NFTCard key={nft.id} {...nft} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {nfts.map((nft) => (
                      <div key={nft.id} className="bg-[#1A1A1A] rounded-xl overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-1/3">
                            <Image
                              src={nft.image || "/placeholder.svg"}
                              alt={nft.name}
                              width={400}
                              height={400}
                              className="w-full aspect-square object-cover"
                            />
                          </div>
                          <div className="p-4 sm:w-2/3 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium">{nft.name}</h3>
                                <div className="flex items-center gap-1 text-xs text-white/70">
                                  <Image
                                    src={nft.creator.avatar || "/placeholder.svg"}
                                    alt={nft.creator.name}
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                  />
                                  <span>@{nft.creator.name}</span>
                                </div>
                              </div>
                              <p className="text-sm text-white/70 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                              </p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-white/70">Current Price</p>
                                <p className="font-medium">
                                  {nft.price} <span className="text-white/70">{nft.currency}</span>
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-primary text-white hover:bg-primary/10"
                              >
                                Buy Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              {categories.slice(1).map((category) => (
                <TabsContent key={category} value={category.toLowerCase()} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nfts.slice(0, 6).map((nft) => (
                      <NFTCard key={nft.id} {...nft} />
                    ))}
                  </div>
                </TabsContent>
              ))}

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-[#2A2A2A]">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
