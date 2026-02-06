import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Campus } from '../types'

interface CampusMapProps {
  campuses: Campus[]
  onSelectCampus: (campus: Campus) => void
}

export function CampusMap({ campuses, onSelectCampus }: CampusMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Initialize map
    map.current = L.map(mapContainer.current).setView([28.5355, 77.1910], 16)

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current)

    // Add campus markers
    campuses.forEach((campus) => {
      const marker = L.circleMarker(
        [campus.location.latitude, campus.location.longitude],
        {
          radius: 12,
          fillColor: '#0066cc',
          color: '#003d99',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.7,
        }
      ).addTo(map.current!)

      const popupContent = `
        <div class="text-center">
          <h3 class="font-bold text-blue-700">${campus.name}</h3>
          <p class="text-sm text-gray-600">${campus.address}</p>
          <button class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
            Explore
          </button>
        </div>
      `

      marker.bindPopup(popupContent)
      marker.on('click', () => onSelectCampus(campus))
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [campuses, onSelectCampus])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full rounded-lg overflow-hidden shadow-lg"
    >
      <div ref={mapContainer} className="w-full h-full" />
    </motion.div>
  )
}
