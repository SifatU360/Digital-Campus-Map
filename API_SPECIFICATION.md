# API Specification for Digital Campus Map

## Base URL
```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

## Authentication
All protected endpoints require JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 🔐 Authentication Endpoints

### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response 201:
{
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe",
    "createdAt": "2024-02-06T10:00:00Z"
  },
  "token": "jwt_token_here"
}
```

### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response 200:
{
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe",
    "createdAt": "2024-02-06T10:00:00Z"
  },
  "token": "jwt_token_here"
}
```

### Get Current User
```http
GET /auth/me
Authorization: Bearer <token>

Response 200:
{
  "id": "uuid",
  "email": "john@example.com",
  "name": "John Doe",
  "avatar": "url_or_null",
  "createdAt": "2024-02-06T10:00:00Z"
}
```

### Logout
```http
POST /auth/logout
Authorization: Bearer <token>

Response 200:
{
  "message": "Logged out successfully"
}
```

### Refresh Token
```http
POST /auth/refresh
Authorization: Bearer <token>

Response 200:
{
  "token": "new_jwt_token"
}
```

---

## 🗺️ Campus Endpoints

### List All Campuses
```http
GET /campuses?page=1&limit=10&search=main

Query Parameters:
- page: number (default: 1)
- limit: number (default: 10)
- search: string (optional, search by name or address)

Response 200:
{
  "data": [
    {
      "id": "uuid",
      "name": "Main Campus",
      "location": {
        "latitude": 28.5355,
        "longitude": 77.1910
      },
      "address": "New Delhi, India",
      "description": "Main academic campus",
      "buildingsCount": 5,
      "createdAt": "2024-02-06T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 2,
    "pages": 1
  }
}
```

### Get Single Campus
```http
GET /campuses/:id

Response 200:
{
  "id": "uuid",
  "name": "Main Campus",
  "location": {
    "latitude": 28.5355,
    "longitude": 77.1910
  },
  "address": "New Delhi, India",
  "description": "Main academic campus",
  "buildings": [
    {
      "id": "uuid",
      "name": "Engineering Building",
      "code": "EB-A",
      "location": {
        "latitude": 28.5355,
        "longitude": 77.1910
      }
    }
  ],
  "createdAt": "2024-02-06T10:00:00Z"
}
```

### Create Campus (Admin Only)
```http
POST /campuses
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "South Campus",
  "address": "South Delhi, India",
  "description": "Satellite campus",
  "location": {
    "latitude": 28.5400,
    "longitude": 77.1950
  }
}

Response 201:
{
  "id": "uuid",
  "name": "South Campus",
  "address": "South Delhi, India",
  "location": {...},
  "createdAt": "2024-02-06T10:00:00Z"
}
```

### Update Campus (Admin Only)
```http
PUT /campuses/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Campus Name",
  "description": "Updated description"
}

Response 200:
{
  "id": "uuid",
  "name": "Updated Campus Name",
  "description": "Updated description",
  "updatedAt": "2024-02-06T10:00:00Z"
}
```

### Delete Campus (Admin Only)
```http
DELETE /campuses/:id
Authorization: Bearer <token>

Response 204: No Content
```

---

## 🏢 Building Endpoints

### Get Buildings by Campus
```http
GET /campuses/:campusId/buildings?page=1&limit=10

Response 200:
{
  "data": [
    {
      "id": "uuid",
      "name": "Engineering Building",
      "code": "EB-A",
      "location": {
        "latitude": 28.5355,
        "longitude": 77.1910
      },
      "floorsCount": 3,
      "imageUrl": "url",
      "createdAt": "2024-02-06T10:00:00Z"
    }
  ],
  "pagination": {...}
}
```

### Get Single Building
```http
GET /buildings/:id

Response 200:
{
  "id": "uuid",
  "name": "Engineering Building",
  "code": "EB-A",
  "campusId": "uuid",
  "location": {...},
  "imageUrl": "url",
  "floors": [
    {
      "id": "uuid",
      "number": 0,
      "name": "Ground Floor",
      "roomsCount": 5
    }
  ],
  "facilities": [
    {
      "id": "uuid",
      "name": "Laboratory",
      "type": "laboratory"
    }
  ],
  "createdAt": "2024-02-06T10:00:00Z"
}
```

### Create Building (Admin Only)
```http
POST /campuses/:campusId/buildings
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Science Building",
  "code": "SB-C",
  "location": {
    "latitude": 28.5356,
    "longitude": 77.1915
  }
}

