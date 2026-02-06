import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { NavigationState, Campus, Building, Floor, Room } from '@/types'

interface NavigationContextType {
  state: NavigationState
  selectCampus: (campus: Campus) => void
  selectBuilding: (building: Building) => void
  selectFloor: (floor: Floor) => void
  selectRoom: (room: Room) => void
  reset: () => void
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NavigationState>({})

  const selectCampus = (campus: Campus) => {
    setState((prev: NavigationState) => ({
      ...prev,
      selectedCampus: campus,
      selectedBuilding: undefined,
      selectedFloor: undefined,
      selectedRoom: undefined,
    }))
  }

  const selectBuilding = (building: Building) => {
    setState((prev: NavigationState) => ({
      ...prev,
      selectedBuilding: building,
      selectedFloor: undefined,
      selectedRoom: undefined,
    }))
  }

  const selectFloor = (floor: Floor) => {
    setState((prev: NavigationState) => ({
      ...prev,
      selectedFloor: floor,
      selectedRoom: undefined,
    }))
  }

  const selectRoom = (room: Room) => {
    setState((prev: NavigationState) => ({
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
