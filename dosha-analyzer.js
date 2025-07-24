export const analyzeDosha = (answers) => {
  let vata = 0, pitta = 0, kapha = 0;

  answers.forEach((ans) => {
    if (ans === 'vata') vata++;
    else if (ans === 'pitta') pitta++;
    else if (ans === 'kapha') kapha++;
  });

  const highest = Math.max(vata, pitta, kapha);
  let doshaType = '';
  if (vata === highest) doshaType = 'Vata';
  if (pitta === highest) doshaType = 'Pitta';
  if (kapha === highest) doshaType = 'Kapha';

  return {
    doshaType,
    scoreBreakdown: { vata, pitta, kapha }
  };
};
