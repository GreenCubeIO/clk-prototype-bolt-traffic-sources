import { create } from 'zustand';
import { IOffer } from '@/lib/types/offer';
import { mockOffers } from '@/lib/fixtures/offers';

interface OfferStore {
  offer: IOffer;
  updateOffer: (data: Partial<IOffer>) => void;
  updateDailyCap: (data: Partial<IOffer['daily_cap']>) => void;
  updateContent: (data: Partial<IOffer['content']>) => void;
}

export const useOfferStore = create<OfferStore>((set) => ({
  offer: mockOffers[0],
  updateOffer: (data) =>
    set((state) => ({
      offer: { ...state.offer, ...data },
    })),
  updateDailyCap: (data) =>
    set((state) => ({
      offer: {
        ...state.offer,
        daily_cap: { ...state.offer.daily_cap, ...data },
      },
    })),
  updateContent: (data) =>
    set((state) => ({
      offer: {
        ...state.offer,
        content: { ...state.offer.content, ...data },
      },
    })),
}));