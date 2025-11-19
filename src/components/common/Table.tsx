import { ReactNode } from 'react';
import styles from './Table.module.scss';

export interface TableColumn<T> {
  header: string;
  key?: keyof T;
  value?: (row: T) => ReactNode;
  className?: string;
  headerClassName?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}

export default function Table<T extends Record<string, any>>({
  columns,
  data,
  className = '',
}: TableProps<T>) {
  const getCellValue = (row: T, column: TableColumn<T>): ReactNode => {
    if (column.value) {
      return column.value(row);
    }
    if (column.key) {
      return row[column.key] ?? '';
    }
    return '';
  };

  return (
    <div className={`${styles['table-wrapper']} ${className}`.trim()}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`${styles['table-header']} ${column.headerClassName || ''}`.trim()}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles['table-row']}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`${styles['table-cell']} ${column.className || ''}`.trim()}
                >
                  {getCellValue(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

