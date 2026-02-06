# 🗺️ Digital Campus Map

A beautiful, interactive Digital Campus Map application for universities. Navigate your campus intuitively with 3D-like visual design, smooth animations, and comprehensive facility information.

## ✨ Key Features

### 🔐 User Authentication
- User registration and login system
- Secure session management
- Protected routes and private pages
- User profile management

### 🗺️ Interactive Campus Map
- **Leaflet-based street map** showing all campuses
- **Click to select** campus locations
- **Real-time building display** for selected campus
- **Floor navigation** through building levels
- **Room explorer** with detailed information

### 🏢 Building Navigation
- Browse buildings on selected campus
- View floors in each building
- Explore rooms on each floor
- See room details, capacity, and facilities

### 🎨 Beautiful UI & Animations
- Smooth Framer Motion animations
- Glass morphism effects
- Responsive design (mobile, tablet, desktop)
- Modern gradient backgrounds
- Interactive hover effects
- Color-coded room types

### 🏪 Facility Management
- Laboratory spaces
- Cafeterias and food service
- Washrooms and restrooms
- Prayer rooms (multi-faith)
- Libraries and study areas
- Parking facilities
- Health centers

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation & Setup

```bash
# 1. Navigate to frontend directory
cd "Digital Campus Map/Frontend"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will open at `http://localhost:5174`

### Default Login
The app uses mock authentication for testing:
- Register with any email and password (min 6 characters)
- Or use any test credentials

## 📋 Project Structure

```
Digital Campus Map/
├── Frontend/                      # React + Vite frontend
│   ├── src/
│   │   ├── pages/               # Page components
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── HomePage.tsx
│   │   ├── components/          # Reusable components
│   │   │   ├── common/          # Header, Footer, etc
│   │   │   ├── auth/            # Auth components
│   │   │   ├── map/             # Leaflet map
│   │   │   └── navigator/       # Building/Floor/Room components
│   │   ├── contexts/            # React Context (Auth, Navigation)
│   │   ├── layouts/             # Layout wrappers
│   │   ├── types/               # TypeScript type definitions
│   │   ├── utils/               # Helper functions
│   │   ├── data/                # Mock campus data
│   │   └── main.tsx
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── vite.config.ts           # Vite configuration
│   └── package.json
│
└── Backend/                       # Backend (setup ready)
    └── (Node.js/Python structure)
```

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 19.2.0 |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion 12.33 |
| **Maps** | Leaflet 1.9.4 + React Leaflet 5.0 |
| **Routing** | React Router DOM 6 |
| **Icons** | Lucide React |
| **Build Tool** | Vite 7.2 |
| **Package Manager** | npm |

## 📖 How to Use

### 1. **Register/Login**
- Go to registration page
- Enter your name, email, and password
- Or login with existing credentials

### 2. **Explore Campus**
- View the interactive campus map
- Click on campus markers to select
- See buildings available in selected campus

### 3. **Browse Buildings**
- Select a building from the left panel
- View all floors in that building

### 4. **Navigate Floors**
- Select a floor to see all rooms on that level
- View room information and facilities

### 5. **View Room Details**
- Click a room to see:
  - Room name and number
  - Room type and purpose
  - Capacity information
  - Available facilities

## 🎨 Customization Guide

### Change Campus Data
Edit `src/data/campusData.ts`:
```typescript
export const mockCampuses: Campus[] = [
  {
    id: 'your-campus',
    name: 'Your University Name',
    location: { latitude: 28.5355, longitude: 77.1910 },
    address: 'Your Address',
    buildings: [ /* your buildings */ ]
  }
]
```

### Customize Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-blue',
  secondary: '#your-light',
  accent: '#your-orange'
}
```

### Add New Room Types
1. Update `src/types/index.ts` RoomType
2. Add icons in `src/utils/helpers.ts`

## 🔗 Backend Integration

To connect to a real backend:

1. Create `src/services/api.ts`:
```typescript
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api.com/api'
})

export const getCampuses = () => api.get('/campuses')
```

2. Update contexts to use API calls
3. Add environment variables for API URL

## 📱 Responsive Design

- **Mobile** (< 640px): Single column layout
- **Tablet** (640px - 1024px): 2-column layout
- **Desktop** (> 1024px): Full 4-column navigation

## 🔄 Workflow

```
User logs in → Selects campus → Selects building → 
Selects floor → Views rooms → Sees room details
```

## ⚙️ Available Commands

```bash
# Development
npm run dev              # Start dev server on port 5174

# Build & Deploy
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint

# Project structure
npm run build --report   # Show build analysis
```

## 🎯 Future Enhancements

- [ ] 3D building visualization
- [ ] AR campus navigation
- [ ] Real-time location tracking
- [ ] Event scheduling
- [ ] User ratings & reviews
- [ ] Campus search functionality
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Offline mode (PWA)

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 5175
```

**Build errors?**
```bash
# Clear and reinstall
rm -rf node_modules
npm install
npm run build
```

**TypeScript errors?**
```bash
# TypeScript errors don't block dev/build with Vite
npm run dev
```

## 📚 Documentation

- [Detailed Guide](./Frontend/DIGITAL_CAMPUS_MAP_GUIDE.md)
- [API Documentation](./Backend/README.md) (coming soon)
- [Contributing Guide](./CONTRIBUTING.md) (coming soon)

## 📄 License

MIT License - feel free to use this project for your university!

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💬 Support

For questions or issues, please:
- Open an issue in the repository
- Check existing documentation
- Review the example implementations

---

**Built with ❤️ for better campus navigation**

### Quick Links
- [Frontend Setup](./Frontend/README.md)
- [Backend Setup](./Backend/README.md)
- [Full Guide](./Frontend/DIGITAL_CAMPUS_MAP_GUIDE.md)
