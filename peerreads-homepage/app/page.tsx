import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  MessageCircle,
  QrCode,
  History,
  Database,
  MapPin,
  Star,
  ArrowRight,
  Menu,
  Github,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react"
import Link from "next/link"

// Sample book data
const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    owner: "Sarah M.",
    location: "2.3 km away",
    status: "Available",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 2,
    title: "Digital Minimalism",
    author: "Cal Newport",
    owner: "Alex K.",
    location: "1.8 km away",
    status: "Available",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    owner: "Maria L.",
    location: "3.1 km away",
    status: "Borrowed",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 4,
    title: "The Midnight Library",
    author: "Matt Haig",
    owner: "John D.",
    location: "0.9 km away",
    status: "Available",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    owner: "Emma R.",
    location: "2.7 km away",
    status: "Available",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 6,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    owner: "David C.",
    location: "1.5 km away",
    status: "Available",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=150",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">📚 PeerReads</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/browse" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Browse Books
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                How It Works
              </Link>
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
                </Link>
              </div>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Lend, Borrow, and Share Books — <span className="text-blue-600">Peer to Peer</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover nearby readers, exchange books, and grow your library — physically or digitally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Browse Books
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                >
                  Get Started
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                    <div className="h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-3"></div>
                    <div className="text-sm font-semibold text-gray-800">The Great Gatsby</div>
                    <div className="text-xs text-gray-600">Available nearby</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform mt-8">
                    <div className="h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-lg mb-3"></div>
                    <div className="text-sm font-semibold text-gray-800">Digital Minimalism</div>
                    <div className="text-xs text-gray-600">Digital copy</div>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Books Near You</h2>
            <p className="text-xl text-gray-600">Discover amazing books available in your neighborhood</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <Card
                key={book.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant={book.status === "Available" ? "default" : "secondary"}
                      className={
                        book.status === "Available" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                      }
                    >
                      {book.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-3">by {book.author}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {book.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {book.rating}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    Owner: <span className="font-medium">{book.owner}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start sharing books with your community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Browse or List Books</h3>
              <p className="text-gray-600 leading-relaxed">
                Search for books in your area or list your own books to share with the community.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Chat & Confirm with QR</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with book owners through our secure chat and use QR codes for easy pickup confirmation.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Star className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Borrow, Return & Rate</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy your book, return it on time, and rate your experience to help the community grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose PeerReads?</h2>
            <p className="text-xl text-gray-600">Built with cutting-edge technology for the modern reader</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-2xl p-6 mb-4 group-hover:bg-blue-200 transition-colors">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Chat</h3>
              <p className="text-gray-600 text-sm">Instant messaging with book owners for seamless coordination</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 rounded-2xl p-6 mb-4 group-hover:bg-green-200 transition-colors">
                <QrCode className="h-12 w-12 text-green-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">QR Code Pickup</h3>
              <p className="text-gray-600 text-sm">Secure and contactless book exchanges with QR verification</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 rounded-2xl p-6 mb-4 group-hover:bg-purple-200 transition-colors">
                <History className="h-12 w-12 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lending History</h3>
              <p className="text-gray-600 text-sm">Track your reading journey and build your reputation</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-2xl p-6 mb-4 group-hover:bg-orange-200 transition-colors">
                <Database className="h-12 w-12 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IPFS Digital Books</h3>
              <p className="text-gray-600 text-sm">Decentralized storage for digital books with blockchain security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Join the Library Revolution?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with readers in your community and discover your next favorite book
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">📚 PeerReads</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building the future of book sharing through decentralized, peer-to-peer exchanges.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/github" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PeerReads. All rights reserved. Built with ❤️ for book lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
