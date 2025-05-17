import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#0F0F0F]">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text font-poppins">NFTMarket</span>
            </Link>
            <p className="text-sm text-white/70">
              Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Marketplace</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore" className="text-white/70 hover:text-white">
                  All NFTs
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-white/70 hover:text-white">
                  Art
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-white/70 hover:text-white">
                  Collectibles
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-white/70 hover:text-white">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-white/70 hover:text-white">
                  Virtual Worlds
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">My Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profile" className="text-white/70 hover:text-white">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="text-white/70 hover:text-white">
                  Wallet
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-white/70 hover:text-white">
                  My Collections
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-white/70 hover:text-white">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Join Newsletter</h3>
            <p className="text-sm text-white/70">
              Subscribe to our newsletter to get the latest updates and news about NFTs
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1A1A1A] border-none focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#1A1A1A] pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} NFTMarket. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/50 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/50 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