Response 201:
{...}
```

### Update Building (Admin Only)
```http
PUT /buildings/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Building Name"
}

Response 200:
{...}
```

### Delete Building (Admin Only)
```http
DELETE /buildings/:id
Authorization: Bearer <token>

Response 204: No Content
```

---

## 🔢 Floor Endpoints

### Get Floors by Building
```http
GET /buildings/:buildingId/floors?sort=number

Response 200:
{
  "data": [
    {
      "id": "uuid",
      "number": 0,
      "name": "Ground Floor",
      "layoutUrl": "url",
      "roomsCount": 5,
      "createdAt": "2024-02-06T10:00:00Z"
    }
  ]
}
```

### Get Single Floor with Rooms
```http
GET /floors/:id

Response 200:
{
  "id": "uuid",
  "number": 0,
  "name": "Ground Floor",
  "buildingId": "uuid",
  "layoutUrl": "url",
  "rooms": [
    {
      "id": "uuid",
      "number": "101",
      "name": "Computer Lab",
      "type": "lab",
      "capacity": 50
    }
  ],
  "createdAt": "2024-02-06T10:00:00Z"
}
```

### Create Floor (Admin Only)
```http
POST /buildings/:buildingId/floors
Authorization: Bearer <token>
Content-Type: application/json

{
  "number": 0,
  "name": "Ground Floor"
}

Response 201:
{...}
```

### Update Floor (Admin Only)
```http
PUT /floors/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Floor Name"
}

Response 200:
{...}
```

### Delete Floor (Admin Only)
```http
DELETE /floors/:id
Authorization: Bearer <token>

Response 204: No Content
```

---

## 🚪 Room Endpoints

### Get Rooms by Floor
```http
GET /floors/:floorId/rooms?type=classroom&sort=number

Query Parameters:
- type: string (optional, filter by room type)
- sort: string (optional, default: number)
- search: string (optional, search by name or number)

Response 200:
{
  "data": [
    {
      "id": "uuid",
      "number": "101",
      "name": "Computer Lab",
      "type": "lab",
      "capacity": 50,
      "imageUrl": "url",
      "facilitiesCount": 3,
      "createdAt": "2024-02-06T10:00:00Z"
    }
  ]
}
```

### Get Single Room with Details
```http
GET /rooms/:id

Response 200:
{
  "id": "uuid",
  "number": "101",
  "name": "Computer Lab",
  "type": "lab",
  "floorId": "uuid",
  "floor": {
    "id": "uuid",
    "number": 0,
    "building": {
      "id": "uuid",
      "name": "Engineering Building"
    }
  },
  "capacity": 50,
  "imageUrl": "url",
  "facilities": [
    {
      "id": "uuid",
      "name": "Computers",
      "count": 50
    }
  ],
  "createdAt": "2024-02-06T10:00:00Z"
}
```

### Search Rooms
```http
GET /rooms/search?query=lab&type=lab&campus=uuid&building=uuid

Query Parameters:
- query: string (search by name or number)
- type: string (optional)
- campus: uuid (optional)
- building: uuid (optional)
- floor: number (optional)

Response 200:
{
  "data": [...]
}
```

### Create Room (Admin Only)
```http
POST /floors/:floorId/rooms
Authorization: Bearer <token>
Content-Type: application/json

{
  "number": "101",
  "name": "Computer Lab",
  "type": "lab",
  "capacity": 50
}

Response 201:
{...}
```

### Update Room (Admin Only)
```http
PUT /rooms/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Room Name",
  "capacity": 60
}

Response 200:
{...}
```

### Delete Room (Admin Only)
```http
DELETE /rooms/:id
Authorization: Bearer <token>

Response 204: No Content
```

---

## 🛠️ Facility Endpoints

### Get Room Facilities
```http
GET /rooms/:roomId/facilities

