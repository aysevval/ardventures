"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type User = {
  email: string
  name: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u: User & { password: string }) => u.email === email && u.password === password)
    if (user) {
      setUser({ email: user.email, name: user.name })
      localStorage.setItem("user", JSON.stringify({ email: user.email, name: user.name }))
      return true
    }
    return false
  }

  const register = async (email: string, password: string, name: string) => {
   
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.some((u: User) => u.email === email)) {
      return false
    }
    users.push({ email, password, name })
    localStorage.setItem("users", JSON.stringify(users))
    setUser({ email, name })
    localStorage.setItem("user", JSON.stringify({ email, name }))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

