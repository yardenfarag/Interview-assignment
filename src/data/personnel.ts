import { Personnel } from '../types/requests';

// Personnel data for lookup (doctors and nurses)
export const personnel: Personnel[] = [
  {
    id: 'doctor-001',
    name: 'רוית גבע',
    role: 'doctor',
  },
  {
    id: 'nurse-001',
    name: 'אירנה טרובין',
    role: 'nurse',
  },
  {
    id: 'nurse-002',
    name: 'אחות מתאמת',
    role: 'nurse',
  },
];

// Helper function to get personnel by ID
export const getPersonnelById = (id: string): Personnel | undefined => {
  return personnel.find(p => p.id === id);
};

// Helper function to get personnel name by ID
export const getPersonnelName = (id: string): string => {
  const person = getPersonnelById(id);
  return person ? person.name : 'לא נמצא';
};

