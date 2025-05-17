import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  name: string
  image: string
  itemCount: number
  className?: string
}

export default function CategoryCard({ name, image, itemCount, className }: CategoryCardProps) {
  return (
    <Link
      href={`/explore?category=${name.toLowerCase()}`}
      className={cn("group relative block overflow-hidden rounded-xl card-hover-effect", className)}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={200}
        className="w-full aspect-[2/1] object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-sm text-white/70">{itemCount} items</p>
      </div>
    </Link>
  )
}
