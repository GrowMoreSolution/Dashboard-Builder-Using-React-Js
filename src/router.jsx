import Dashboard from './component/Dashboard/Dashboard';
import DashboardTemplate from './component/Dashboard/DashboardTemplate';
import Calender from './component/GridComponent/Calender';
import ChartGrid from './component/GridComponent/ChartGrid';
import Gantt from './component/GridComponent/Gantt';
import Numbers from './component/GridComponent/Numbers';
import SalesPipeline from './component/GridComponent/SalesPipeline';
import Simpledata from './component/GridComponent/Simpledata';
import Workload from './component/GridComponent/Workload';
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

