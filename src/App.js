import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/shared/SideBar/SideBar';
import useWeekExpenses from './hook/useWeekExpenses';

function App() {
  useWeekExpenses()
  return (
    <main className="App">
      <SideBar></SideBar>
      <Dashboard></Dashboard>
    </main>
  );
}

export default App;
