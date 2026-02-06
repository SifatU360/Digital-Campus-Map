import { motion } from 'framer-motion'
import { X, MapPin, Users, Zap, Tag } from 'lucide-react'
import type { Room } from '../types'
import { getRoomTypeIcon } from '../../utils/helpers'

interface RoomDetailProps {
  room: Room
  onClose: () => void
}

export function RoomDetail({ room, onClose }: RoomDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Header with background gradient and close button */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 h-32 sm:h-40">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <motion.div
          className="absolute bottom-4 left-4 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-6xl bg-white/20 p-3 rounded-xl">
            {getRoomTypeIcon(room.type)}
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">{room.name}</h2>
            <p className="text-blue-100">Room {room.number}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Room Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          {room.capacity && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-blue-50 p-4 rounded-lg"
            >
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">Capacity</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{room.capacity}</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-purple-50 p-4 rounded-lg"
          >
            <div className="flex items-center gap-2 text-purple-700 mb-1">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-semibold">Type</span>
            </div>
            <p className="text-lg font-bold text-purple-900 capitalize">
              {room.type.replace('_', ' ')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 p-4 rounded-lg col-span-2"
          >
            <div className="flex items-center gap-2 text-green-700 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Location</span>
            </div>
            <p className="text-gray-700">
              Floor {room.floor} • Room {room.number}
            </p>
          </motion.div>
        </div>

        {/* Facilities */}
        {room.facilities && room.facilities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-yellow-600" />
              Facilities
            </h3>
            <div className="space-y-2">
              {room.facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                >
                  <span className="text-gray-700 font-medium">{facility.name}</span>
                  {facility.count && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {facility.count}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 pt-4"
        >
          <button
            onClick={onClose}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105"
          >
            Navigate to Room
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
