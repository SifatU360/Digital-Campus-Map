import { motion } from 'framer-motion'
import { Grid3x3 as Door, Users, Zap } from 'lucide-react'
import type { Room } from '../types'
import { getRoomTypeColor, getRoomTypeIcon } from '../../utils/helpers'

interface RoomListProps {
  rooms: Room[]
  onSelectRoom: (room: Room) => void
  selectedRoomId?: string
}

export function RoomList({
  rooms,
  onSelectRoom,
  selectedRoomId,
}: RoomListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-3"
    >
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <Door className="w-5 h-5 text-green-600" />
        Rooms
      </h3>

      <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
        {rooms.map((room, index) => (
          <motion.button
            key={room.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectRoom(room)}
            className={`p-4 rounded-xl transition border-2 text-left transform hover:shadow-lg ${
              selectedRoomId === room.id
                ? 'bg-green-50 border-green-500 shadow-md'
                : 'bg-white border-gray-200 hover:border-green-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{getRoomTypeIcon(room.type)}</span>
                  <h4 className="font-semibold text-gray-800">{room.name}</h4>
                </div>
                <p className="text-xs text-gray-500">Room {room.number}</p>
                
                {room.capacity && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                    <Users className="w-3 h-3" />
                    Capacity: {room.capacity}
                  </div>
                )}

                {room.facilities && room.facilities.length > 0 && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                    <Zap className="w-3 h-3" />
                    {room.facilities.length} facility/ies
                  </div>
                )}
              </div>
              
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRoomTypeColor(room.type)}`}>
                {room.type.replace('_', ' ')}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
