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
├── models/
├── routes/
├── controllers/
├── middleware/
├── config/
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
| Package Manager | npm |
| Language | JavaScript |

---

## ⚙️ Installation & Setup

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

Server runs at:

```
http://localhost:3000
```

---

## 🔑 Example API Endpoints

### 🔐 Authentication

| Method | Route | Description |
|--------|-------|------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and receive token |

---

### 🎵 Music Resources

| Method | Route | Description |
|--------|-------|------------|
| GET | `/api/songs` | List all songs |
| POST | `/api/songs` | Upload song (Artist only) |
| POST | `/api/albums` | Add new album (Artist only) |
| DELETE | `/api/playlists/:id` | Delete playlist |

---

## 🔐 Role-Based Access

- 🎧 **Listener** → Browse & Play Songs  
- 🎤 **Artist** → Upload Songs & Create Albums  
- 🔒 Protected routes secured using JWT Middleware  

---

## 🧪 Testing

You can test APIs using:

- Postman  
- Thunder Client  
- Insomnia  

For protected routes, add header:

```
Authorization: Bearer your_token_here
```

---

## 🚀 Usage

After starting the server, open:

```
http://localhost:3000
```

Connect this backend to a frontend application or mobile app for full functionality.

---

## 🔮 Future Improvements

- ❤️ Like & Favorite System  
- 📊 Song Analytics  
- 🔎 Search & Filter  
- 📱 Frontend Integration  
- ☁ Cloud Deployment (Render / Railway)  

---

## 🤝 Contributions

Contributions are welcome!  
Fork the repository and submit a pull request.

---

## 📜 License

This project currently does not specify a license.

---

<p align="center">
  Built with ❤️ using Node.js
</p>
