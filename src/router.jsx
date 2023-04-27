import Dashboard from './component/Dashboard/Dashboard';
import DashboardTemplate from './component/Dashboard/DashboardTemplate';
import Calender from './component/GridComponent/Calender';
import Chart from './component/GridComponent/Chart';
import Gantt from './component/GridComponent/Gantt';
import Numbers from './component/GridComponent/Numbers';
import Simpledate from './component/GridComponent/Simpledate';
import Worlload from './component/GridComponent/Worlload';
import Maindashboard from './component/Header/Maindashboard';

export default [
  {
    path:'/',
    element:() => <Chart/>,
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

