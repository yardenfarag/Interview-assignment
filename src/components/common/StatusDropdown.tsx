import { useState } from 'react';
import type { RequestStatus } from '../../types/requests';
import { getStatusColorClass } from '../../utils/utils';
import styles from './StatusDropdown.module.scss';

interface StatusDropdownProps {
  value: RequestStatus;
  onChange?: (newStatus: RequestStatus) => void;
}

const allStatuses: RequestStatus[] = [
  'נדחתה',
  'מסתיים',
  'הארכת תוקף',
  'שינוי מינון',
  'מושהה',
  'נדרש מידע',
  'אושרה',
  'בטיפול',
];

export default function StatusDropdown({ value, onChange }: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (status: RequestStatus) => {
    onChange?.(status);
    setIsOpen(false);
  };

  return (
    <div className={styles['dropdown-wrapper']}>
      <button
        className={`${styles['dropdown-button']} ${styles[getStatusColorClass(value)]}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <span className={styles.arrow}>▼</span>
      </button>
      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
          <div className={styles['dropdown-menu']}>
            {allStatuses.map((status) => (
              <button
                key={status}
                className={`${styles['dropdown-option']} ${styles[getStatusColorClass(status)]} ${
                  status === value ? styles.selected : ''
                }`}
                onClick={() => handleSelect(status)}
                type="button"
              >
                {status}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

