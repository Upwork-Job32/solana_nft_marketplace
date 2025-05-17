import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ChevronRight, FileText, MessageCircle, LifeBuoy, Mail } from "lucide-react"

// Mock data
const popularArticles = [
  {
    id: "1",
    title: "How to create your first NFT",
    category: "Getting Started",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Setting up your wallet",
    category: "Wallets",
    readTime: "3 min read",
  },
  {
    id: "3",
    title: "Understanding gas fees",
    category: "Transactions",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "How to buy and sell NFTs",
    category: "Marketplace",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Creating and managing collections",
    category: "Collections",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "Account security best practices",
    category: "Security",
    readTime: "5 min read",
  },
]

const categories = [
  {
    name: "Getting Started",
    icon: FileText,
    count: 12,
  },
  {
    name: "Wallets",
    icon: LifeBuoy,
    count: 8,
  },
  {
    name: "Marketplace",
    icon: MessageCircle,
    count: 15,
  },
  {
    name: "Collections",
    icon: FileText,
    count: 10,
  },
  {
    name: "Transactions",
    icon: FileText,
    count: 9,
  },
  {
    name: "Security",
    icon: LifeBuoy,
    count: 7,
  },
]

const faqs = [
  {
    question: "What is an NFT?",
    answer:
      "NFT stands for Non-Fungible Token. NFTs are unique digital items stored on a blockchain. Unlike cryptocurrencies such as Bitcoin, NFTs cannot be exchanged on a like-for-like basis, making each one unique.",
  },
  {
    question: "How do I create an NFT?",
    answer:
      "To create an NFT, you need to connect your wallet, upload your digital file, fill in the details about your NFT, and then mint it on the blockchain. Our platform makes this process simple and user-friendly.",
  },
  {
    question: "What wallets are supported?",
    answer:
      "We support a variety of wallets including MetaMask, Coinbase Wallet, WalletConnect, Phantom, Trust Wallet, and Rainbow. You can connect any of these wallets to start buying, selling, or creating NFTs.",
  },
  {
    question: "How much does it cost to create an NFT?",
    answer:
      "The cost of creating an NFT varies depending on the blockchain network and its current gas fees. Our platform supports multiple blockchains with different fee structures to accommodate various budgets.",
  },
  {
    question: "Can I sell an NFT I purchased?",
    answer:
      "Yes, you can resell NFTs you've purchased. Simply go to your profile, find the NFT you want to sell, click on it, and select the 'Sell' option to list it on the marketplace.",
  },
]

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A0A0A] py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins">How can we help you?</h1>
            <p className="text-white/70">
              Find answers to your questions and learn how to get the most out of NFTMarket
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input
                type="search"
                placeholder="Search for articles, tutorials, and more..."
                className="pl-10 bg-[#1A1A1A] border-none focus-visible:ring-primary h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold font-poppins mb-8 text-center">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <Link
                key={article.id}
                href={`/help-center/article/${article.id}`}
                className="bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl p-6 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-primary">{article.category}</span>
                    <h3 className="font-medium mt-1 mb-2">{article.title}</h3>
                    <p className="text-sm text-white/70">{article.readTime}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-white/50" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-[#0A0A0A]">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold font-poppins mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/help-center/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl p-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#2A2A2A] rounded-full p-3">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-white/70">{category.count} articles</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-poppins mb-8 text-center">Frequently Asked Questions</h2>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1A1A1A] p-1">
                <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  General
                </TabsTrigger>
                <TabsTrigger value="buying" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Buying
                </TabsTrigger>
                <TabsTrigger value="selling" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Selling
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="buying" className="mt-6">
                <div className="space-y-4">
                  {faqs.slice(2, 5).map((faq, index) => (
                    <div key={index} className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="selling" className="mt-6">
                <div className="space-y-4">
                  {faqs.slice(1, 4).map((faq, index) => (
                    <div key={index} className="bg-[#1A1A1A] rounded-xl p-6">
                      <h3 className="font-medium mb-2">{faq.question}</h3>
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <Link href="/help-center/faq">
                <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16 bg-[#0A0A0A]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold font-poppins">Still have questions?</h2>
            <p className="text-white/70">Can't find the answer you're looking for? Please contact our support team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Live Chat
              </Button>
              <Button variant="outline" className="border-primary text-white hover:bg-primary/10">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
