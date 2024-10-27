export const TIME_ZONES = [
  'UTC',
  'EST5EDT',
  'CST6CDT',
  'MST7MDT',
  'PST8PDT',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
] as const;

export const Status = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
} as const;

export enum AFFILIATE_NETWORKS {
  CAKE = 'CAKE',
  HASOFFERS = 'HASOFFERS',
  HITPATH = 'HITPATH',
  EVERFLOW = 'EVERFLOW',
  METABASE = 'METABASE',
  W4 = 'W4',
  CLICKBOOTH = 'CLICKBOOTH',
  CLICKSTER = 'CLICKSTER',
}