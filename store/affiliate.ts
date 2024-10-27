import { create } from 'zustand';
import { IAffiliate } from '@/lib/types';

interface AffiliateStore {
  affiliate: IAffiliate;
  updateAffiliate: (data: Partial<IAffiliate>) => void;
  updateContact: (data: Partial<IAffiliate['contact']>) => void;
  updateApiConfiguration: (data: Partial<IAffiliate['api_configuration']>) => void;
}

const initialState: IAffiliate = {
  _id: '61bc1b674fe9f538aa32de58',
  api_configuration: {
    enabled: false,
  },
  campaigns: [],
  status: 'active',
  time_zone_name: 'EST5EDT',
  name: 'Successful Media',
  group: {
    _id: '575f0d9877c7a04d47b669f3',
    object_name: 'affiliate',
    name: 'Monthly',
    updated_on: '2016-06-13T19:46:32.033Z',
    created_on: '2016-06-13T19:46:32.033Z',
  },
  contact: {
    name: '',
    email: '',
    url: '',
  },
  created_on: '2021-12-17T05:08:55.849Z',
  updated_on: '2021-12-17T05:08:55.849Z',
};

export const useAffiliateStore = create<AffiliateStore>((set) => ({
  affiliate: initialState,
  updateAffiliate: (data) =>
    set((state) => ({
      affiliate: { ...state.affiliate, ...data },
    })),
  updateContact: (data) =>
    set((state) => ({
      affiliate: {
        ...state.affiliate,
        contact: { ...state.affiliate.contact, ...data },
      },
    })),
  updateApiConfiguration: (data) =>
    set((state) => ({
      affiliate: {
        ...state.affiliate,
        api_configuration: { ...state.affiliate.api_configuration, ...data },
      },
    })),
}));