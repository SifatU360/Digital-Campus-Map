import { motion } from 'framer-motion'
import { Menu, LogOut, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export function Header() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-6 h-6" />
            <h1 className="text-2xl font-bold gradient-text">Digital Campus Map</h1>
          </motion.div>

          {/* User Info and Menu */}
          <div className="flex items-center gap-4 relative">
            {user && (
              <motion.div 
                className="text-right hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-blue-100">{user.email}</p>
              </motion.div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-blue-500 rounded-lg transition"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-16 bg-white text-gray-800 rounded-lg shadow-lg p-2 z-50 min-w-48"
              >
                <button
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-lg transition text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}
