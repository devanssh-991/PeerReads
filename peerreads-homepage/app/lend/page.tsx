"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Plus, ArrowLeft, User, MapPin } from "lucide-react"
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
  description: string
  condition: string
  status: string
}

export default function LendPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [myBooks, setMyBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A philosophical book about following your dreams",
      condition: "Good",
      status: "Available",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian social science fiction novel",
      condition: "Excellent",
      status: "Borrowed",
    },
  ])
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    condition: "Good",
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      window.location.href = "/login"
    }
  }, [])

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault()
    const newBook: Book = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      description: formData.description,
      condition: formData.condition,
      status: "Available",
    }
    setMyBooks([...myBooks, newBook])
    setFormData({ title: "", author: "", description: "", condition: "Good" })
    setShowAddForm(false)
  }

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Lend Your Books</h1>
            <p className="text-gray-600">
              Share your collection with the community and help others discover great reads
            </p>
          </div>

          {/* Add Book Button */}
          <div className="mb-8">
            <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="h-5 w-5 mr-2" />
              Add New Book
            </Button>
          </div>

          {/* Add Book Form */}
          {showAddForm && (
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle>Add a New Book</CardTitle>
                <CardDescription>Fill in the details of the book you want to lend</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddBook} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Book Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter book title"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="Enter author name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Brief description of the book"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <select
                      id="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                      <option value="Poor">Poor</option>
                    </select>
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Add Book
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* My Books Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Books ({myBooks.length})</h2>
            {myBooks.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No books added yet</h3>
                  <p className="text-gray-500 mb-4">Start by adding your first book to share with the community</p>
                  <Button onClick={() => setShowAddForm(true)} className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Your First Book
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myBooks.map((book) => (
                  <Card key={book.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant={book.status === "Available" ? "default" : "secondary"}
                          className={
                            book.status === "Available" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                          }
                        >
                          {book.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {book.condition}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <CardDescription>by {book.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {user.location}
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
