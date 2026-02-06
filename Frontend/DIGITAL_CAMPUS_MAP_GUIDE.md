# Digital Campus Map - Complete Guide

A beautiful, interactive Digital Campus Map application built with React, Leaflet, Tailwind CSS, and Framer Motion. Navigate your campus intuitively with 3D-like visual design and smooth animations.

## 🌟 Features

### Authentication System
- **User Registration**: Create a new account with email and password
- **User Login**: Secure login system with validation
- **Protected Routes**: Access control for authenticated users
- **Session Management**: User sessions and logout functionality

### Campus Navigation
- **Street Map View**: Interactive Leaflet map showing all campuses
- **Campus Selection**: Click on campus markers to select and explore
- **Building Browser**: View all buildings in selected campus
- **Floor Navigation**: Navigate through different floors in a building
- **Room Explorer**: Browse detailed room information and facilities

### Room Details & Facilities
- **Room Information**: View room name, number, type, and capacity
- **Facility Listing**: See all available facilities in each room
- **Room Classification**: Different room types (classroom, lab, cafeteria, etc.)
- **Visual Indicators**: Icons and color-coded room types for quick identification

### User Interface
- **Beautiful Animations**: Smooth transitions with Framer Motion
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Glass Morphism Effects**: Modern UI with frosted glass effects
- **Dark/Light Mode Ready**: Tailwind-based styling for easy theme switching
- **Interactive Components**: Hover effects and visual feedback on all interactions

### Campus Facilities
- **Laboratory**: Well-equipped labs with computers and equipment
- **Cafeteria**: Food service areas with seating
- **Washrooms**: Sanitary facilities throughout campus
- **Prayer Rooms**: Multi-faith prayer spaces
- **Libraries**: Study spaces with digital resources
- **Parking**: Vehicle parking areas
- **Health Center**: Medical facilities

## 🛠️ Technology Stack

```
Frontend:
- React 19.2.0 - UI library
- TypeScript 5.9 - Type safety
- Tailwind CSS 3 - Styling
- Framer Motion 12.33 - Animations
- Leaflet 1.9.4 - Interactive maps
- React Leaflet 5.0 - React wrapper for Leaflet
- React Router DOM 6 - Navigation
- Lucide React - Icon library
- Zustand - State management (optional)
- Axios - HTTP client

Build Tools:
- Vite 7.2 - Fast build tool
- ESLint 9 - Code linting
```

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── HomePage.tsx
│   ├── components/
│   │   ├── common/
│   │   │   └── Header.tsx
│   │   ├── auth/
│   │   ├── map/
│   │   │   └── CampusMap.tsx
│   │   └── navigator/
│   │       ├── BuildingSelector.tsx
│   │       ├── FloorNavigator.tsx
│   │       ├── RoomList.tsx
│   │       └── RoomDetail.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── AuthLayout.tsx
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── NavigationContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── data/
│   │   └── campusData.ts
│   ├── hooks/
│   ├── services/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── App.css
├── public/
├── tailwind.config.ts
├── postcss.config.mjs
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
cd Frontend
npm install
```

2. **Start development server**:
```bash
npm run dev
```

The application will open at `http://localhost:5174`

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 📝 Authentication

### Test Credentials
The authentication system uses mock data for testing. You can register with any email and password to test the system:

- **Email**: any valid email format
- **Password**: minimum 6 characters

After authentication, you'll have access to the campus map and navigation features.

## 🗺️ Campus Data Structure

### Campus
```typescript
{
  id: string
  name: string
  location: { latitude: number, longitude: number }
  address: string
  description: string
  buildings: Building[]
}
```

### Building
```typescript
{
  id: string
  name: string
  code: string
  location: { latitude: number, longitude: number }
  floors: Floor[]
  facilities: Facility[]
}
```

### Floor
```typescript
{
  id: string
  number: number
  name: string
  layout?: string
  rooms: Room[]
}
```

### Room
```typescript
{
  id: string
  number: string
  name: string
  type: RoomType  // classroom | lab | office | etc.
  floor: number
  capacity?: number
  facilities?: RoomFacility[]
}
```

## 🎨 Customization

### Update Campus Data
Edit `src/data/campusData.ts` to add your university's buildings, floors, and rooms:

```typescript
export const mockCampuses: Campus[] = [
  {
    id: 'your-campus-1',
    name: 'Your University Main Campus',
    location: { latitude: YOUR_LAT, longitude: YOUR_LONG },
    // ... rest of data
  }
]
```

### Modify Colors and Themes
Update `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    }
  }
}
```

### Add New Room Types
Edit `src/types/index.ts` and add to the `RoomType` union:

```typescript
type RoomType = 'classroom' | 'lab' | 'your_room_type' | ...
```

Then add corresponding icons in `src/utils/helpers.ts`.

## 🔌 API Integration

The application is currently using mock data. To connect to a real backend:

### 1. Create API Service
Create `src/services/api.ts`:

```typescript
import axios from 'axios'

const API_BASE_URL = 'https://your-api.com/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const campusService = {
  getCampuses: () => apiClient.get('/campuses'),
  getBuildigns: (campusId: string) => apiClient.get(`/campuses/${campusId}/buildings`),
  // ... more endpoints
}
```

### 2. Update Components
Replace mock data fetching with API calls:

```typescript
import { campusService } from '../services/api'

// In HomePage.tsx
useEffect(() => {
  campusService.getCampuses()
    .then(res => setMockCampuses(res.data))
    .catch(err => console.error(err))
}, [])
```

### 3. Update Authentication
Connect auth context to your backend:

```typescript
const login = async (credentials: LoginCredentials) => {
  const response = await apiClient.post('/auth/login', credentials)
  const { user, token } = response.data
  localStorage.setItem('token', token)
  setUser(user)
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px (single column layout)
- **Tablet**: 640px - 1024px (adjusted grid)
- **Desktop**: > 1024px (full 4-column layout)

## 🔐 Security Notes

**⚠️ Important for Production:**

1. Never store sensitive data in localStorage (current mock implementation)
2. Use secure HTTP-only cookies for tokens
3. Implement proper CSRF protection
4. Validate all user inputs on the backend
5. Use HTTPS in production
6. Implement rate limiting for authentication endpoints
7. Add proper error handling and logging

## 🎯 Future Enhancements

- [ ] 3D building visualization
- [ ] AR campus navigation
- [ ] Real-time location tracking
- [ ] Event scheduling and notifications
- [ ] User favorites and bookmarks
- [ ] Campus search functionality
- [ ] Directions and turn-by-turn navigation
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Push notifications
- [ ] Offline mode with service workers

## 📚 Code Examples

### Using Navigation Context
```typescript
import { useNavigation } from '../contexts/NavigationContext'

function MyComponent() {
  const { state, selectCampus, selectBuilding } = useNavigation()
  
  return (
    <button onClick={() => selectCampus(campus)}>
      {state.selectedCampus?.name || 'Select Campus'}
    </button>
  )
}
```

### Using Authentication
```typescript
import { useAuth } from '../contexts/AuthContext'

function ProfileComponent() {
  const { user, logout } = useAuth()
  
  if (!user) return <p>Not logged in</p>
  
  return (
    <>
      <h1>Welcome, {user.name}</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}
```

### Custom Animations
```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  Animated content
</motion.div>
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 5175
```

### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
npm run build
```

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, please create an issue in the repository.

---

**Built with ❤️ for better campus navigation**
