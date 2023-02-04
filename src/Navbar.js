import './navbar.css';
import { useFormik } from 'formik';
import planetLogo from './assets/images/planet.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          factory: '0',
          line: '0'
        },
        onSubmit: values => {
          
        },

      });

      
      useEffect(() => {
        if(formik.values.factory == 0) {
            navigate('/dashboard/main');
        } else {
            if(formik.values.line == 0) {
                navigate('/dashboard/factory');
            } else {
                navigate('/dashboard/line');
            }
        }
      }, [formik.values.factory, formik.values.line]);

  return (
    <div className="navbar">
        <div className='right'>
            <form onSubmit={formik.handleSubmit}>
                <div className='select factory-nav'>
                    <select value={formik.values.factory} name='factory' onChange={formik.handleChange}>
                        <option value="0" className='option'>All factories</option>
                        <option value="1" className='option'>Factory Name</option>
                        <option value="2" className='option'>Factory Name</option>
                        <option value="3" className='option'>Factory Name</option>
                        <option value="4" className='option'>Factory Name</option>
                    </select>
                </div>
            {          
                formik.values.factory != 0?
                    <div className='select line-nav'>
                        <select value={formik.values.line} name='line' onChange={formik.handleChange}>
                            <option value="0" label="Choose Line" />
                            <option value="1" label="Line Name" />
                            <option value="2" label="Line Name" />
                            <option value="3" label="Line Name" />
                            <option value="4" label="Line Name" />
                        </select>
                    </div>

                :""
            }
            </form>
        </div>
        <ul className='filter'>
            <li className='item active'>Today</li>
            <li className='item'>Yesterday</li>
            <li className='item'>Last Week</li>
            <li className='item'>
                <svg className='icon'>
                    <path fill="#b2bec3" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <input type='date' />
            </li>
        </ul>
    </div>
  );
}

export default Navbar;
