import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import DashboardTemplate from './component/Dashboard/DashboardTemplate';
import Header from './component/Header/Header';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

function App() {
  return (
    <div className='antialiased font-main text-sm text-black'>
      <Header/>
    {/* <Dashboard/> */}
    {/* <DashboardTemplate/>  */}


  </div>
  );
}

export default App;
