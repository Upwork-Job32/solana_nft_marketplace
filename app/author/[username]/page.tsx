"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoreHorizontal, Twitter, Instagram, Globe, Copy, CheckCheck } from "lucide-react"
import NFTCard from "@/components/nft-card"
import CollectionCard from "@/components/collection-card"

// Mock data
const author = {
  username: "cosmicartist",
  name: "Cosmic Artist",
  avatar: "/products/phon4.png",
  banner: "/products/store3.jpg",
  bio: "Digital artist exploring the intersection of space, time, and consciousness through vibrant NFT collections.",
  walletAddress: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0",
  socials: {
    twitter: "cosmicartist",
    instagram: "cosmic.artist",
    website: "cosmicartist.io",
  },
  stats: {
    items: 42,
    owners: 28,
    floorPrice: "1.2",
    volume: "38.5",
  },
}

const nfts = Array.from({ length: 8 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `Cosmic Perspective #${i + 31}`,
  image: `/products/${i % 4 === 0 ? '1.jpg' : i % 4 === 1 ? '10.jpg' : i % 4 === 2 ? '123.png' : '04.png'}`,
  price: (Math.random() * 3 + 0.5).toFixed(2),
  currency: "ETH",
  creator: {
    name: author.username,
    avatar: author.avatar,
  },
  likes: Math.floor(Math.random() * 300) + 50,
}))

const collections = Array.from({ length: 3 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `Cosmic Collection ${i + 1}`,
  image: `/products/${i % 3 === 0 ? 'carousel-2.jpg' : i % 3 === 1 ? 'detail.jpg' : 'carousel-3.jpg'}`,
  creator: {
    name: author.username,
    avatar: author.avatar,
  },
  itemCount: Math.floor(Math.random() * 20) + 5,
}))

export default function AuthorPage({ params }: { params: { username: string } }) {
  const [activeTab, setActiveTab] = useState("created")
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(author.walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative h-48 md:h-64 lg:h-80 w-full">
        <Image src={author.banner || "/placeholder.svg"} alt="Banner" fill className="object-cover" />
      </div>

      <div className="container px-4 md:px-6">
        {/* Author Info */}
        <div className="relative -mt-16 md:-mt-20 mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-end">
            <div className="relative z-10">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-[#2A2A2A] bg-[#0F0F0F]">
                <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold font-poppins">{author.name}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-white/70">@{author.username}</span>
                  <div className="flex items-center gap-1 bg-[#1A1A1A] rounded-lg px-3 py-1">
                    <span className="text-xs truncate max-w-[100px] md:max-w-[150px]">
                      {author.walletAddress.substring(0, 6)}...
                      {author.walletAddress.substring(author.walletAddress.length - 4)}
                    </span>
                    <button onClick={handleCopyAddress}>
                      {copied ? (
                        <CheckCheck className="h-3 w-3 text-primary" />
                      ) : (
                        <Copy className="h-3 w-3 text-white/70" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-3">
                <p className="text-white/70 text-sm">500 followers</p>
                <Button className="bg-primary hover:bg-primary/90 h-10 px-6">Follow</Button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-white/70">{author.bio}</p>
              <div className="flex gap-4 mt-4">
                {author.socials.twitter && (
                  <a
                    href={`https://twitter.com/${author.socials.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                )}
                {author.socials.instagram && (
                  <a
                    href={`https://instagram.com/${author.socials.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                )}
                {author.socials.website && (
                  <a
                    href={`https://${author.socials.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </a>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A] rounded-xl p-4 text-center">
                <p className="text-white/70 text-sm">Items</p>
                <p className="text-xl font-medium">{author.stats.items}</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl p-4 text-center">
                <p className="text-white/70 text-sm">Owners</p>
                <p className="text-xl font-medium">{author.stats.owners}</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl p-4 text-center">
                <p className="text-white/70 text-sm">Floor Price</p>
                <p className="text-xl font-medium">{author.stats.floorPrice} ETH</p>
              </div>
              <div className="bg-[#1A1A1A] rounded-xl p-4 text-center">
                <p className="text-white/70 text-sm">Volume</p>
                <p className="text-xl font-medium">{author.stats.volume} ETH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="created" onValueChange={setActiveTab} className="mt-8">
          <TabsList className="bg-[#1A1A1A] p-1">
            <TabsTrigger value="on_sale" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              On Sale
            </TabsTrigger>
            <TabsTrigger value="created" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Created
            </TabsTrigger>
            <TabsTrigger value="liked" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Liked
            </TabsTrigger>
          </TabsList>

          <TabsContent value="on_sale" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nfts.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="created" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nfts.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="liked" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nfts.slice(0, 4).map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {activeTab !== "activity" && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
