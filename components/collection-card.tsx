import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CollectionCardProps {
  id: string
  name: string
  image: string
  creator: {
    name: string
    avatar: string
  }
  itemCount: number
  className?: string
}

export default function CollectionCard({ id, name, image, creator, itemCount, className }: CollectionCardProps) {
  return (
    <Link
      href={`/collection/${id}`}
      className={cn("block bg-[#1A1A1A] rounded-xl overflow-hidden card-hover-effect", className)}
    >
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={300}
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-md rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={creator.avatar || "/placeholder.svg"}
              alt={creator.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-xs">@{creator.name}</span>
          </div>
          <span className="text-xs text-white/70">{itemCount} items</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
      </div>
    </Link>
  )
}
