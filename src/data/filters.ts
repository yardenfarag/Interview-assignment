import type { RequestStatus } from '../types/requests';

export interface FilterConfig {
  status: RequestStatus;
  label: string;
  color: string;
  icon: string;
}

export const filterConfigs: FilterConfig[] = [
  {
    status: 'הארכת תוקף',
    label: 'הארכת תוקף',
    color: 'lightblue',
    icon: '📅',
  },
  {
    status: 'שינוי מינון',
    label: 'שינוי מינון',
    color: 'salmon',
    icon: '●',
  },
  {
    status: 'מושהה',
    label: 'מושהה',
    color: 'gold',
    icon: '⏸',
  },
  {
    status: 'נדרש מידע',
    label: 'נדרש מידע',
    color: 'black',
    icon: '✉',
  },
  {
    status: 'מסתיים',
    label: 'מסתיים',
    color: 'orange',
    icon: '💊',
  },
  {
    status: 'נדחתה',
    label: 'נדחתה',
    color: 'red',
    icon: '🚫',
  },
];

