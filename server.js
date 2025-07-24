import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth-route.js';
import doshaRoutes from './routes/dosha-route.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ This will respond when you visit http://localhost:5000/
app.get('/', (req, res) => {
  res.send('🌿 Welcome to AyurMate Backend API');
});

app.use('/api/auth', authRoutes);
app.use('/api/dosha', doshaRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
