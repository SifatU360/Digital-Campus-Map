import { motion } from 'framer-motion'
import { Building as BuildingIcon, ChevronRight } from 'lucide-react'
import type { Building } from '../types'

interface BuildingSelectorProps {
  buildings: Building[]
  onSelectBuilding: (building: Building) => void
  selectedBuildingId?: string
}

export function BuildingSelector({
  buildings,
  onSelectBuilding,
  selectedBuildingId,
}: BuildingSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-3"
    >
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <BuildingIcon className="w-5 h-5 text-blue-600" />
        Buildings
      </h3>

      <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
        {buildings.map((building, index) => (
          <motion.button
            key={building.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectBuilding(building)}
            className={`p-4 rounded-xl transition border-2 text-left ${
              selectedBuildingId === building.id
                ? 'bg-blue-50 border-blue-500 shadow-md'
                : 'bg-white border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">{building.name}</h4>
                <p className="text-xs text-gray-500">{building.code}</p>
                <p className="text-xs text-gray-600 mt-1">
                  {building.floors.length} floors
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
