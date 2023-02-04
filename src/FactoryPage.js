import './FactoryPage.css';
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

function FactoryPage() {
    const lossTree = {
        of: {
            value: 25,
            parts: [
                {
                    title: "Breackdown",
                    value: 5,
                    offset: 0
                },
                {
                    title: "Cleansing Process",
                    value: 4,
                    offset: 5
                },
                {
                    title: "Change Over Time",
                    value: 8,
                    offset: 9
                },
                {
                    title: "Idle",
                    value: 3,
                    offset: 17
                },
                {
                    title: "Minor Stops",
                    value: 5,
                    offset: 20
                }
            ]
        },
        on: {
            value: 75,
            parts: [
                {
                    title: "Quality Loss",
                    value: 45,
                    offset: 0
                },
                {
                    title: "Speed Loss",
                    value: 30,
                    offset: 45
                }
            ]
        }
    }
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
      const demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
    return ( 
        <div className="factory-page">
            <div className='top'>
                <h2 className='title'>Factory Name</h2>
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
                                <ul className='items'>
                                    <li className='item'>
                                        <span className='item-title'><img src={bottle} alt="product" /> <span>Bottle</span></span>
                                        <span className='item-value'>500K</span>
                                    </li>
                                    <li className='item'>
                                        <span className='item-title'><img src={pack} alt="pack" /> <span>Pack</span></span>
                                        <span className='item-value'>50K</span>
                                    </li>
                                    <li className='item'>
                                        <span className='item-title'><img src={pallete} alt="pallete" /> <span>Pallete</span></span>
                                        <span className='item-value'>10K</span>
                                    </li>
                                </ul>
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
                                                    fill = "#FF9F1C"
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
                                                    fill = "#00D1DE"
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
                                                <span className='label'>OEE</span>

                                            </li>
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
                                                    fill = "#CA4E82"
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
                                            <span className='label'>SLE</span>

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
                                                    Performance
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
                                <img src={usage} alt="usage" /><span>Usage KPI</span>
                                </h3>
                            </div>
                            <div className='block-body'>
                                <ul className='usage-list'>
                                    <li className='item'>
                                        <div className='item-left'>
                                            <img src={energy} alt="energy" />
                                            <span>Energy</span>
                                        </div>
                                        <div className='item-right'>
                                            <div className='item-block'>
                                                <div className='item-block-label'>
                                                    For Liter
                                                </div>
                                                <div className='item-block-value'>
                                                    500 J
                                                </div>
                                            </div>
                                            <div className='item-block'>
                                                <div className='item-block-label'>
                                                    For Bottle
                                                </div>
                                                <div className='item-block-value'>
                                                    500 J
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='item'>
                                        <div className='item-left'>
                                            <img src={water} alt="water" />
                                            <span>Water</span>
                                        </div>
                                        <div className='item-right'>
                                            <div className='item-block'>
                                                <div className='item-block-label'>
                                                    For Liter
                                                </div>
                                                <div className='item-block-value'>
                                                    500 L
                                                </div>
                                            </div>
                                            <div className='item-block'>
                                                <div className='item-block-label'>
                                                    For Bottle
                                                </div>
                                                <div className='item-block-value'>
                                                    500 L
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='block tree-block'>
                            <div className='head'>
                                <h3 className='title'>
                                <svg className='arrow-icon' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 250 250"><g stroke-width="19" stroke="hsl(211, 18%, 34%)" fill="none" stroke-linecap="square" transform="matrix(0.7313537016191706,0.6819983600624985,-0.6819983600624985,0.7313537016191706,127.2578633773312,-455.3408246726676)"><line x1="345" y1="345" x2="455" y2="455" marker-end="url(#SvgjsMarker1519)"></line></g><defs><marker markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" viewBox="0 0 9 9" orient="auto" id="SvgjsMarker1519"><polyline points="0,4.5 4.5,2.25 0,0" fill="none" stroke-width="1.5" stroke="hsl(211, 18%, 34%)" stroke-linecap="square" transform="matrix(1,0,0,1,1.5,2.25)"></polyline></marker></defs></svg>
                                    <span>Loss Tree</span>
                                </h3>
                            </div>
                            <div className='block-body'>
                                <div className='block-column start'>
                                    <div className='labels'>
                                        <span className='off'>OFF</span>
                                        <span className='on'>ON</span>
                                    </div>
                                    <div className='bars'>
                                        <span className='off' style={{height: lossTree.of.value + '%', backgroundColor: '#F40009'}}></span>
                                        <span className='on' style={{height: lossTree.on.value + '%', backgroundColor: '#2EC4B6'}}></span>
                                    </div>
                                    <div className='values'>
                                        <span className='off'>{ lossTree.of.value }</span>
                                        <span className='on'>{ lossTree.on.value }</span>
                                    </div>
                                </div>
                                <div className='group'>
                                { 
                                    lossTree.of.parts.map((ele) => {
                                        return <div className='g-block-column of-column'>
                                            <span className='bar-title'>{ele.title}</span>
                                            <div className='bar-block'>
                                                <div className='bar' style={{height: lossTree.of.value + '%'}}>
                                                    <div className='color' style={{height: ele.value / lossTree.of.value * 100 + '%', top: ele.offset / 100 * 195 + 'px'}}></div>
                                                </div>
                                                <span className='bar-value'>{ele.value}</span>
                                            </div>
                                        </div>
                                    }) 
                                }
                                </div>
                                <div className='group'>
                                {
                                    lossTree.on.parts.map((ele) => {
                                        return <div className='g-block-column on-column' style={{marginTop: lossTree.of.value * 2 + 25 + 'px'}}>
                                                    <div className='bar-block' style={{height: 200 - 5 - lossTree.of.value * 2}}>
                                                        <div className='bar' style={{height: '100%'}}>
                                                            <div className='color' style={{height: ele.value / lossTree.on.value * 100 + '%', top: ele.offset / 100 * 195 + 'px'}}></div>
                                                        </div>
                                                        <span className='bar-value'>{ele.value}</span>
                                                    </div>
                                                    <span className='bar-title'>{ele.title}</span>
                                                </div>
                                    }) 
                                }
                                </div>
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

export default FactoryPage;