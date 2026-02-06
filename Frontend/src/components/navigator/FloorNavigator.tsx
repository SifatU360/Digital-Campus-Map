import { motion } from 'framer-motion'
import { Layers, ChevronRight } from 'lucide-react'
import type { Floor } from '../types'

interface FloorNavigatorProps {
  floors: Floor[]
  onSelectFloor: (floor: Floor) => void
  selectedFloorId?: string
}

export function FloorNavigator({
  floors,
  onSelectFloor,
  selectedFloorId,
}: FloorNavigatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-3"
    >
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <Layers className="w-5 h-5 text-purple-600" />
        Floors
      </h3>

      <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto pr-2">
        {floors.map((floor, index) => (
          <motion.button
            key={floor.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectFloor(floor)}
            className={`p-3 rounded-lg transition border-2 text-left ${
              selectedFloorId === floor.id
                ? 'bg-purple-50 border-purple-500 shadow-md'
                : 'bg-white border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">
                  Floor {floor.number}
                </h4>
                <p className="text-xs text-gray-600">{floor.rooms.length} rooms</p>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
