export interface User {
  _id?: string
  firstName: string
  lastName: string
  email: string
  password: string
  location: string
  subscribeNewsletter: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserInput {
  firstName: string
  lastName: string
  email: string
  password: string
  location: string
  subscribeNewsletter: boolean
}
