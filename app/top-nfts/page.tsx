"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp } from "lucide-react"

// Mock data
const topNFTs = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Cosmic Perspective #${i + 31}`,
  image: "/placeholder.svg?height=80&width=80",
  collection: "Cosmic Perspective",
  price: (Math.random() * 3 + 0.5).toFixed(2),
  currency: "ETH",
  volume: (Math.random() * 100 + 10).toFixed(2),
  change: (Math.random() * 20 - 10).toFixed(2),
  floor: (Math.random() * 2 + 0.2).toFixed(2),
  owners: Math.floor(Math.random() * 5000) + 1000,
  items: Math.floor(Math.random() * 10000) + 2000,
}))

const timeframes = ["1 Day", "7 Days", "30 Days", "All Time"]

export default function TopNFTsPage() {
  const [timeframe, setTimeframe] = useState("7 Days")
  const [sortConfig, setSortConfig] = useState({ key: "volume", direction: "desc" })

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "desc" ? "asc" : "desc",
    }))
  }

  const sortedNFTs = [...topNFTs].sort((a, b) => {
    if (sortConfig.key === "change") {
      return sortConfig.direction === "desc"
        ? Number.parseFloat(b.change) - Number.parseFloat(a.change)
        : Number.parseFloat(a.change) - Number.parseFloat(b.change)
    }

    if (sortConfig.key === "volume") {
      return sortConfig.direction === "desc"
        ? Number.parseFloat(b.volume) - Number.parseFloat(a.volume)
        : Number.parseFloat(a.volume) - Number.parseFloat(b.volume)
    }

    if (sortConfig.key === "floor") {
      return sortConfig.direction === "desc"
        ? Number.parseFloat(b.floor) - Number.parseFloat(a.floor)
        : Number.parseFloat(a.floor) - Number.parseFloat(b.floor)
    }

    return 0
  })

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold font-poppins">Top NFTs</h1>
          <p className="text-white/70 max-w-3xl">
            The top NFTs on NFTMarket, ranked by volume, floor price and other statistics.
          </p>
        </div>

        <Tabs defaultValue="collections" className="mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="bg-[#1A1A1A] p-1">
              <TabsTrigger
                value="collections"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Collections
              </TabsTrigger>
              <TabsTrigger value="nfts" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                NFTs
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" className="border-[#2A2A2A]">
                {timeframe} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#2A2A2A]">
                All Chains <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="collections" className="mt-0">
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A2A2A]">
                      <th className="px-4 py-3 text-left text-sm font-medium text-white/70">#</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-white/70">Collection</th>
                      <th
                        className="px-4 py-3 text-right text-sm font-medium text-white/70 cursor-pointer"
                        onClick={() => handleSort("volume")}
                      >
                        <div className="flex items-center justify-end gap-1">
                          Volume
                          {sortConfig.key === "volume" &&
                            (sortConfig.direction === "desc" ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronUp className="h-4 w-4" />
                            ))}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right text-sm font-medium text-white/70 cursor-pointer"
                        onClick={() => handleSort("change")}
                      >
                        <div className="flex items-center justify-end gap-1">
                          Change
                          {sortConfig.key === "change" &&
                            (sortConfig.direction === "desc" ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronUp className="h-4 w-4" />
                            ))}
                        </div>
                      </th>
                      <th
                        className="px-4 py-3 text-right text-sm font-medium text-white/70 cursor-pointer"
                        onClick={() => handleSort("floor")}
                      >
                        <div className="flex items-center justify-end gap-1">
                          Floor Price
                          {sortConfig.key === "floor" &&
                            (sortConfig.direction === "desc" ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronUp className="h-4 w-4" />
                            ))}
                        </div>
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-white/70">Owners</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-white/70">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedNFTs.map((nft) => (
                      <tr key={nft.id} className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/30">
                        <td className="px-4 py-4 text-sm">{nft.id}</td>
                        <td className="px-4 py-4">
                          <Link
                            href={`/collection/${nft.collection.toLowerCase()}`}
                            className="flex items-center gap-3"
                          >
                            <Image
                              src={nft.image || "/placeholder.svg"}
                              alt={nft.collection}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <span>{nft.collection}</span>
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-right">{nft.volume} ETH</td>
                        <td className="px-4 py-4 text-right">
                          <span className={Number.parseFloat(nft.change) >= 0 ? "text-green-500" : "text-red-500"}>
                            {Number.parseFloat(nft.change) >= 0 ? "+" : ""}
                            {nft.change}%
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">{nft.floor} ETH</td>
                        <td className="px-4 py-4 text-right">{nft.owners.toLocaleString()}</td>
                        <td className="px-4 py-4 text-right">{nft.items.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nfts" className="mt-0">
            <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A2A2A]">
                      <th className="px-4 py-3 text-left text-sm font-medium text-white/70">#</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-white/70">NFT</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-white/70">Price</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-white/70">Change</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-white/70">Volume</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-white/70">Owners</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedNFTs.slice(0, 10).map((nft) => (
                      <tr key={nft.id} className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/30">
                        <td className="px-4 py-4 text-sm">{nft.id}</td>
                        <td className="px-4 py-4">
                          <Link href={`/item/${nft.id}`} className="flex items-center gap-3">
                            <Image
                              src={nft.image || "/placeholder.svg"}
                              alt={nft.name}
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                            <div>
                              <span className="block">{nft.name}</span>
                              <span className="block text-xs text-white/70">{nft.collection}</span>
                            </div>
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-right">{nft.price} ETH</td>
                        <td className="px-4 py-4 text-right">
                          <span className={Number.parseFloat(nft.change) >= 0 ? "text-green-500" : "text-red-500"}>
                            {Number.parseFloat(nft.change) >= 0 ? "+" : ""}
                            {nft.change}%
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">{nft.volume} ETH</td>
                        <td className="px-4 py-4 text-right">{nft.owners.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-[#2A2A2A]">
            Load More
          </Button>
        </div>
      </div>
    </div>
  )
}
