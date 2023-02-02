import logo from './logo.svg';
import './login.css';
import platform from './assets/images/platform.svg';
import factoryIcon from './assets/images/factoryIcon.svg'; 
import cocaColaLogo from './assets/images/Coca-Cola-Logo.svg';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="Login">
      <div className='left'>
        <div className='center_img'>
          <img src={platform} alt='platform' />
        </div>
      </div>
      <div className='right'>
        <div className='head'>
          <img src={factoryIcon} className='logo' alt='coca-cola-logo' />
          <h1 className='title'>MES</h1>
        </div>
        <div className='login-form'>
          <form onSubmit={formik.handleSubmit}>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              placeholder="elka@qq.com"
              value={formik.values.email}
            />
      
            <input
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              placeholder="PASSWORD"
              value={formik.values.password}
            />
    
            <Link className="button" to="/dashboard">LOGIN</Link>

          </form>
          <div className='bottom-logo'>
            <img src={cocaColaLogo} alt='logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
