import DoshaResult from '../models/doshaResult.js';

export const submitDoshaQuiz = async (req, res) => {
  const userId = req.user._id;
  const { answers } = req.body;

  console.log('📥 Received Dosha quiz from user:', userId);
  console.log('📝 Answers:', answers);

  const { doshaType, scoreBreakdown } = analyzeDosha(answers);
  console.log('🔍 Analyzed Dosha:', doshaType);
  console.log('📊 Score Breakdown:', scoreBreakdown);

  const result = new DoshaResult({
    user: userId,
    doshaType,
    scoreBreakdown
  });

  await result.save();
  console.log('✅ Dosha result saved:', result);

  res.status(201).json({
    message: 'Dosha quiz submitted',
    doshaType,
    scoreBreakdown
  });
};

export const getDoshaHistory = async (req, res) => {
  const userId = req.user._id;
  console.log('📜 Fetching dosha history for:', userId);

  const results = await DoshaResult.find({ user: userId }).sort({ createdAt: -1 });
  console.log('📚 History results:', results);

  res.status(200).json(results);
};

export const getLatestDoshaResult = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log('📤 Fetching latest dosha result for:', userId);

    const result = await DoshaResult.findOne({ user: userId }).sort({ createdAt: -1 });

    if (!result) {
      console.log('❌ No dosha result found');
      return res.status(404).json({ message: 'No dosha result found' });
    }

    console.log('📦 Latest dosha result:', result);

    res.status(200).json({
      message: 'Latest Dosha Result',
      doshaType: result.doshaType,
      scoreBreakdown: result.scoreBreakdown,
      createdAt: result.createdAt,
    });
  } catch (error) {
    console.error('🚨 Error in getLatestDoshaResult:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};
