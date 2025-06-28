"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, ArrowLeft, User, MapPin, Star } from "lucide-react"
import Link from "next/link"

interface UserData {
  id: string
  firstName: string
  lastName: string
  email: string
  location: string
}

interface Book {
  id: number
  title: string
  author: string
  owner: string
  location: string
  status: string
  rating: number
  description: string
  condition: string
}

export default function BorrowPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [availableBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      owner: "Sarah M.",
      location: "2.3 km away",
      status: "Available",
      rating: 4.8,
      description: "A classic American novel about the Jazz Age",
      condition: "Good",
    },
    {
      id: 2,
      title: "Digital Minimalism",
      author: "Cal Newport",
      owner: "Alex K.",
      location: "1.8 km away",
      status: "Available",
      rating: 4.6,
      description: "A philosophy for focusing on what matters in the digital age",
      condition: "Excellent",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      owner: "Maria L.",
      location: "3.1 km away",
      status: "Available",
      rating: 4.9,
      description: "An easy & proven way to build good habits & break bad ones",
      condition: "Good",
    },
    {
      id: 4,
      title: "The Midnight Library",
      author: "Matt Haig",
      owner: "John D.",
      location: "0.9 km away",
      status: "Available",
      rating: 4.7,
      description: "A novel about all the choices that go into a life well lived",
      condition: "Excellent",
    },
    {
      id: 5,
      title: "Educated",
      author: "Tara Westover",
      owner: "Emma R.",
      location: "2.7 km away",
      status: "Available",
      rating: 4.8,
      description: "A memoir about education, family, and the struggle for self-invention",
      condition: "Good",
    },
    {
      id: 6,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      owner: "David C.",
      location: "1.5 km away",
      status: "Available",
      rating: 4.5,
      description: "Timeless lessons on wealth, greed, and happiness",
      condition: "Fair",
    },
  ])

  const filteredBooks = availableBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCondition = selectedCondition === "All" || book.condition === selectedCondition
    return matchesSearch && matchesCondition
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      window.location.href = "/login"
    }
  }, [])

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">📚 PeerReads</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/choose" className="text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5 inline mr-1" />
                Back to Choose
              </Link>
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span className="font-medium">{user.firstName}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Books</h1>
            <p className="text-gray-600">Discover amazing books available in your community</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="All">All Conditions</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Books Grid */}
          {filteredBooks.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <Card
                  key={book.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="pb-3">
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-blue-600" />
                    </div>
                    <div className="flex justify-between items-start">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {book.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {book.condition}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-3">by {book.author}</CardDescription>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{book.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {book.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        {book.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Owner: <span className="font-medium">{book.owner}</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
