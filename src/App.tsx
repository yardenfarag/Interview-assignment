import PageHeader from './components/PageHeader';
import Dashboard from './pages/Dashboard';

function App() {
  // Get current date and time in Hebrew format
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
    // Logout handler - can be implemented later
    console.log('Logout clicked');
  };

  return (
    <>
      <PageHeader
        username="פרופ' רוית גבע"
        role="רופא"
        currentDateTime={currentDateTime}
        onLogout={handleLogout}
      />
      <Dashboard />
    </>
  );
}

export default App;
