# MERN Stack TypeScript Template

A modern, production-ready MERN stack template with TypeScript, TailwindCSS, and a beautiful purple theme. This template provides a solid foundation for building scalable web applications with best practices and modern development tools.

## ✨ Features

### 🚀 **Full Stack Technologies**
- **MongoDB** - NoSQL database with Mongoose ODM
- **Express.js** - Fast, unopinionated web framework  
- **React 18** - Modern React with hooks and context
- **Node.js** - JavaScript runtime environment
- **TypeScript** - Full type safety across frontend and backend
- **TailwindCSS** - Utility-first CSS framework with custom theme

### 🔐 **Authentication & Security**
- JWT-based authentication system
- Password hashing with bcrypt
- Protected routes and middleware
- Role-based access control (User/Admin)
- Input validation and sanitization
- Security headers with Helmet.js
- Rate limiting protection

### 🎨 **Beautiful UI/UX**
- Modern purple gradient theme
- Responsive design (mobile-first approach)
- Smooth animations and transitions
- Professional dashboard with analytics
- Clean typography and spacing
- Hover effects and micro-interactions

### 🛠️ **Developer Experience**
- Hot reload for both client and server
- ESLint and TypeScript configuration
- Comprehensive error handling
- API documentation structure
- Environment variable management
- Organized project structure

## 📁 Project Structure

```
mern-typescript-template/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React context providers
│   │   ├── services/       # API service functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Client dependencies
│
├── server/                 # Express.js backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # MongoDB/Mongoose models
│   │   ├── routes/         # API route definitions
│   │   └── config/         # Configuration files
│   └── package.json        # Server dependencies
│
├── package.json            # Root package.json (scripts)
├── README.md              # Project documentation
└── LICENSE                # MIT License
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)  
- **MongoDB** (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd mern-typescript-template
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment setup**
   ```bash
   cp server/.env.example server/.env
   ```
   
   Edit `server/.env` with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern_template
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=7d
   CLIENT_URL=http://localhost:5173
   BCRYPT_ROUNDS=12
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/api/health

## 📚 Available Scripts

### Root Scripts
- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm run start` - Start production server
- `npm run install:all` - Install all dependencies (root, client, server)
- `npm run clean` - Remove all node_modules and build folders

### Client Scripts (cd client)
- `npm run dev` - Start React development server
- `npm run build` - Build React app for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

### Server Scripts (cd server)
- `npm run dev` - Start Express server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run clean` - Remove build directory

## 🔧 Configuration

### Database Configuration
The application uses MongoDB with Mongoose. Configure your database connection in `server/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/your_database_name
# Or use MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
```

### JWT Configuration
Set up JWT authentication in `server/.env`:

```env
JWT_SECRET=your-256-bit-secret-key
JWT_EXPIRE=7d
```

### CORS Configuration
Configure CORS settings in `server/src/server.ts`:

```typescript
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
```

## 🎨 Theme Customization

The application uses a custom purple theme defined in `client/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      purple: {
        50: '#faf5ff',
        // ... full purple palette
        950: '#3b0764',
      },
      primary: {
        // Primary colors mapped to purple palette
      }
    }
  }
}
```

### Custom CSS Classes
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling  
- `.btn-outline` - Outline button styling
- `.input-field` - Form input styling
- `.card` - Card container styling
- `.gradient-bg` - Purple gradient background
- `.gradient-text` - Purple gradient text

## 🔐 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### User Routes (Protected)
- `GET /api/users` - Get all users (admin only)
- `PUT /api/users/profile` - Update user profile
- `DELETE /api/users/profile` - Delete user account

### Health Check
- `GET /api/health` - API health status

## 🛡️ Security Features

- **Password Hashing** - Bcrypt with configurable rounds
- **JWT Tokens** - Secure authentication tokens
- **Input Validation** - Express-validator for request validation
- **Rate Limiting** - Protection against brute force attacks
- **CORS Protection** - Configured for specific origins
- **Security Headers** - Helmet.js for security headers
- **Environment Variables** - Sensitive data protection

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
Set the following environment variables in your production environment:

```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-secure-jwt-secret
CLIENT_URL=https://your-frontend-domain.com
```

### Deployment Platforms
This template is ready for deployment on:
- **Vercel** (Frontend)
- **Railway/Render** (Backend)
- **MongoDB Atlas** (Database)
- **Netlify** (Frontend)
- **Heroku** (Full-stack)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Provide steps to reproduce the problem
4. Include relevant error messages and logs

## 🌟 Acknowledgments

- React team for the amazing framework
- Express.js team for the robust backend framework
- MongoDB team for the flexible database solution
- Tailwind CSS team for the utility-first CSS framework
- TypeScript team for bringing type safety to JavaScript

---

**Happy coding! 🚀**

If this template helps you build something amazing, please give it a ⭐ on GitHub!