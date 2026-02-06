import { createContext, useContext, useState, ReactNode } from 'react'
import { NavigationState, Campus, Building, Floor, Room } from '../types'

interface NavigationContextType {
  state: NavigationState
  selectCampus: (campus: Campus) => void
  selectBuilding: (building: Building) => void
  selectFloor: (floor: Floor) => void
  selectRoom: (room: Room) => void
  reset: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NavigationState>({})

  const selectCampus = (campus: Campus) => {
    setState(prev => ({
      ...prev,
      selectedCampus: campus,
      selectedBuilding: undefined,
      selectedFloor: undefined,
      selectedRoom: undefined,
    }))
  }

  const selectBuilding = (building: Building) => {
    setState(prev => ({
      ...prev,
      selectedBuilding: building,
      selectedFloor: undefined,
      selectedRoom: undefined,
    }))
  }

  const selectFloor = (floor: Floor) => {
    setState(prev => ({
      ...prev,
      selectedFloor: floor,
      selectedRoom: undefined,
    }))
  }

  const selectRoom = (room: Room) => {
    setState(prev => ({
      ...prev,
      selectedRoom: room,
    }))
  }

  const reset = () => {
    setState({})
  }

  return (
    <NavigationContext.Provider value={{ state, selectCampus, selectBuilding, selectFloor, selectRoom, reset }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}
