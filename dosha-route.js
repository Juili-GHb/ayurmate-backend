import express from 'express';
import { doshaQuizSchema } from '../schemas/dosha-schema.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { validate } from '../middlewares/validate-middleware.js'; // ✅ added missing import
import { submitDoshaQuiz, getDoshaHistory, getLatestDoshaResult } from '../controllers/dosha-controller.js';

const router = express.Router();

// POST /api/dosha/quiz — submit dosha quiz (protected + validated)
router.post('/quiz', authMiddleware, validate(doshaQuizSchema), submitDoshaQuiz);

// GET /api/dosha/history — get user's dosha quiz history (protected)
router.get('/history', authMiddleware, getDoshaHistory);

router.get('/latest', authMiddleware, getLatestDoshaResult);

export default router;
