import type { PatientRequest, RequestStatus } from '../types/requests';

// status-color mapping (for styles)
export const getStatusColorClass = (status: RequestStatus): string => {
  const statusMap: Record<RequestStatus, string> = {
    'נדחתה': 'status-rejected',
    'מסתיים': 'status-expiring',
    'הארכת תוקף': 'status-extension',
    'שינוי מינון': 'status-dosage-change',
    'מושהה': 'status-suspended',
    'נדרש מידע': 'status-info-required',
    'אושרה': 'status-approved',
    'בטיפול': 'status-in-treatment',
  };
  return statusMap[status] || '';
};

export const getFilterCount = (requests: PatientRequest[], status: string): number => {
  return requests.filter(r => r.status === status).length;
};

