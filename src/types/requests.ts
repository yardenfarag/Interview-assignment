export type RequestStatus = 
  | "נדחתה"
  | "מסתיים"
  | "הארכת תוקף"
  | "שינוי מינון"
  | "מושהה"
  | "נדרש מידע"
  | "אושרה"
  | "בטיפול";

export interface Medication {
  id: string;
  name: string;
  doseMg: number;
  approvedDoseMg: number;
  quantity?: number;
  doseCount?: number;
  expiry: string;
}

export interface Personnel {
  id: string;
  name: string;
  role: "רופא" | "אח/ת מתאמת";
}

export interface PatientRequest {
  id: string;
  patientName: string;
  patientId: string;
  medication: Medication;
  createdAt: string;
  statusUpdatedAt: string;
  nurseId: string;
  doctorId: string;
  sponsor: string;
  notesCount: number;
  unreadMessages: number;
  status: RequestStatus;
}

