import type { Personnel } from '../types/requests';

// Personnel data for lookup (doctors and nurses)
export const personnel: Personnel[] = [
  {
    id: 'doctor-001',
    name: 'רוית גבע',
    role: 'רופא',
  },
  {
    id: 'nurse-001',
    name: 'אירנה טרובין',
    role: 'אח/ת מתאמת',
  },
  {
    id: 'nurse-002',
    name: 'אחות מתאמת',
    role: 'אח/ת מתאמת',
  },
];

export const getPersonnelById = (id: string): Personnel | undefined => {
  return personnel.find(p => p.id === id);
};

export const getPersonnelName = (id: string): string => {
  const person = getPersonnelById(id);
  return person ? person.name : 'לא נמצא';
};

export const dummyLoggedInUser = {
  id: 'doctor-001',
  name: 'פרופ רוית גבע',
  role: 'רופא',
};

