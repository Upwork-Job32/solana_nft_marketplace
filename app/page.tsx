import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NFTCard from "@/components/nft-card"
import CollectionCard from "@/components/collection-card"
import CategoryCard from "@/components/category-card"
import { cn } from "@/lib/utils"

// Mock data
const featuredNFTs = [
  {
    id: "1",
    name: "Cosmic Perspective #31",
    image: "/products/1.jpg",
    price: "1.5",
    currency: "ETH",
    creator: {
      name: "cosmicartist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 159,
  },
  {
    id: "2",
    name: "Abstract Dimensions #08",
    image: "/products/10.jpg",
    price: "2.3",
    currency: "ETH",
    creator: {
      name: "abstracto",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 243,
  },
  {
    id: "3",
    name: "Digital Dreams #15",
    image: "/products/123.png",
    price: "0.8",
    currency: "ETH",
    creator: {
      name: "dreamweaver",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 87,
  },
  {
    id: "4",
    name: "Neon Jungle #42",
    image: "/products/04.jpg",
    price: "1.2",
    currency: "ETH",
    creator: {
      name: "neonartist",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 112,
  },
]

const topCollections = [
  {
    id: "1",
    name: "Bored Ape Yacht Club",
    image: "/products/carousel-2.jpg",
    creator: {
      name: "bayc",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    itemCount: 10000,
  },
  {
    id: "2",
    name: "Azuki",
    image: "/products/detail.jpg",
    creator: {
      name: "azuki",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    itemCount: 8700,
  },
  {
    id: "3",
    name: "Doodles",
    image: "/products/carousel-3.jpg",
    creator: {
      name: "doodles",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    itemCount: 5000,
  },
]

const categories = [
  {
    name: "Art",
    image: "/products/tech_camera.jpg",
    itemCount: 12453,
  },
  {
    name: "Collectibles",
    image: "/products/phon2.png",
    itemCount: 8721,
  },
  {
    name: "Photography",
    image: "/products/carousel-1.jpg",
    itemCount: 5324,
  },
  {
    name: "Music",
    image: "/products/mic.png",
    itemCount: 3198,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Discover, Collect & Sell <span className="gradient-text">Extraordinary</span> NFTs
              </h1>
              <p className="text-lg text-white/70">
                Explore the best NFT marketplace with our beautiful collections. Buy, sell and collect the best NFTs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/explore">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore
                  </Button>
                </Link>
                <Link href="/create-item">
                  <Button size="lg" variant="outline" className="border-primary text-white hover:bg-primary/10">
                    Create
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 mt-4">
                <div>
                  <p className="text-3xl font-bold">200K+</p>
                  <p className="text-white/70">Collections</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">10K+</p>
                  <p className="text-white/70">Artists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">423K+</p>
                  <p className="text-white/70">Community</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Link href={`/item/${featuredNFTs[0].id}`} className="block">
                <div className="gradient-border p-3 rounded-xl">
                  <Image
                    src="/avatar/avatar.png"
                    alt="Featured NFT"
                    width={500}
                    height={500}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-4 p-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{featuredNFTs[0].name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Image
                            src={featuredNFTs[0].creator.avatar || "/placeholder.svg"}
                            alt={featuredNFTs[0].creator.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="text-sm text-white/70">@{featuredNFTs[0].creator.name}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Current Bid</p>
                        <p className="font-medium">
                          {featuredNFTs[0].price} <span className="text-white/70">{featuredNFTs[0].currency}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">Featured NFTs</h2>
              <p className="text-white/70 mt-2">Explore the best NFTs handpicked by our team</p>
            </div>
            <Link href="/explore">
              <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNFTs.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Collections */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins">Top Collections</h2>
              <p className="text-white/70 mt-2">Browse the most popular collections in the marketplace</p>
            </div>
            <Link href="/explore">
              <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/explore?collection=${collection.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn("block bg-[#1A1A1A] rounded-xl overflow-hidden card-hover-effect")}
              >
                <CollectionCard {...collection} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Browse by Category</h2>
            <p className="text-white/70 mt-2 max-w-2xl mx-auto">
              Explore the NFTs in the most featured categories. We have all type of items in our marketplace.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Create and Sell Your NFTs</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join our community and start creating, collecting and selling your NFTs. Get started with the easiest and
              most secure NFT marketplace.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Creating
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
