import './navbar.css';
import { useFormik } from 'formik';
import planetLogo from './assets/images/planet.svg';

function Navbar() {
    
    const formik = useFormik({
        initialValues: {
          factory: '0',
          line: '0'
        },
        onSubmit: values => {
          
        },
      });

  return (
    <div className="navbar">
        <div className='right'>
            <form onSubmit={formik.handleSubmit}>
                <div className='select factory'>
                    <select value={formik.values.factory} name='factory' onChange={formik.handleChange}>
                        <option value="0" label="All factories" />
                        <option value="1" label="Factory Name" />
                        <option value="2" label="Factory Name" />
                        <option value="3" label="Factory Name" />
                        <option value="4" label="Factory Name" />
                    </select>
                </div>
            {          
                formik.values.factory != 0?
                    <div className='select line'>
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