Response 200:
{
  "data": [
    {
      "id": "uuid",
      "name": "Computers",
      "count": 50,
      "createdAt": "2024-02-06T10:00:00Z"
    }
  ]
}
```

### Add Facility to Room (Admin Only)
```http
POST /rooms/:roomId/facilities
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Projector",
  "count": 2
}

Response 201:
{...}
```

### Update Facility (Admin Only)
```http
PUT /facilities/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "count": 3
}

Response 200:
{...}
```

### Delete Facility (Admin Only)
```http
DELETE /facilities/:id
Authorization: Bearer <token>

Response 204: No Content
```

---

## 📊 Statistics Endpoints

### Get Campus Statistics
```http
GET /campuses/:id/statistics

Response 200:
{
  "totalBuildings": 5,
  "totalFloors": 15,
  "totalRooms": 250,
  "roomTypeDistribution": {
    "classroom": 120,
    "lab": 50,
    "office": 40,
    "other": 40
  }
}
```

### Get Building Statistics
```http
GET /buildings/:id/statistics

Response 200:
{
  "totalFloors": 3,
  "totalRooms": 50,
  "totalCapacity": 2500,
  "floorBreakdown": [...]
}
```

---

## 🔍 Search & Filter Endpoints

### Global Search
```http
GET /search?q=lab&type=room&limit=10

Query Parameters:
- q: string (search query)
- type: string (room|building|facility)
- limit: number (default: 10)

Response 200:
{
  "results": [
    {
      "id": "uuid",
      "name": "...",
      "type": "room",
      "path": "Campus > Building > Floor > Room",
      "relevance": 0.95
    }
  ]
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "INVALID_INPUT",
  "message": "Email is required",
  "details": {
    "field": "email",
    "issue": "Missing required field"
  }
}
```

### 401 Unauthorized
```json
{
  "error": "UNAUTHORIZED",
  "message": "Authentication required or token invalid"
}
```

### 403 Forbidden
```json
{
  "error": "FORBIDDEN",
  "message": "You don't have permission to perform this action"
}
```

### 404 Not Found
```json
{
  "error": "NOT_FOUND",
  "message": "Resource not found"
}
```

### 409 Conflict
```json
{
  "error": "CONFLICT",
  "message": "Email already registered"
}
```

### 429 Too Many Requests
```json
{
  "error": "RATE_LIMIT",
  "message": "Too many requests. Please try again later",
  "retryAfter": 60
}
```

### 500 Internal Server Error
```json
{
  "error": "INTERNAL_ERROR",
  "message": "An unexpected error occurred",
  "requestId": "req-uuid-for-tracking"
}
```

---

## Rate Limiting

```
- Public endpoints: 100 requests per 15 minutes
- Authenticated endpoints: 1000 requests per 15 minutes
- Admin endpoints: 5000 requests per 15 minutes

Rate limit headers:
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1614067200
```

---

## Pagination

All list endpoints use standard pagination:

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 250,
    "pages": 25,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## Response Headers

All responses include:
```
Content-Type: application/json
X-Request-ID: unique-request-id
X-Response-Time: 145ms
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=300
```

---

## Room Types

```
classroom - Regular classrooms
lab - Laboratory spaces (Computer, Physics, Chemistry, Biology)
office - Faculty and staff offices
auditorium - Large lecture halls
library - Study spaces and reading rooms
cafeteria - Food service areas
washroom - Restroom facilities
prayer_room - Prayer/meditation spaces
meeting_room - Conference and meeting rooms
storage - Storage and utility areas
```

---

## Testing the API

### Using cURL
```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"123456"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'

# Get campuses
curl http://localhost:3000/api/campuses

# Get protected resource
curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer <token>"
```

### Using Postman
1. Import the provided Postman collection
2. Set `base_url` variable to your API endpoint
3. After login, token is automatically saved
4. Use {{token}} in Authorization headers

---

## Documentation Tools

### Generate Swagger/OpenAPI Docs
```bash
# Backend should generate these automatically
GET /api/docs - Swagger UI
GET /api/openapi.json - OpenAPI JSON
```

---

**Last Updated**: February 2024
**API Version**: 1.0
**Status**: Ready for Development ✅
