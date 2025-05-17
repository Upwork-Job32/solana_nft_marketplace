"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, Flag, Clock, Eye, BarChart3, Tag, Info } from "lucide-react"
import NFTCard from "@/components/nft-card"

// Mock data
const nft = {
  id: "1",
  name: "Cosmic Perspective #31",
  description:
    "A stunning digital artwork that explores the vastness of space and our place within it. This piece is part of the 'Cosmic Perspective' collection, which aims to evoke a sense of wonder and contemplation about the universe.",
  image: "/placeholder.svg?height=600&width=600",
  price: "1.5",
  currency: "ETH",
  creator: {
    name: "cosmicartist",
    avatar: "/placeholder.svg?height=40&width=40",
    verified: true,
  },
  owner: {
    name: "collector123",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  collection: {
    name: "Cosmic Perspective",
    verified: true,
  },
  likes: 159,
  views: 1432,
  history: [
    {
      event: "Listed",
      price: "1.5 ETH",
      from: "cosmicartist",
      to: "",
      date: "2 hours ago",
    },
    {
      event: "Created",
      price: "",
      from: "cosmicartist",
      to: "",
      date: "3 days ago",
    },
  ],
  properties: [
    { type: "Background", value: "Deep Space", rarity: "10%" },
    { type: "Style", value: "Abstract", rarity: "25%" },
    { type: "Colors", value: "Vibrant", rarity: "15%" },
    { type: "Dimension", value: "3D", rarity: "30%" },
  ],
}

const similarNFTs = Array.from({ length: 4 }).map((_, i) => ({
  id: `${i + 2}`,
  name: `Cosmic Perspective #${i + 32}`,
  image: "/placeholder.svg?height=400&width=400",
  price: (Math.random() * 3 + 0.5).toFixed(2),
  currency: "ETH",
  creator: {
    name: `creator${i + 1}`,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  likes: Math.floor(Math.random() * 300) + 50,
}))

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Image */}
          <div>
            <div className="gradient-border p-3 rounded-xl">
              <Image
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                width={600}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Link href={`/collection/${nft.collection.name}`} className="text-sm text-white/70 hover:text-white">
                {nft.collection.name} Collection
                {nft.collection.verified && <span className="inline-block ml-1 bg-primary rounded-full w-4 h-4"></span>}
              </Link>
              <div className="flex items-center gap-3">
                <button className="text-white/70 hover:text-white">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="text-white/70 hover:text-white">
                  <Flag className="h-5 w-5" />
                </button>
              </div>
            </div>

            <h1 className="text-3xl font-bold font-poppins">{nft.name}</h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={nft.creator.avatar || "/placeholder.svg"}
                  alt={nft.creator.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs text-white/70">Creator</p>
                  <p className="text-sm font-medium">@{nft.creator.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={nft.owner.avatar || "/placeholder.svg"}
                  alt={nft.owner.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs text-white/70">Owner</p>
                  <p className="text-sm font-medium">@{nft.owner.name}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4 text-white/70" />
                <span>{nft.views} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart
                  className={`h-4 w-4 ${liked ? "fill-primary text-primary" : "text-white/70"}`}
                  onClick={() => setLiked(!liked)}
                />
                <span>{liked ? nft.likes + 1 : nft.likes} favorites</span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white/70">Current Price</p>
                <div className="flex items-center gap-1 text-white/70">
                  <Clock className="h-4 w-4" />
                  <span>Ends in 12h 30m 10s</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-bold">
                  {nft.price} {nft.currency}
                </h2>
                <span className="text-white/70">($2,583.75)</span>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90">Buy Now</Button>
                <Button variant="outline" className="flex-1 border-primary text-white hover:bg-primary/10">
                  Place Bid
                </Button>
              </div>
            </div>

            <Tabs defaultValue="details">
              <TabsList className="bg-[#1A1A1A] p-1">
                <TabsTrigger value="details" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="properties"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Properties
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <p className="text-white/70">{nft.description}</p>
                  <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-white/70" />
                        <span className="text-sm">Token ID</span>
                      </div>
                      <span className="text-sm font-medium">#31</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-white/70" />
                        <span className="text-sm">Token Standard</span>
                      </div>
                      <span className="text-sm font-medium">ERC-721</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Info className="h-4 w-4 text-white/70" />
                        <span className="text-sm">Blockchain</span>
                      </div>
                      <span className="text-sm font-medium">Ethereum</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="properties" className="mt-4">
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {nft.properties.map((property, index) => (
                      <div key={index} className="bg-[#0F0F0F] rounded-lg p-3 text-center">
                        <p className="text-xs text-primary mb-1">{property.type}</p>
                        <p className="font-medium mb-1">{property.value}</p>
                        <p className="text-xs text-white/70">{property.rarity} have this trait</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <div className="bg-[#1A1A1A] rounded-xl p-4">
                  <div className="space-y-4">
                    {nft.history.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-[#2A2A2A] last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-[#0F0F0F] rounded-full p-2">
                            <Tag className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">{item.event}</p>
                            <p className="text-xs text-white/70">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {item.price && <p className="font-medium">{item.price}</p>}
                          <p className="text-xs text-white/70">
                            {item.from && `From @${item.from}`}
                            {item.to && ` to @${item.to}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* More from this collection */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-poppins">More from this collection</h2>
            <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
              View Collection
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarNFTs.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
