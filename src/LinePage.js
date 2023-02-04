import './LinePage.css';
import product from './assets/images/product.svg';
import bottle from './assets/images/bottle.svg';
import pack from './assets/images/pack.svg';
import pallete from './assets/images/pallete.svg';
import pereformance from './assets/images/pereformance.svg';
import usage from './assets/images/usage.svg';
import energy from './assets/images/energy.svg';
import water from './assets/images/water.svg';
import activity from './assets/images/Activity.svg';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function LinePage() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const bigGraph = [
        {
          name: '24 Jan',
          value: 240
        },
        {
          name: '24 Jan',
          value: 255
        },
        {
          name: '24 Jan',
          value: 250
        },
        {
          name: '24 Jan',
          value: 230
        },
        {
          name: '24 Jan',
          value: 200
        },
        {
          name: '24 Jan',
          value: 170
        },
        {
          name: '24 Jan',
          value: 150
        },
        {
          name: '24 Jan',
          value: 170
        },
        {
          name: '24 Jan',
          value: 220
        },
        {
          name: '24 Jan',
          value: 240
        },
        {
          name: '24 Jan',
          value: 235
        },
        {
          name: '24 Jan',
          value: 220
        },
        {
          name: '24 Jan',
          value: 135
        },
        {
          name: '24 Jan',
          value: 155
        },
        {
          name: '24 Jan',
          value: 160
        },
        {
          name: '24 Jan',
          value: 225
        },
        {
          name: '24 Jan',
          value: 300
        },
      ];

      const demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
    return ( 
        <div className="line-page">
            <div className='top'>
                <h2 className='title'>Factory Name / Line Name</h2>
            </div>
            <div className='body'>
                <div className='column left'>
                    <div className='row'>
                        <div className='block'>
                            <div className='head'>
                                <h3 className='title'>
                                    <img src={product} alt="product" /> <span>Total Production</span>
                                </h3>
                            </div>
                            <div className='block-body'>
                                <ul className='d-items'>
                                    <li className='item'>
                                        <span className='item-value'><span>5,000</span> <span className="unit">bph</span></span>
                                        <span className='item-label'>Production/h</span>
                                    </li>
                                    <li className='item'>
                                        <span className='item-value'><span>7,000</span> <span className="unit">KM</span></span>
                                        <span className='item-label'>Actual Production</span>
                                    </li>
                                </ul>
                                <div className='bar-cont'>
                                    <div className='bar-left'>
                                        <div className='bar fir-bar'>

                                        </div>
                                        <span className='bar-label'>
                                            Performance
                                        </span>
                                    </div>
                                    <div className='bar-value'>
                                        30%
                                    </div>            
                                </div>
                            </div>
                        </div>
                        <div className='block sec-block'>
                            <div className='head'>
                                <h3 className='title'>
                                    <img src={pereformance} alt="performance" /><span>Performance Indicator KPI</span>
                                </h3>
                            </div>
                            <div className='block-body'>
                                <div className='left'>
                                    <ul className="charts">
                                        <li className="item"><svg viewBox={`0 0 50 50`}>
                                            <path
                                                className="chart"
                                                fill = "#aaaaaa"
                                                stroke="none"
                                                d={ `M25 5 L25 0 A25 25 0 1 1
                                                    24.6
                                                    0.003
                                                    L24.7
                                                    5.001
                                                    A20 20 0 1 0 25 5`
                                                }
                                            />
                                                <path
                                                    className="chart"
                                                    fill = "#08415C"
                                                    stroke="none"
                                                    d={ `M25 5 L25 0 A25 25 0 ${75>50?1:0} 1
                                                        ${25 - Math.cos((75 / 50 + .5 - 0.005) * Math.PI) * 25} 
                                                        ${25 - Math.sin((75 / 50 + .5 - 0.005) * Math.PI) * 25} 
                                                        L${25 - Math.cos((75 / 50 + .5 - 0.005) * Math.PI) * 20} 
                                                        ${25 - Math.sin((75 / 50 + .5 - 0.005) * Math.PI) * 20} 
                                                        A20 20 0 ${75>50?1:0} 0 25 5`
                                                    }
                                                />
                                            </svg>
                                            <span className='value'>{75}%</span>
                                            <span className='label'>USLE</span>
                                            </li>
                                    </ul>
                                </div>
                                <div className='right'>
                                    <ul className='bar-rows'>
                                        <li className='item'>
                                            <div className='bar-left'>
                                                <div className='bar fir-bar'>

                                                </div>
                                                <span className='bar-label'>
                                                    Availabilty
                                                </span>
                                            </div>
                                            <div className='bar-value'>
                                                30%
                                            </div>
                                        </li>
                                        <li className='item'>
                                            <div className='bar-left'>
                                                <div className='bar sec-bar'>

                                                </div>
                                                <span className='bar-label'>
                                                    Performance
                                                </span>
                                            </div>
                                            <div className='bar-value'>
                                                60%
                                            </div>
                                        </li>
                                        <li className='item'>
                                            <div className='bar-left'>
                                                <div className='bar sec-bar'>

                                                </div>
                                                <span className='bar-label'>
                                                    Quality
                                                </span>
                                            </div>
                                            <div className='bar-value'>
                                                60%
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>                        
                        </div>
                        <div className='block'>
                            <div className='head'>
                                <h3 className='title'>
                                <img src={usage} alt="usage" /><span>Power KPI</span>
                                </h3>
                            </div>
                            <div className='block-body'>
                                <ul className='d-items'>
                                    <li className='item'>
                                        <span className='item-value'><span>5,000</span> <span className="unit">bph</span></span>
                                        <span className='item-label'>Production/h</span>
                                    </li>
                                    <li className='item'>
                                        <span className='item-value'><span>7,000</span> <span className="unit">KM</span></span>
                                        <span className='item-label'>Actual Production</span>
                                    </li>
                                </ul>
                                <ul className='d-items'>
                                    <li className='item'>
                                        <span className='item-value'><span>5,000</span> <span className="unit">bph</span></span>
                                        <span className='item-label'>Production/h</span>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='block current-activity'>
                            <div className='head'>
                                <h3 className='title'>
                                    <img src={activity} alt="activity" />
                                    <span>Current Activity</span>
                                </h3>
                            </div>
                            <div className='block-body'>

                                <ResponsiveContainer width="100%" aspect={2}>
                                        <AreaChart
                                        width={200}
                                        height={100}
                                        data={bigGraph}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 17,
                                            bottom: 0,
                                        }}
                                        >
                                            
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="value" stroke="#08415C" fill="#00000000" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='block bar-block'>
                            <div className='head'>
                                <h3 className='title'>
                                    <img src={activity} alt="activity" /><span>Time Line</span>
                                </h3>
                            </div>
                            <div className='block-body'>
                                <span className='label'>LINE NAME</span>
                                <div className='bar'>
                                    <div className='bar-segment' style={{ backgroundColor: '#F40009', width: '20%' }}></div>
                                    <div className='bar-segment' style={{ backgroundColor: '#2EC4B6', width: '30%' }}></div>
                                    <div className='bar-segment' style={{ backgroundColor: '#CDD5E1', width: '20%' }}></div>
                                    <div className='bar-segment' style={{ backgroundColor: '#F40009', width: '10%' }}></div>
                                    <div className='bar-segment' style={{ backgroundColor: '#2EC4B6', width: '20%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column right'>
                    <div className='block graph-block'>
                        <div className='head'>
                            <h3 className='title'>
                                <span className="dot-icon" style={{backgroundColor: '#FF9F1C'}}></span><span>Cycle Time</span>
                            </h3>
                        </div>
                        <div className='block-body'>
                            <div class="graph">
                                <ResponsiveContainer width="100%" aspect={2}>
                                    <AreaChart
                                    width={200}
                                    height={100}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 17,
                                        bottom: 0,
                                    }}
                                    >
                                    <Area type="monotone" dataKey="uv" stroke="#FF9F1C" fill="#FF9F1C33" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <ul className='graph-data'>
                                <li className='item avg-item'>
                                    <span className='item-label'>Avg.</span>
                                    <span className='item-value'>1.0</span>
                                </li>
                                <li className='item'>
                                    <span className='item-label'><span className='down-arrow-icon'></span>Min.</span>
                                    <span className='item-value'>0.5</span>
                                </li>
                                <li className='item'>
                                    <span className='item-label'>Max.</span>
                                    <span className='item-value'><span className='up-arrow-icon'></span>2.0</span>
                                </li>
                            </ul>
                        </div>
                        <div className='head s-head'>
                            <h3 className='title'>
                                <span className="dot-icon" style={{backgroundColor: '#CA4E82'}}></span><span>Speed</span>
                            </h3>
                        </div>
                        <div className='block-body'>
                            <div class="graph">
                                <ResponsiveContainer width="100%" aspect={2}>
                                    <AreaChart
                                    width={200}
                                    height={100}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 17,
                                        bottom: 0,
                                    }}
                                    >
                                    <Area type="monotone" dataKey="uv" stroke="#CA4E82" fill="#CA4E8233" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <ul className='graph-data'>
                                <li className='item avg-item'>
                                    <span className='item-label'>Avg.</span>
                                    <span className='item-value'>1.0</span>
                                </li>
                                <li className='item'>
                                    <span className='item-label'><span className='down-arrow-icon'></span>Min.</span>
                                    <span className='item-value'>0.5</span>
                                </li>
                                <li className='item'>
                                    <span className='item-label'>Max.</span>
                                    <span className='item-value'><span className='up-arrow-icon'></span>2.0</span>
                                </li>
                            </ul>
                        </div>
                        <div className='head s-head'>
                            <h3 className='title'>
                                <span className="dot-icon" style={{backgroundColor: '#00D1DE'}}></span><span>Cycle Time</span>
                            </h3>
                        </div>
                        <div className='block-body'>
                            <div class="graph">
                                <ResponsiveContainer width="100%" aspect={2}>
                                    <AreaChart
                                    width={200}
                                    height={100}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 17,
                                        bottom: 0,
                                    }}
                                    >
                                    <Area type="monotone" dataKey="uv" stroke="#2EC4B6" fill="#2EC4B633" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <ul className='graph-data'>
                                <li className='item avg-item'>
                                    <span className='item-label'>Avg.</span>
                                    <span className='item-value'>1.0</span>
                                </li>
                                <li className='item'>
                                    <span className='item-label'><span className='down-arrow-icon'></span>Min.</span>
                                    <span className='item-value'>0.5</span>
                                </li>
                                <li className='item'>
                                    <span className='item-label'>Max.</span>
                                    <span className='item-value'><span className='up-arrow-icon'></span>2.0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinePage;