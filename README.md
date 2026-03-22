<h1 align="center">🎧 Spotify Backend API</h1>

<p align="center">
  <b>A Role-Based RESTful Music Streaming Backend built with Node.js express, MongoDB & ImageKit</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Authentication-blue?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/ImageKit-Media%20Storage-orange?style=for-the-badge" />
</p>

---
## 🌐 Live Demo
 
🚀 **Base URL:** https://spotify-backend-only.onrender.com
 
> Test all endpoints using Postman with the above base URL.  
> ⚠️ Note: First request may take 30-50 seconds due to free tier cold start. Subsequent requests are fast.
 
---
 
## 🧠 Overview
 
A role-based RESTful API for a music streaming platform where listeners can explore and play songs  
while artists can manage albums and tracks.
 
The project focuses on:
 
- User authentication (Signup/Login)
- Role-based authorization (Artist & Listener)
- CRUD operations for songs, albums & playlists
- Token-based secure API access
- Scalable backend architecture
 
---
 
## ✨ Features
 
- 👤 User Registration & Login  
- 🔐 JWT-based Authentication  
- 🎵 Songs & Albums Management  
- 🎤 Role-Based Access Control  
- 📂 Media Upload using ImageKit  
- 🗄 MongoDB Database Integration  
- 🔄 RESTful API Design  
- ⚡ Modular & Scalable Structure  
 
---
 
## 📂 Project Structure
 
```bash
spotify-Backend-only/
│
├── src/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── config/
├── server.js
├── package.json
└── README.md
```
 
---
 
## 🚀 Technologies Used
 
| Category | Tools / Libraries |
|----------|-------------------|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (JSON Web Token), bcrypt |
| Media Storage | ImageKit |
| File Upload | multer |
| Environment Config | dotenv |
| Validation | express-validator |
| Deployment | Render |
| Package Manager | npm |
| Language | JavaScript |
 
---
 
## 🔑 API Endpoints
 
### 🔐 Authentication
 
| Method | Route | Description | Auth Required |
|--------|-------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login and receive token | ❌ |
| POST | `/api/auth/logout` | Logout user/artist | ✅ |
 
### 🎵 Music Resources
 
| Method | Route | Description | Auth Required |
|--------|-------|-------------|---------------|
| GET | `/api/music/songs` | List all songs | ❌ |
| GET | `/api/music/albums` | List all albums | ❌ |
| GET | `/api/music/albums/:id` | Get album by id | ❌ |
| GET | `/api/playlists` | List all playlists | ✅ |
| GET | `/api/playlists/:id` | Get particular playlist | ✅ |
| POST | `/api/playlist` | Create a new playlist | ✅ |
| POST | `/api/music/upload` | Upload song (Artist only) | ✅ Artist |
| POST | `/api/music/albums` | Add new album (Artist only) | ✅ Artist |
| DELETE | `/api/playlists/:id` | Delete playlist | ✅ |
 
---
 
## 🔐 Role-Based Access
 
| Role | Permissions |
|------|-------------|
| 🎧 Listener | Browse songs, albums, manage playlists |
| 🎤 Artist | Everything + Upload songs & Create albums |
 
All protected routes are secured using JWT Middleware.  
Add this header for protected routes:
 
```
Authorization: Bearer your_token_here
```
 
---
 
## 🧪 Testing the Live API
 
You can test all endpoints using:
 
- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/)
- [Insomnia](https://insomnia.rest/)
 
**Quick Start — Register and Login:**
 
```json
POST https://spotify-backend-only.onrender.com/api/auth/register
 
{
  "username": "testuser",
  "email": "test@gmail.com",
  "password": "123456",
  "role": "user"
}
```
 
```json
POST https://spotify-backend-only.onrender.com/api/auth/login
 
{
  "email": "test@gmail.com",
  "password": "123456"
}
```
 
---
 
## ⚙️ Run Locally
 
### 1️⃣ Clone Repository
 
```bash
git clone https://github.com/gudduKumar548/spotify-Backend-only-.git
cd spotify-Backend-only-
```
 
### 2️⃣ Install Dependencies
 
```bash
npm install
```
 
### 3️⃣ Setup Environment Variables
 
Create a `.env` file:
 
```env
PORT=3000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```
 
### 4️⃣ Start Server
 
```bash
npm start
```
 
Server runs at `http://localhost:3000`
 
---
 
## 🔮 Future Improvements
 
- ❤️ Like & Favorite System  
- 📊 Song Analytics  
- 🔎 Search & Filter  
- 📱 Frontend Integration  
- 🎵 Queue & Shuffle System  
- 📦 Postman Collection Export  
 
---
 
## 🤝 Contributions
 
Contributions are welcome!  
Fork the repository and submit a pull request.
 
---
 
## 📜 License
 
This project currently does not specify a license.
 
---
 
<p align="center">
  Built with ❤️ using Node.js | Deployed on Render 🚀
</p>
 
