import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/common/Header'
import { MainLayout } from '../layouts/MainLayout'
import { CampusMap } from '../components/map/CampusMap'
import { BuildingSelector } from '../components/navigator/BuildingSelector'
import { FloorNavigator } from '../components/navigator/FloorNavigator'
import { RoomList } from '../components/navigator/RoomList'
import { RoomDetail } from '../components/navigator/RoomDetail'
import { useNavigation } from '@/hooks/useNavigation'
import { mockCampuses } from '../data/campusData'
import type { Campus, Building, Floor, Room } from '../types'
import { MapPin, Building as BuildingIcon, Layers, Grid3x3 as Door } from 'lucide-react'

export function HomePage() {
  const { state, selectCampus, selectBuilding, selectFloor, selectRoom } = useNavigation()
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const handleSelectCampus = (campus: Campus) => {
    selectCampus(campus)
  }

  const handleSelectBuilding = (building: Building) => {
    selectBuilding(building)
  }

  const handleSelectFloor = (floor: Floor) => {
    selectFloor(floor)
  }

  const handleSelectRoom = (room: Room) => {
    selectRoom(room)
    setSelectedRoom(room)
  }

  return (
    <MainLayout>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-6 text-sm text-gray-600 flex-wrap"
        >
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>Map</span>
          {state.selectedCampus && (
            <>
              <span>/</span>
              <span className="text-blue-600 font-semibold">{state.selectedCampus.name}</span>
            </>
          )}
          {state.selectedBuilding && (
            <>
              <span>/</span>
              <span className="text-blue-600 font-semibold">{state.selectedBuilding.name}</span>
            </>
          )}
          {state.selectedFloor && (
            <>
              <span>/</span>
              <span className="text-blue-600 font-semibold">Floor {state.selectedFloor.number}</span>
            </>
          )}
          {state.selectedRoom && (
            <>
              <span>/</span>
              <span className="text-blue-600 font-semibold">{state.selectedRoom.name}</span>
            </>
          )}
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Campus Selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 shadow-card"
            >
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                Campus
              </h3>
              <div className="space-y-2">
                {mockCampuses.map((campus, index) => (
                  <motion.button
                    key={campus.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={() => handleSelectCampus(campus)}
                    className={`w-full text-left p-3 rounded-lg transition border-2 ${
                      state.selectedCampus?.id === campus.id
                        ? 'bg-blue-50 border-blue-500 shadow-md'
                        : 'bg-gray-50 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-800">{campus.name}</p>
                    <p className="text-xs text-gray-600">{campus.buildings.length} buildings</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Buildings */}
            {state.selectedCampus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 shadow-card"
              >
                <BuildingSelector
                  buildings={state.selectedCampus.buildings}
                  onSelectBuilding={handleSelectBuilding}
                  selectedBuildingId={state.selectedBuilding?.id}
                />
              </motion.div>
            )}

            {/* Floors */}
            {state.selectedBuilding && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 shadow-card"
              >
                <FloorNavigator
                  floors={state.selectedBuilding.floors}
                  onSelectFloor={handleSelectFloor}
                  selectedFloorId={state.selectedFloor?.id}
                />
              </motion.div>
            )}

            {/* Rooms */}
            {state.selectedFloor && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 shadow-card"
              >
                <RoomList
                  rooms={state.selectedFloor.rooms}
                  onSelectRoom={handleSelectRoom}
                  selectedRoomId={state.selectedRoom?.id}
                />
              </motion.div>
            )}
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {selectedRoom ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full"
              >
                <RoomDetail
                  room={selectedRoom}
                  onClose={() => {
                    setSelectedRoom(null)
                  }}
                />
              </motion.div>
            ) : state.selectedFloor ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-card min-h-96"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Door className="w-16 h-16 text-blue-600 opacity-20" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {state.selectedBuilding?.name} - Floor {state.selectedFloor.number}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Select a room from the left panel to view details
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Total rooms on this floor: {state.selectedFloor.rooms.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : state.selectedBuilding ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-card min-h-96"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Layers className="w-16 h-16 text-purple-600 opacity-20" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {state.selectedBuilding.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Select a floor from the left panel to explore rooms
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Total floors: {state.selectedBuilding.floors.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : state.selectedCampus ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-card min-h-96"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BuildingIcon className="w-16 h-16 text-blue-600 opacity-20" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {state.selectedCampus.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Select a building from the left panel to get started
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Total buildings: {state.selectedCampus.buildings.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-card min-h-96"
              >
                <CampusMap campuses={mockCampuses} onSelectCampus={handleSelectCampus} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
