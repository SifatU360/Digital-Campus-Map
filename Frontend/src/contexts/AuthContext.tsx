import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { User, LoginCredentials, RegisterCredentials } from '@/types'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const login = async (credentials: LoginCredentials) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: credentials.email.split('@')[0],
        createdAt: new Date(),
      }
      setUser(mockUser)
    } finally {
      setLoading(false)
    }
  }

  const register = async (credentials: RegisterCredentials) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: credentials.name,
        createdAt: new Date(),
      }
      setUser(mockUser)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
