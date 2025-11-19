import Table from '../components/common/Table';
import type { TableColumn } from '../components/common/Table';
import Button from '../components/common/Button';
import FilterChip from '../components/common/FilterChip';
import StatusDropdown from '../components/common/StatusDropdown';
import { patientRequests } from '../data/requests';
import { getPersonnelName } from '../data/personnel';
import { filterConfigs } from '../data/filters';
import type { PatientRequest } from '../types/requests';
import { getFilterCount } from '../utils/utils';
import styles from './Dashboard.module.scss';

export default function Dashboard() {
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
      value: (row) => (
        <span className={styles['icon-cell']}>
          {row.notesCount > 0 ? (
            <span className={styles['chat-icon-active']}>💬</span>
          ) : (
            <span className={styles['chat-icon-inactive']}>💬</span>
          )}
        </span>
      ),
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
      value: (row) => (
        <span className={styles['icon-cell']}>
          {row.unreadMessages > 0 ? (
            <span className={styles['envelope-icon-active']}>✉</span>
          ) : (
            <span className={styles['envelope-icon-inactive']}>✉</span>
          )}
        </span>
      ),
    },
    {
      header: 'עדכון סטטוס',
      value: (row) => row.statusUpdatedAt,
    },
    {
      header: 'סטטוס בקשה',
      value: (row) => (
        <StatusDropdown
          value={row.status}
          onChange={(newStatus) => {
            // Handle status change - you can update the data here
            console.log(`Changing status for ${row.id} to ${newStatus}`);
          }}
        />
      ),
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

        <div className={styles.contentcontainer}>

        <div className={styles['filters-section']}>
          <div className={styles['section-title']}>מטופלים בעלי בקשה</div>
          <div className={styles['filters-chips']}>
            {filterConfigs.map((filter) => (
              <FilterChip
                key={filter.status}
                label={filter.label}
                count={getFilterCount(patientRequests, filter.status)}
                color={filter.color}
                icon={filter.icon}
              />
            ))}
          </div>
        </div>

        <Table columns={columns} data={patientRequests} />
        </div>
      </div>
    </div>
  );
}

