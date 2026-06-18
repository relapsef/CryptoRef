import type { Referral } from '../types';
import { referrals as staticReferrals } from '../data/referrals';

export function getAllReferrals(): Referral[] {
  try {
    const saved = JSON.parse(localStorage.getItem('cryptoref-referrals') || '[]') as Referral[];
    return [...saved, ...staticReferrals];
  } catch {
    return staticReferrals;
  }
}
