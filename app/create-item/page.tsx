"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Plus, Minus, Calendar } from "lucide-react"

export default function CreateItemPage() {
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [saleType, setSaleType] = useState("fixed")
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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold font-poppins">Create Single Collectible</h1>
            <p className="text-white/70">Create and list your NFT for sale</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Upload */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Upload File</h2>
                <p className="text-white/70 text-sm">
                  Supported file types: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                </p>
                <div className="flex items-center justify-center border-2 border-dashed border-[#2A2A2A] rounded-xl h-80 relative overflow-hidden p-6">
                  {filePreview ? (
                    <Image src={filePreview || "/placeholder.svg"} alt="File preview" fill className="object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-white/70 text-center">
                      <Upload className="h-10 w-10" />
                      <div>
                        <p className="font-medium text-white mb-1">Drag and drop file</p>
                        <p className="text-sm">or browse media on your device</p>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFilePreview(URL.createObjectURL(e.target.files[0]))
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">Preview</h2>
                <p className="text-white/70 text-sm">This is how your item will be displayed</p>
                <div className="bg-[#1A1A1A] rounded-xl overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={filePreview || "/placeholder.svg?height=400&width=400"}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-medium">Item Name</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#2A2A2A]"></div>
                      <span className="text-sm text-white/70">@username</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Item Details</h2>

                <div className="space-y-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Item name"
                    className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your item"
                    className="bg-[#1A1A1A] border-[#2A2A2A] min-h-[120px] focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="collection">Collection</Label>
                  <Select>
                    <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] focus:ring-primary">
                      <SelectValue placeholder="Select collection" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                      <SelectItem value="cosmic">Cosmic Perspective</SelectItem>
                      <SelectItem value="abstract">Abstract Dimensions</SelectItem>
                      <SelectItem value="digital">Digital Dreams</SelectItem>
                      <SelectItem value="create">Create new collection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
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
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
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

              {/* Sale Type */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Put on sale</h2>
                <p className="text-white/70 text-sm">You'll receive bids on this item</p>

                <Tabs defaultValue="fixed" onValueChange={(value) => setSaleType(value)}>
                  <TabsList className="bg-[#0F0F0F] p-1 w-full grid grid-cols-3 rounded-md">
                    <TabsTrigger
                      value="fixed"
                      className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white rounded-md"
                    >
                      Fixed Price
                    </TabsTrigger>
                    <TabsTrigger
                      value="timed"
                      className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white rounded-md"
                    >
                      Timed Auction
                    </TabsTrigger>
                    <TabsTrigger value="open" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white rounded-md">
                      Open for Bids
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="fixed" className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <div className="flex gap-4 items-center">
                        <Select defaultValue="eth">
                          <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] focus:ring-primary w-32">
                            <SelectValue placeholder="Currency" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                            <SelectItem value="eth">ETH</SelectItem>
                            <SelectItem value="weth">WETH</SelectItem>
                            <SelectItem value="matic">MATIC</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          id="price"
                          type="number"
                          placeholder="Amount"
                          className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                        />
                      </div>
                      <p className="text-sm text-white/70">$1,950.00</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="timed" className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="minimum-bid">Minimum Bid</Label>
                      <div className="flex gap-4 items-center">
                        <Select defaultValue="eth">
                          <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] focus:ring-primary w-32">
                            <SelectValue placeholder="Currency" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                            <SelectItem value="eth">ETH</SelectItem>
                            <SelectItem value="weth">WETH</SelectItem>
                            <SelectItem value="matic">MATIC</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          id="minimum-bid"
                          type="number"
                          placeholder="Amount"
                          className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                        />
                      </div>
                      <p className="text-sm text-white/70">$1,950.00</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Starting Date</Label>
                        <div className="relative">
                          <Input type="date" className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary" />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Expiration Date</Label>
                        <div className="relative">
                          <Input type="date" className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary" />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="open" className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label>Reserve Price (Optional)</Label>
                      <div className="flex gap-4 items-center">
                        <Select defaultValue="eth">
                          <SelectTrigger className="bg-[#1A1A1A] border-[#2A2A2A] focus:ring-primary w-32">
                            <SelectValue placeholder="Currency" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                            <SelectItem value="eth">ETH</SelectItem>
                            <SelectItem value="weth">WETH</SelectItem>
                            <SelectItem value="matic">MATIC</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          type="number"
                          placeholder="Amount"
                          className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                        />
                      </div>
                      <p className="text-sm text-white/70">
                        Setting a reserve price is optional. If you set a reserve price, bids below this amount won't be
                        accepted.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Explicit & Sensitive Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="explicit-toggle">Explicit & Sensitive Content</Label>
                    <p className="text-sm text-white/70">Set this item as explicit and sensitive content</p>
                  </div>
                  <Switch id="explicit-toggle" />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-4 justify-end">
                <Button variant="outline" className="border-[#2A2A2A]">
                  Save as Draft
                </Button>
                <Button className="bg-primary hover:bg-primary/90">Create Item</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
