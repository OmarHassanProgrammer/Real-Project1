import platform from './assets/images/platform.svg';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
