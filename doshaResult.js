import mongoose from 'mongoose';

const doshaResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doshaType: { type: String, required: true },
  scoreBreakdown: {
    vata: Number,
    pitta: Number,
    kapha: Number
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('DoshaResult', doshaResultSchema);
