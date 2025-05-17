"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Upload, Plus, Minus, X } from "lucide-react"

interface FilePreview {
  id: string
  url: string
  name: string
}

export default function CreateMultiplePage() {
  const [files, setFiles] = useState<FilePreview[]>([])
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

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substring(2, 9),
        url: URL.createObjectURL(file),
        name: file.name,
      }))
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
  }

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold font-poppins">Create Multiple Items</h1>
            <p className="text-white/70">Create and list multiple NFTs at once</p>
          </div>

          <div className="space-y-8">
            {/* Upload Files */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Upload Files</h2>
              <p className="text-white/70 text-sm">
                Supported file types: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB per file
              </p>
              <div className="flex items-center justify-center border-2 border-dashed border-[#2A2A2A] rounded-xl h-60 relative overflow-hidden">
                <div className="flex flex-col items-center gap-4 text-white/70 p-6 text-center">
                  <Upload className="h-10 w-10" />
                  <div>
                    <p className="font-medium text-white mb-1">Drag and drop files</p>
                    <p className="text-sm">or browse media on your device</p>
                  </div>
                </div>
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleFilesChange}
                />
              </div>

              {/* File Previews */}
              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Selected Files ({files.length})</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {files.map((file) => (
                      <div key={file.id} className="relative group">
                        <div className="aspect-square bg-[#1A1A1A] rounded-lg overflow-hidden">
                          <Image src={file.url || "/placeholder.svg"} alt={file.name} fill className="object-cover" />
                        </div>
                        <button
                          className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveFile(file.id)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <p className="text-xs text-white/70 truncate mt-1">{file.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Collection Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Collection Details</h2>

              <div className="space-y-2">
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
            </div>

            {/* Common Item Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Common Item Details</h2>
              <p className="text-white/70 text-sm">These details will be applied to all items</p>

              <div className="space-y-2">
                <Label htmlFor="name-prefix">Name Prefix</Label>
                <Input
                  id="name-prefix"
                  placeholder="e.g. 'Cosmic #'"
                  className="bg-[#1A1A1A] border-[#2A2A2A] focus-visible:ring-primary"
                />
                <p className="text-sm text-white/70">Items will be named as: [Prefix][Number], e.g. "Cosmic #1"</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description for all items"
                  className="bg-[#1A1A1A] border-[#2A2A2A] min-h-[120px] focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (for all items)</Label>
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
                <p className="text-sm text-white/70">$1,950.00 per item</p>
              </div>
            </div>

            {/* Properties */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Common Properties</h2>
              <p className="text-white/70 text-sm">
                These properties will be applied to all items. You can edit individual properties after creation.
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

            {/* Explicit & Sensitive Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="explicit-toggle">Explicit & Sensitive Content</Label>
                  <p className="text-sm text-white/70">Set these items as explicit and sensitive content</p>
                </div>
                <Switch id="explicit-toggle" />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-4 justify-end">
              <Button variant="outline" className="border-[#2A2A2A]">
                Save as Draft
              </Button>
              <Button className="bg-primary hover:bg-primary/90" disabled={files.length === 0}>
                Create {files.length} Items
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
