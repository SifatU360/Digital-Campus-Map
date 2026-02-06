// User Authentication Types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  user: User
  token: string
}

// Campus Map Types
export interface Location {
  latitude: number
  longitude: number
}

export interface Campus {
  id: string
  name: string
  location: Location
  address: string
  description: string
  buildings: Building[]
}

export interface Building {
  id: string
  name: string
  code: string
  location: Location
  image?: string
  floors: Floor[]
  facilities: Facility[]
}

export interface Floor {
  id: string
  number: number
  name: string
  layout?: string
  rooms: Room[]
}

export interface Room {
  id: string
  number: string
  name: string
  type: RoomType
  floor: number
  capacity?: number
  image?: string
  facilities?: RoomFacility[]
}

export type RoomType = 'classroom' | 'lab' | 'office' | 'auditorium' | 'library' | 'cafeteria' | 'washroom' | 'prayer_room' | 'meeting_room' | 'storage'

export interface RoomFacility {
  name: string
  count?: number
}

export interface Facility {
  id: string
  name: string
  type: FacilityType
  location: Location
  description?: string
  hours?: string
}

export type FacilityType = 'laboratory' | 'cafeteria' | 'washroom' | 'prayer_room' | 'gym' | 'library' | 'parking' | 'health_center'

// Navigation Types
export interface NavigationState {
  selectedCampus?: Campus
  selectedBuilding?: Building
  selectedFloor?: Floor
  selectedRoom?: Room
}

export interface MapMarker {
  id: string
  name: string
  location: Location
  type: 'campus' | 'building' | 'facility'
  icon?: string
}
