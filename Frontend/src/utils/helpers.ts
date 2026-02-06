export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function getRoomTypeColor(type: string): string {
  const colors: Record<string, string> = {
    classroom: 'bg-blue-100 text-blue-800',
    lab: 'bg-purple-100 text-purple-800',
    office: 'bg-green-100 text-green-800',
    auditorium: 'bg-red-100 text-red-800',
    library: 'bg-yellow-100 text-yellow-800',
    cafeteria: 'bg-orange-100 text-orange-800',
    washroom: 'bg-teal-100 text-teal-800',
    prayer_room: 'bg-pink-100 text-pink-800',
    meeting_room: 'bg-indigo-100 text-indigo-800',
    storage: 'bg-gray-100 text-gray-800',
  }
  return colors[type] || 'bg-gray-100 text-gray-800'
}

export function getRoomTypeIcon(type: string): string {
  const icons: Record<string, string> = {
    classroom: '🎓',
    lab: '🔬',
    office: '💼',
    auditorium: '🎭',
    library: '📚',
    cafeteria: '🍽️',
    washroom: '🚿',
    prayer_room: '🙏',
    meeting_room: '🤝',
    storage: '📦',
  }
  return icons[type] || '📍'
}

export function getFacilityIcon(type: string): string {
  const icons: Record<string, string> = {
    laboratory: '🔬',
    cafeteria: '🍽️',
    washroom: '🚿',
    prayer_room: '🙏',
    gym: '💪',
    library: '📚',
    parking: '🅿️',
    health_center: '🏥',
  }
  return icons[type] || '📍'
}
