import { useMemo } from 'react';
import Table from '../components/common/Table';
import type { TableColumn } from '../components/common/Table';
import Button from '../components/common/Button';
import FilterChip from '../components/common/FilterChip';
import { patientRequests } from '../data/requests';
import { getPersonnelName } from '../data/personnel';
import type { PatientRequest } from '../types/requests';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  const filterCounts = useMemo(() => {
    return {
      extension: patientRequests.filter(r => r.status === 'הארכת תוקף').length,
      dosageChange: patientRequests.filter(r => r.status === 'שינוי מינון').length,
      suspended: patientRequests.filter(r => r.status === 'מושהה').length,
      infoRequired: patientRequests.filter(r => r.status === 'נדרש מידע').length,
      expiring: patientRequests.filter(r => r.status === 'מסתיים').length,
      rejected: patientRequests.filter(r => r.status === 'נדחתה').length,
    };
  }, []);
  const columns: TableColumn<PatientRequest>[] = [
    {
      header: 'שם מטופל',
      key: 'patientName',
    },
    {
      header: 'ת.ז',
      key: 'patientId',
    },
    {
      header: 'תרופה גנרית',
      value: (row) => row.medication.name,
    },
    {
      header: 'XXXXXX',
      value: () => '',
    },
    {
      header: 'פתיחת בקשה',
      key: 'createdAt',
    },
    {
      header: 'מינון CATO',
      value: (row) => `${row.medication.doseMg}mg`,
    },
    {
      header: 'מינון שאושר',
      value: (row) => `${row.medication.approvedDoseMg}mg`,
    },
    {
      header: 'מלאי מעודכן',
      value: (row) => row.medication.quantity ? row.medication.quantity.toFixed(2) : '-',
    },
    {
      header: "מס' טיפולים",
      value: (row) => row.medication.doseCount ?? '-',
    },
    {
      header: 'תוקף אישור תרופה',
      value: (row) => row.medication.expiry,
    },
    {
      header: '💬',
      value: (row) => row.notesCount ? '💬' : '🔄',
    },
    {
      header: 'רופא/ה אחראי/ת',
      value: (row) => getPersonnelName(row.doctorId),
    },
    {
      header: 'אח/ות מתאמ/ת',
      value: (row) => getPersonnelName(row.nurseId),
    },
    {
      header: 'גורם מממן',
      key: 'sponsor',
    },
    {
      header: '✉',
      value: (row) => row.unreadMessages ? '✉' : '🔄',
    },
    {
      header: 'עדכון סטטוס',
      value: (row) => row.statusUpdatedAt,
    },
    {
      header: 'סטטוס בקשה',
      key: 'status',
      className: styles['status-cell'],
    },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <div className={styles['buttons-section']}>
          <Button variant="primary" onClick={() => console.log('click')}>
            פתיחת בקשה חדשה
          </Button>
          <Button variant="secondary" onClick={() => console.log('click')}>
            הזמנה ע"י מחלקת אשפוז
          </Button>
        </div>

        <div className={styles['filters-section']}>
          <div className={styles['section-title']}>מטופלים בעלי בקשה</div>
          <div className={styles['filters-chips']}>
            <FilterChip
              label="הארכת תוקף"
              count={filterCounts.extension}
              color="lightblue"
              icon="📅"
            />
            <FilterChip
              label="שינוי מינון"
              count={filterCounts.dosageChange}
              color="salmon"
              icon="●"
            />
            <FilterChip
              label="מושהה"
              count={filterCounts.suspended}
              color="gold"
              icon="⏸"
            />
            <FilterChip
              label="נדרש מידע"
              count={filterCounts.infoRequired}
              color="black"
              icon="✉"
            />
            <FilterChip
              label="מסתיים"
              count={filterCounts.expiring}
              color="orange"
              icon="💊"
            />
            <FilterChip
              label="נדחתה"
              count={filterCounts.rejected}
              color="red"
              icon="🚫"
            />
          </div>
        </div>

        <Table columns={columns} data={patientRequests} />
      </div>
    </div>
  );
}

