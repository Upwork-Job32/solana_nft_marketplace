"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NFTCardProps {
  id: string
  name: string
  image: string
  price: string
  currency: string
  creator: {
    name: string
    avatar: string
  }
  likes: number
  className?: string
}

export default function NFTCard({ id, name, image, price, currency, creator, likes, className }: NFTCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className={cn("bg-[#1A1A1A] rounded-xl overflow-hidden card-hover-effect", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/item/${id}`} className="block relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md rounded-full p-2">
          <Heart
            className={cn("h-4 w-4", isLiked ? "fill-primary text-primary" : "text-white")}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
          />
          <span className="sr-only">Like</span>
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Button className="bg-primary hover:bg-primary/90">View Item</Button>
          </div>
        )}
      </Link>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium truncate">{name}</h3>
          <div className="flex items-center gap-1 text-xs text-white/70">
            <Heart className={cn("h-3 w-3", isLiked ? "fill-primary text-primary" : "fill-white/70 text-white/70")} />
            <span>{isLiked ? likes + 1 : likes}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={creator.avatar || "/placeholder.svg"}
            alt={creator.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xs text-white/70">@{creator.name}</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[#2A2A2A]">
          <div>
            <p className="text-xs text-white/70">Current Price</p>
            <p className="font-medium">
              {price} <span className="text-white/70">{currency}</span>
            </p>
          </div>
          <Button variant="outline" size="sm" className="border-primary text-white hover:bg-primary/10">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}
