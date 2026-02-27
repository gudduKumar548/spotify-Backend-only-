<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div class="container">
<h1>Spotify Backend Only 🎧</h1>
<p>
A role-based RESTful API for a music streaming platform where listeners can explore and play songs 
while artists can manage albums and tracks. The project focuses on secure authentication, 
role-based authorization, and a scalable backend architecture built with Node.js and Express.js.
</p>

<hr>

<h2>🧠 Overview</h2>
<ul>
    <li>User authentication (signup/login)</li>
    <li>Role-based access for listeners and artists</li>
    <li>CRUD operations for songs, albums, playlists, and artists</li>
    <li>Token-based secure API access</li>
    <li>Scalable backend architecture</li>
</ul>

<hr>

<h2>🛠️ Features</h2>
<ul>
    <li>Role-based authentication</li>
    <li>Secure login & token management</li>
    <li>RESTful API design</li>
    <li>CRUD for songs & albums</li>
    <li>Playlist & music exploration endpoints</li>
    <li>Modular and scalable structure</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>
<code>
spotify-Backend-only-<br>
├── src/<br>
├── server.js<br>
├── package.json<br>
├── .gitignore<br>
├── package-lock.json<br>
└── README.md
</code>

<hr>
<h2>🚀 Technologies Used</h2>
<table>
    <tr>
        <th>Category</th>
        <th>Tools / Libraries</th>
    </tr>
    <tr>
        <td>Backend</td>
        <td>Node.js, Express.js</td>
    </tr>
    <tr>
        <td>Database</td>
        <td>MongoDB, Mongoose</td>
    </tr>
    <tr>
        <td>Authentication</td>
        <td>JWT (JSON Web Token)</td>
    </tr>
    <tr>
        <td>Media Storage</td>
        <td>ImageKit</td>
    </tr>
    <tr>
        <td>Package Manager</td>
        <td>npm</td>
    </tr>
    <tr>
        <td>Language</td>
        <td>JavaScript</td>
    </tr>
</table>
<hr>

<h2>🔧 Installation</h2>

<h3>1. Clone the Repository</h3>
<code>
git clone https://github.com/gudduKumar548/spotify-Backend-only-<br>
cd spotify-Backend-only-
</code>

<h3>2. Install Dependencies</h3>
<code>
npm install express mongoose jsonwebtoken @imagekit/nodejs multer nodemon bcrypt cookie-parser dotenv express-validator 
</code>

<h3>3. Setup Environment Variables (.env file)</h3>
<code>
PORT=3000<br>
DATABASE_URL=your_database_connection_string<br>
JWT_SECRET=your_secret_key
IMAGEKIT_PRIVATE_KEY=your_private_key
</code>

<h3>4. Start the Server</h3>
<code>
npm start
</code>

<hr>

<h2>🔌 Example API Endpoints</h2>

<h3>Authentication</h3>
<table>
    <tr>
        <th>Method</th>
        <th>Route</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/auth/register</td>
        <td>Register new user</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/auth/login</td>
        <td>Login and receive token</td>
    </tr>
</table>

<h3>Music Resources</h3>
<table>
    <tr>
        <th>Method</th>
        <th>Route</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/songs</td>
        <td>List all songs</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/albums</td>
        <td>Add new album (Artist only)</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/api/playlists/:id</td>
        <td>Delete playlist</td>
    </tr>
</table>

<hr>

<h2>🧪 Testing</h2>
<p>
Use tools like Postman or Insomnia to test API endpoints. 
Make sure to include your JWT token in protected routes.
</p>

<hr>

<h2>🚀 Usage</h2>
<p>
After starting the server, open:
</p>
<code>
http://localhost:PORT
</code>

<p>
Connect this backend to a frontend application or mobile app for full functionality.
</p>

<hr>

<h2>🤝 Contributions</h2>
<p>
Contributions are welcome! Fork the repository, make changes, and submit a pull request.
</p>

<hr>

<h2>📜 License</h2>
<p>
No license specified yet. Consider adding one if you want open-source contributions.
</p>

</div>

</body>
</html>
