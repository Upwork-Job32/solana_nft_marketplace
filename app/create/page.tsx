"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Assuming images might be used within the boxes
import { cn } from "@/lib/utils"; // Assuming cn utility is available for conditional class names

export default function CreateCollectiblePage() {
  const [selectedType, setSelectedType] = useState<"single" | "multiple" | null>(null);

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold font-poppins mb-4">Create Collectible</h1>
          <p className="text-white/70 mb-8">
            Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one collectible times
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/create-item" className="block group" onClick={() => setSelectedType("single")}>
              <div className={cn(
                "bg-[#1A1A1A] rounded-xl p-8 text-center cursor-pointer border border-[#1A1A1A] transition-all duration-200",
                selectedType === "single" && "border-primary"
              )}>
                <Image
                  src="/products/123.png" // Example image for Single
                  alt="Single collectible icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h2 className="text-xl font-medium mb-2">Single</h2>
                <p className="text-white/70 text-sm">Choose this if you want your collectible to be one of a kind</p>
              </div>
            </Link>
            <Link href="/create-multiple" className="block group" onClick={() => setSelectedType("multiple")}>
              <div className={cn(
                "bg-[#1A1A1A] rounded-xl p-8 text-center cursor-pointer border border-[#1A1A1A] transition-all duration-200",
                selectedType === "multiple" && "border-primary"
              )}>
                <Image
                  src="/products/04.png" // Example image for Multiple
                  alt="Multiple collectibles icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h2 className="text-xl font-medium mb-2">Multiple</h2>
                <p className="text-white/70 text-sm">Choose this if you want to sell one collectible multiple times</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 