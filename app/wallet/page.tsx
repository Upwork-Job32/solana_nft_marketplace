"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, ExternalLink, ChevronRight } from "lucide-react"

// Mock data
const wallets = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "/placeholder.svg?height=40&width=40",
    popular: true,
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: "/placeholder.svg?height=40&width=40",
    popular: true,
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "/placeholder.svg?height=40&width=40",
    popular: true,
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: "/placeholder.svg?height=40&width=40",
    popular: false,
  },
  {
    id: "trust",
    name: "Trust Wallet",
    icon: "/placeholder.svg?height=40&width=40",
    popular: false,
  },
  {
    id: "rainbow",
    name: "Rainbow",
    icon: "/placeholder.svg?height=40&width=40",
    popular: false,
  },
]

export default function WalletPage() {
  const [connected, setConnected] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConnect = (walletId: string) => {
    setSelectedWallet(walletId)
    setConnected(true)
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDisconnect = () => {
    setConnected(false)
    setSelectedWallet(null)
  }

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4 mb-8 text-center">
            <h1 className="text-3xl font-bold font-poppins">Connect Wallet</h1>
            <p className="text-white/70 mx-auto max-w-md">
              Connect with one of our available wallet providers or create a new one
            </p>
          </div>

          {!connected ? (
            <Tabs defaultValue="popular" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#1A1A1A] p-1">
                <TabsTrigger value="popular" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Popular
                </TabsTrigger>
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  All Wallets
                </TabsTrigger>
              </TabsList>

              <TabsContent value="popular" className="mt-6">
                <div className="space-y-4">
                  {wallets
                    .filter((wallet) => wallet.popular)
                    .map((wallet) => (
                      <button
                        key={wallet.id}
                        className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl p-4 flex items-center justify-between transition-colors"
                        onClick={() => handleConnect(wallet.id)}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={wallet.icon || "/placeholder.svg"}
                            alt={wallet.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <span className="font-medium">{wallet.name}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white/50" />
                      </button>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {wallets.map((wallet) => (
                    <button
                      key={wallet.id}
                      className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl p-4 flex items-center justify-between transition-colors"
                      onClick={() => handleConnect(wallet.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={wallet.icon || "/placeholder.svg"}
                          alt={wallet.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="font-medium">{wallet.name}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-white/50" />
                    </button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="bg-[#1A1A1A] rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src={wallets.find((w) => w.id === selectedWallet)?.icon || ""}
                  alt={wallets.find((w) => w.id === selectedWallet)?.name || ""}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-medium text-lg">
                    {wallets.find((w) => w.id === selectedWallet)?.name} Connected
                  </h2>
                  <p className="text-white/70 text-sm">Wallet successfully connected</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/70">Wallet Address</p>
                <div className="flex items-center justify-between bg-[#0F0F0F] rounded-lg p-3">
                  <span className="font-mono">0x1a2b...9s0</span>
                  <div className="flex items-center gap-2">
                    <button className="text-white/70 hover:text-white" onClick={handleCopyAddress}>
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy address</span>
                    </button>
                    <a
                      href="https://etherscan.io/address/0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View on Etherscan</span>
                    </a>
                  </div>
                </div>
                {copied && <p className="text-xs text-primary">Address copied to clipboard!</p>}
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/70">Balance</p>
                <div className="bg-[#0F0F0F] rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span>ETH Balance</span>
                    <span className="font-medium">2.45 ETH</span>
                  </div>
                  <div className="text-sm text-white/70 mt-1">≈ $4,578.32 USD</div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-4 justify-end">
                <Button variant="outline" className="border-[#2A2A2A]" onClick={handleDisconnect}>
                  Disconnect
                </Button>
                <Button className="bg-primary hover:bg-primary/90">View My Profile</Button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              New to Ethereum wallets?{" "}
              <a href="#" className="text-primary hover:underline">
                Learn more about wallets
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
