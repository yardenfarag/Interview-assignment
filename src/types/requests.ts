// Request Status Types
export type RequestStatus = 
  | "נדחתה"           // Rejected
  | "מסתיים"          // Expiring
  | "הארכת תוקף"      // Extension of Validity
  | "שינוי מינון"     // Dosage Change
  | "מושהה"           // Suspended
  | "נדרש מידע"       // Information Required
  | "אושרה"           // Approved
  | "בטיפול";         // In Treatment

// Medication Interface
export interface Medication {
  id: string;
  name: string;              // e.g. "ALDACTONE", "ASPIRIN CARDIO", "ATORVASTATIN"
  doseMg: number;            // CATO dosage in mg (e.g. 50, 60, 100)
  approvedDoseMg: number;    // Approved dosage in mg (e.g. 50, 60, 100)
  quantity?: number;         // מלאי מעודכן (Updated Stock) - optional
  doseCount?: number;        // מס' טיפולים (Number of Treatments) - optional
  expiry: string;            // תוקף אישור תרופה (e.g. "11.5.25", "1.4.25")
}

// Personnel Interface (for doctors and nurses)
export interface Personnel {
  id: string;
  name: string;
  role: "doctor" | "nurse";
}

// Patient Request Interface
export interface PatientRequest {
  id: string;
  patientName: string;       // שם מטופל
  patientId: string;         // ת.ז (ID Number)
  medication: Medication;     // Single medication per request
  createdAt: string;         // פתיחת בקשה (e.g. "11.5.25", "1.4.25")
  statusUpdatedAt: string;   // עדכון סטטוס (e.g. "11.5.25", "1.4.25")
  nurseId: string;           // ID of the coordinating nurse
  doctorId: string;          // ID of the responsible doctor
  sponsor: string;           // גורם מממן (e.g. "כללית", "מכבי", "חמלה")
  notesCount: number;        // Number of notes (for chat icon indicator)
  unreadMessages: number;    // Number of unread messages (for envelope icon)
  status: RequestStatus;     // סטטוס בקשה
}

