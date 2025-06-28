"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BookPlus, Search, ArrowRight, User } from "lucide-react"
import Link from "next/link"

interface UserData {
  id: string
  firstName: string
  lastName: string
  email: string
  location: string
}

export default function ChoosePage() {
  const [user, setUser] = useState<UserData | null>(null)

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      // Redirect to login if no user data
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
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span className="font-medium">
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  localStorage.removeItem("user")
                  window.location.href = "/"
                }}
                className="text-gray-600 hover:text-gray-800"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Welcome to PeerReads, <span className="text-blue-600">{user.firstName}!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">What would you like to do today?</p>
            <p className="text-lg text-gray-500">Choose your adventure in the world of book sharing</p>
          </div>

          {/* Choice Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Lend Books Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <BookPlus className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Lend Books
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">Share your books with the community</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  List your books and help fellow readers discover new stories. Build your reputation as a trusted
                  lender in your community.
                </p>
                <ul className="text-sm text-gray-500 mb-8 space-y-2">
                  <li>• List your personal book collection</li>
                  <li>• Set availability and lending terms</li>
                  <li>• Connect with local borrowers</li>
                  <li>• Track your lending history</li>
                </ul>
                <Link href="/lend">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg">
                    Start Lending
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Borrow Books Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Search className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Borrow Books
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Discover and borrow books from others
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore a vast collection of books from your local community. Find your next great read without buying
                  new books.
                </p>
                <ul className="text-sm text-gray-500 mb-8 space-y-2">
                  <li>• Browse books in your area</li>
                  <li>• Search by title, author, or genre</li>
                  <li>• Chat with book owners</li>
                  <li>• Schedule easy pickups</li>
                </ul>
                <Link href="/borrow">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                    Start Browsing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 bg-white/50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Location</h2>
              <p className="text-gray-600">📍 {user.location}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Books Available</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">Active Lenders</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-2">2.5km</div>
                <div className="text-gray-600">Average Distance</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
