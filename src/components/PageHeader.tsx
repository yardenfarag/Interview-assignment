import { LogoutIcon } from './Icons';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
  username: string;
  role: string;
  currentDateTime: string;
  onLogout?: () => void;
}

export default function PageHeader({ 
  username, 
  role, 
  currentDateTime, 
  onLogout 
}: PageHeaderProps) {
  return (
    <header className={styles['page-header']}>
         <div className={styles['header-left']}>
        <span className={styles['user-info']}>
          <span>שם משתמש: {username}</span>
          <span>תפקיד: {role}</span>
        </span>
      </div>
      <div className={styles['header-right']}>
        <span className={styles['date-time']}>{currentDateTime}</span>
        <div className={styles['logout-button']} onClick={onLogout}>
          <LogoutIcon className={styles['logout-icon']}/>
          יציאה
        </div>
      </div>
     
    </header>
  );
}

