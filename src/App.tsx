import { useState } from 'react';
import PageHeader from './components/PageHeader';
import Dashboard from './pages/Dashboard';
import SideNav from './components/SideNav';
import { dummyLoggedInUser } from './data/personnel';
import styles from './App.module.scss';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // date and time formatting
  const now = new Date();
  const dateStr = now.toLocaleDateString('he-IL', { 
    day: '2-digit', 
    month: '2-digit', 
    year: '2-digit' 
  });
  const timeStr = now.toLocaleTimeString('he-IL', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  const currentDateTime = `${dateStr} | ${timeStr}`;

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleNavToggle = (isOpen: boolean) => {
    setIsNavOpen(isOpen);
  };

  return (
    <div className={`${styles['app-wrapper']} ${isNavOpen ? styles['nav-open'] : ''}`}>
      <PageHeader
        username={dummyLoggedInUser.name}
        role={dummyLoggedInUser.role}
        currentDateTime={currentDateTime}
        onLogout={handleLogout}
      />
      <Dashboard />
      <SideNav onLogout={handleLogout} onToggle={handleNavToggle} />
    </div>
  );
}

export default App;
