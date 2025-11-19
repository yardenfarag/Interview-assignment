import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { LogoutIcon } from './Icons';
import styles from './SideNav.module.scss';

interface SideNavProps {
  onLogout?: () => void;
  onToggle?: (isOpen: boolean) => void;
}

export default function SideNav({ onLogout, onToggle }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav className={`${styles['side-nav']} ${isOpen ? styles.open : ''}`}>
      <div className={styles['nav-content']}>
        <div className={styles['toggle-button']}>
          <Hamburger 
            toggled={isOpen}
            toggle={toggleNav}
            size={20}
            color="#ffffff"
          />
        </div>
        
        <div className={styles['nav-items']}>
          <button 
            className={styles['nav-item']}
            onClick={handleLogout}
            title={isOpen ? '' : 'התנתק'}
          >
            <LogoutIcon className={styles['nav-icon']} />
            {isOpen && <span>התנתק</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

