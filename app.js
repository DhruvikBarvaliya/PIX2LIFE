const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const scanRoutes = require('./routes/scanRoutes');
const businessRoutes = require('./routes/businessRoutes');
const imageRoutes = require('./routes/imageRoutes'); // Include image routes
const setupSwagger = require('./config/swagger'); // Import Swagger setup
const path = require('path');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/images', imageRoutes); // Use image routes

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Setup Swagger
setupSwagger(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
