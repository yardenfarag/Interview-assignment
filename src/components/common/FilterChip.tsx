import { type ReactNode } from 'react';
import styles from './FilterChip.module.scss';

interface FilterChipProps {
  label: string;
  count: number;
  color: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function FilterChip({
  label,
  count,
  color,
  icon,
  onClick,
}: FilterChipProps) {
  return (
    <button
      className={styles.chip}
      style={{
        borderColor: color,
        color: color,
        backgroundColor: '#ffffff',
      }}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      <span className={styles.count}>- {count}</span>
    </button>
  );
}

