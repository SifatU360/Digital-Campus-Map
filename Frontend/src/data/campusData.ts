import type { Campus, Facility } from '../types'

export const mockCampuses: Campus[] = [
  {
    id: 'campus-1',
    name: 'Main Campus',
    location: { latitude: 28.5355, longitude: 77.1910 },
    address: 'New Delhi, India',
    description: 'The main campus with multiple academic and administrative buildings',
    buildings: [
      {
        id: 'building-1',
        name: 'Engineering Building',
        code: 'EB-A',
        location: { latitude: 28.5355, longitude: 77.1910 },
        image: 'https://images.unsplash.com/photo-1564629613280-1b18bf800e7a?w=400',
        floors: [
          {
            id: 'floor-1-1',
            number: 0,
            name: 'Ground Floor',
            rooms: [
              {
                id: 'room-1-1',
                number: '101',
                name: 'Computer Lab',
                type: 'lab',
                floor: 0,
                capacity: 50,
                facilities: [{ name: 'Computers', count: 50 }, { name: 'Projector' }]
              },
              {
                id: 'room-1-2',
                number: '102',
                name: 'Electronics Lab',
                type: 'lab',
                floor: 0,
                capacity: 40,
                facilities: [{ name: 'Breadboards', count: 40 }, { name: 'Multimeters', count: 40 }]
              },
              {
                id: 'room-1-3',
                number: '103',
                name: 'Cafeteria',
                type: 'cafeteria',
                floor: 0,
                capacity: 200,
                facilities: [{ name: 'Seating', count: 200 }, { name: 'Food Counter', count: 3 }]
              },
            ]
          },
          {
            id: 'floor-1-2',
            number: 1,
            name: 'First Floor',
            rooms: [
              {
                id: 'room-1-4',
                number: '201',
                name: 'Classroom A',
                type: 'classroom',
                floor: 1,
                capacity: 60,
                facilities: [{ name: 'Seats', count: 60 }, { name: 'Boards' }]
              },
              {
                id: 'room-1-5',
                number: '202',
                name: 'Classroom B',
                type: 'classroom',
                floor: 1,
                capacity: 60,
                facilities: [{ name: 'Seats', count: 60 }]
              },
              {
                id: 'room-1-6',
                number: '203',
                name: 'Prayer Room',
                type: 'prayer_room',
                floor: 1,
                capacity: 30,
                facilities: [{ name: 'Prayer Mats', count: 30 }]
              },
            ]
          },
          {
            id: 'floor-1-3',
            number: 2,
            name: 'Second Floor',
            rooms: [
              {
                id: 'room-1-7',
                number: '301',
                name: 'Department Office',
                type: 'office',
                floor: 2,
                facilities: [{ name: 'Desks', count: 10 }]
              },
              {
                id: 'room-1-8',
                number: '302',
                name: 'Faculty Lounge',
                type: 'meeting_room',
                floor: 2,
                capacity: 20,
                facilities: [{ name: 'Seating', count: 20 }]
              },
            ]
          },
        ],
        facilities: []
      },
      {
        id: 'building-2',
        name: 'Science Building',
        code: 'SB-C',
        location: { latitude: 28.5356, longitude: 77.1915 },
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
        floors: [
          {
            id: 'floor-2-1',
            number: 0,
            name: 'Ground Floor',
            rooms: [
              {
                id: 'room-2-1',
                number: '101',
                name: 'Physics Lab',
                type: 'lab',
                floor: 0,
                capacity: 45,
                facilities: [{ name: 'Lab Equipment', count: 45 }]
              },
              {
                id: 'room-2-2',
                number: '102',
                name: 'Chemistry Lab',
                type: 'lab',
                floor: 0,
                capacity: 40,
                facilities: [{ name: 'Chemical Hoods', count: 8 }]
              },
              {
                id: 'room-2-3',
                number: '103',
                name: 'Washroom',
                type: 'washroom',
                floor: 0,
                facilities: [{ name: 'Stalls', count: 8 }]
              },
            ]
          },
          {
            id: 'floor-2-2',
            number: 1,
            name: 'First Floor',
            rooms: [
              {
                id: 'room-2-4',
                number: '201',
                name: 'Biology Lab',
                type: 'lab',
                floor: 1,
                capacity: 50,
                facilities: [{ name: 'Microscopes', count: 50 }]
              },
              {
                id: 'room-2-5',
                number: '202',
                name: 'Lecture Hall',
                type: 'auditorium',
                floor: 1,
                capacity: 150,
                facilities: [{ name: 'Seats', count: 150 }, { name: 'Stage' }]
              },
            ]
          },
        ],
        facilities: []
      },
      {
        id: 'building-3',
        name: 'Library & Resource Center',
        code: 'LRC-D',
        location: { latitude: 28.5354, longitude: 77.1920 },
        image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400',
        floors: [
          {
            id: 'floor-3-1',
            number: 0,
            name: 'Ground Floor',
            rooms: [
              {
                id: 'room-3-1',
                number: '101',
                name: 'Main Library',
                type: 'library',
                floor: 0,
                capacity: 200,
                facilities: [{ name: 'Study Desks', count: 100 }, { name: 'Book Shelves', count: 200 }]
              },
              {
                id: 'room-3-2',
                number: '102',
                name: 'Digital Library',
                type: 'library',
                floor: 0,
                capacity: 60,
                facilities: [{ name: 'Computers', count: 60 }]
              },
            ]
          },
          {
            id: 'floor-3-2',
            number: 1,
            name: 'First Floor',
            rooms: [
              {
                id: 'room-3-3',
                number: '201',
                name: 'Reference Section',
                type: 'library',
                floor: 1,
                capacity: 80,
                facilities: [{ name: 'Study Tables', count: 20 }]
              },
            ]
          },
        ],
        facilities: []
      },
    ]
  },
  {
    id: 'campus-2',
    name: 'North Campus',
    location: { latitude: 28.5400, longitude: 77.1950 },
    address: 'North Delhi, India',
    description: 'Satellite campus with sports and recreation facilities',
    buildings: [
      {
        id: 'building-4',
        name: 'Sports Complex',
        code: 'SC-E',
        location: { latitude: 28.5400, longitude: 77.1950 },
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
        floors: [
          {
            id: 'floor-4-1',
            number: 0,
            name: 'Ground Floor',
            rooms: [
              {
                id: 'room-4-1',
                number: '101',
                name: 'Gymnasium',
                type: 'lab',
                floor: 0,
                capacity: 100,
                facilities: [{ name: 'Equipment Stations', count: 20 }]
              },
            ]
          },
        ],
        facilities: []
      },
    ]
  }
]

export const mockFacilities: Facility[] = [
  {
    id: 'fac-1',
    name: 'Main Cafeteria',
    type: 'cafeteria',
    location: { latitude: 28.5355, longitude: 77.1910 },
    description: 'Main cafeteria serving breakfast, lunch and dinner',
    hours: '7:00 AM - 9:00 PM'
  },
  {
    id: 'fac-2',
    name: 'Medical Center',
    type: 'health_center',
    location: { latitude: 28.5356, longitude: 77.1912 },
    description: 'Health center with basic medical facilities',
    hours: '24/7'
  },
  {
    id: 'fac-3',
    name: 'Parking Area A',
    type: 'parking',
    location: { latitude: 28.5357, longitude: 77.1908 },
    description: 'Multi-level parking structure',
    hours: '24/7'
  },
  {
    id: 'fac-4',
    name: 'Prayer Room',
    type: 'prayer_room',
    location: { latitude: 28.5354, longitude: 77.1918 },
    description: 'Multi-faith prayer room',
    hours: '24/7'
  },
]
