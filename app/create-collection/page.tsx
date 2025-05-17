"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Upload, Plus, Minus, Info } from "lucide-react"

export default function CreateCollectionPage() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [featuredPreview, setFeaturedPreview] = useState<string | null>(null)
  const [royalty, setRoyalty] = useState(10)
  const [properties, setProperties] = useState([{ type: "", name: "" }])

  const handleAddProperty = () => {
    setProperties([...properties, { type: "", name: "" }])
  }

  const handleRemoveProperty = (index: number) => {
    const newProperties = [...properties]
    newProperties.splice(index, 1)
    setProperties(newProperties)
  }

  const handlePropertyChange = (index: number, field: "type" | "name", value: string) => {
    const newProperties = [...properties]
    newProperties[index][field] = value
    setProperties(newProperties)
  }

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold font-poppins">Create a Collection</h1>
            <p className="text-white/70">Create, curate, and manage collections of unique NFTs to share and sell.</p>
          </div>

          <div className="space-y-8">
            {/* Logo Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Logo Image</h2>
                <div className="text-sm text-white/70">Recommended: 350 x 350px</div>
              </div>
              <div className="flex items-center justify-center border-2 border-dashed border-[#2A2A2A] rounded-xl h-40 w-40 mx-auto relative overflow-hidden">
                {logoPreview ? (
                  <Image src={logoPreview || "/placeholder.svg"} alt="Logo preview" fill className="object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-white/70">
                    <Upload className="h-6 w-6" />
                    <span className="text-sm">Upload file</span>
                  </div>
                )}
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setLogoPreview(URL.createObjectURL(e.target.files[0]))
                    }
                  }}
                />
              </div>
            </div>

            {/* Banner Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Banner Image</h2>
                <div className="text-sm text-white/70">Recommended: 1400 x 400px</div>
              </div>
              <div className="flex items-center justify-center border-2 border-dashed border-[#2A2A2A] rounded-xl h-40 w-full relative overflow-hidden">
                {bannerPreview ? (
                  <Image src={bannerPreview || "/placeholder.svg"} alt="Banner preview" fill className="object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-white/70">
                    <Upload className="h-6 w-6" />
                    <span className="text-sm">Upload file</span>
                  </div>
                )}
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setBannerPreview(URL.createObjectURL(e.target.files[0]))
                    }
                  }}
                />
              </div>
            </div>

            {/* Featured Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Featured Image</h2>
                <div className="text-sm text-white/70">Recommended: 600 x 400px</div>
              </div>
              <div className="flex items-center justify-center border-2 border-dashed border-[#2A2A2A] rounded-xl h-40 w-full relative overflow-hidden">
                {featuredPreview ? (
                  <Image
                    src={featuredPreview || "/placeholder.svg"}
                    alt="Featured preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-white/70">
                    <Upload className="h-6 w-6" />
                    <span className="text-sm">Upload file</span>
                  </div>
                )}
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFeaturedPreview(URL.createObjectURL(e.target.files[0]))
                    }
                  }}
                />
              </div>
            </div>

            {/* Collection Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Collection Details</h2>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Collection name"
                  className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <div className="flex items-center">
                  <span className="bg-[#1A1A1A] border border-r-0 border-[#2A2A2A] rounded-l-md px-3 py-2 text-white/70">
                    nftmarket.com/collection/
                  </span>
                  <Input
                    id="url"
                    placeholder="collection-name"
                    className="bg-[#1A1A1A] border-[#2A2A2A] rounded-l-none focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your collection"
                  className="bg-[#1A1A1A] border-[#2A2A2A] min-h-[120px] focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] focus:ring-primary">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                    <SelectItem value="art">Art</SelectItem>
                    <SelectItem value="collectibles">Collectibles</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="virtual-worlds">Virtual Worlds</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="blockchain">Blockchain</Label>
                <Select defaultValue="ethereum">
                  <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] focus:ring-primary">
                    <SelectValue placeholder="Select blockchain" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="solana">Solana</SelectItem>
                    <SelectItem value="binance">Binance Smart Chain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Properties */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Properties</h2>
              <p className="text-white/70 text-sm">
                Properties show up underneath your item, are clickable, and can be filtered in your collection's
                sidebar.
              </p>

              <div className="space-y-4">
                {properties.map((property, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <Input
                      placeholder="Type"
                      value={property.type}
                      onChange={(e) => handlePropertyChange(index, "type", e.target.value)}
                      className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                    />
                    <Input
                      placeholder="Name"
                      value={property.name}
                      onChange={(e) => handlePropertyChange(index, "name", e.target.value)}
                      className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-[#2A2A2A] hover:bg-[#2A2A2A]"
                      onClick={() => handleRemoveProperty(index)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <Button variant="outline" className="border-[#2A2A2A] hover:bg-[#2A2A2A]" onClick={handleAddProperty}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Property
                </Button>
              </div>
            </div>

            {/* Creator Earnings */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Creator Earnings</h2>
              <p className="text-white/70 text-sm">
                Collect a fee when a user re-sells an item you originally created.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Input
                    type="number"
                    value={royalty}
                    onChange={(e) => setRoyalty(Number.parseInt(e.target.value))}
                    min="0"
                    max="15"
                    className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                  />
                </div>
                <span className="text-lg">%</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/70">
                <Info className="h-4 w-4" />
                <span>Maximum creator earnings is 15%</span>
              </div>
            </div>

            {/* Display Theme */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Display Theme</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-primary rounded-xl p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2A2A2A] rounded-md"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">Contained</h3>
                    <p className="text-sm text-white/70">Items are contained within their card</p>
                  </div>
                </div>

                <div className="border border-[#2A2A2A] rounded-xl p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2A2A2A] rounded-md"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">Padded</h3>
                    <p className="text-sm text-white/70">Items fill their card with padding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explicit & Sensitive Content */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Explicit & Sensitive Content</h2>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="explicit-toggle">Set this collection as explicit and sensitive content</Label>
                  <p className="text-sm text-white/70">This collection contains explicit or sensitive content</p>
                </div>
                <Switch id="explicit-toggle" />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-4 justify-end">
              <Button variant="outline" className="border-[#2A2A2A]">
                Save as Draft
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Create Collection</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
