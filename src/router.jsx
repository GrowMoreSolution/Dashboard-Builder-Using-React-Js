import Dashboard from './component/Dashboard/Dashboard';
import DashboardTemplate from './component/Dashboard/DashboardTemplate';
import Maindashboard from './component/Header/Maindashboard';

export default [
  {
    path:'/',
    element:() => <Dashboard/>,
    exact:true,
  },
  {
    path:'/dashboard',
    element:() => <DashboardTemplate/>,
    exact:true,
  },
  {
    path:'/maindashboard',
    element:() => <Maindashboard/>,
    exact:true,
  },
  
]

