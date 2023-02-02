import platform from './assets/images/platform.svg';
import factoryIcon from './assets/images/factoryIcon.svg';
import cocaColaWhite from './assets/images/coca-cola-white.svg';
import machines from './assets/images/machines.svg';
import product from './assets/images/product.svg';
import power from './assets/images/power.svg';
import performance from './assets/images/pereformance.svg';
import dashboard from './assets/images/Dashboard.svg';
import line from './assets/images/line.svg';
import machine from './assets/images/machine.svg';
import planning from './assets/images/planning.svg';
import reports from './assets/images/reports.svg';
import setting from './assets/images/setting.svg';
import logout from './assets/images/logout.svg';
import planet from './assets/images/planet.svg';
import activity1 from './assets/images/Activity.svg';
import activity2 from './assets/images/Activity-1.svg';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='head'>
          <img src={factoryIcon} className='logo' alt='coca-cola-logo' />
          <h1 className='title'>MES</h1>
      </div>
      <ul className='middle-nav nav'>
        <li className='item'><img className="icon" src={dashboard} /> Dashboard</li>
        <li className='item'><img className="icon" src={machine} /> Machines</li>
        <li className='item'><img className="icon" src={planning} /> Planning</li>
        <li className='item'><img className="icon" src={reports} /> Reports</li>
      </ul>
      <ul className='bottom-nav nav'>
        <li className='item'><img className="icon" src={setting} /> Settings</li>
        <li className='item'><img className="icon" src={logout} /> Logout</li>
      </ul>
      <div className='bottom'>
        <img src={cocaColaWhite} />
      </div>
    </div>
  );
}

export default Sidebar;
