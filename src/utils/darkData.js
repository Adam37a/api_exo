import crypto from 'crypto';

export const enrichWithDarkData = (profile) => {
  const riskScore = profile.country === 'France' ? 0.2 : 0.8;
  const ibanLength = profile.iban?.length || 0;

  // ✅ FIX: use "cardNumber" instead of "number"
  const cardNumber = profile.creditCard?.cardNumber || '';
  const cardMasked = cardNumber
    ? cardNumber.replace(/\d(?=\d{4})/g, '*')
    : 'N/A';

  const userHash = crypto
    .createHash('sha256')
    .update(profile.email || '')
    .digest('hex')
    .slice(0, 10);

  return {
    ...profile,
    darkData: {
      riskScore,
      ibanLength,
      cardMasked,
      userHash
    }
  };
};
