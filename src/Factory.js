import './Factory.css';
import quality from './assets/images/quality.svg';
import volume from './assets/images/volume.svg';
import active from './assets/images/active.svg';
import cycle from './assets/images/cycle.svg';
import production from './assets/images/production.svg';
import speed from './assets/images/speed.svg';

function Factory(props) {
    return (
        <div className="factory">
            <div className="head">
                { props.name }
            </div>
            <ul className="props-body fac-list">
                <li className="item">
                    <label className="item-title">
                        <img src={speed} className="logo" />
                        <span>Actual speed  </span>
                    </label>
                    <span className="item-value">
                        { props.actualSpeed } <span className='unit'>L/s</span>
                    </span>
                </li>
                <li className="item">
                    <label className="item-title">
                        <img src={production} className="logo" />
                        <span>Actual production</span>
                    </label>
                    <span className="item-value">
                        { props.actualProduction } <span className='unit'>L</span>
                    </span>
                </li>
                <li className="item">
                    <label className="item-title">
                        <img src={cycle} className="logo" />
                        <span>Last hour cycle time</span>
                    </label>
                    <span className="item-value">
                        { props.lastHourCycleTime } <span className='unit'>s</span>
                    </span>
                </li>
                <li className="item">
                    <label className="item-title">
                        <img src={active} className="logo" />
                        <span>Ratio of active lines</span>
                    </label>
                    <span className="item-value">
                        { props.ratioOfActiveLines }                        
                    </span>
                </li>
            </ul>
            <span className="border-text">Last Shift</span>
            <span className="border"></span>
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
                            d={ `M25 5 L25 0 A25 25 0 ${props.USLE>50?1:0} 1
                                ${25 - Math.cos((props.USLE / 50 + .5 - 0.005) * Math.PI) * 25} 
                                ${25 - Math.sin((props.USLE / 50 + .5 - 0.005) * Math.PI) * 25} 
                                L${25 - Math.cos((props.USLE / 50 + .5 - 0.005) * Math.PI) * 20} 
                                ${25 - Math.sin((props.USLE / 50 + .5 - 0.005) * Math.PI) * 20} 
                                A20 20 0 ${props.USLE>50?1:0} 0 25 5`
                            }
                        />
                    </svg>
                    <span className='value'>{props.USLE}%</span>
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
                            d={ `M25 5 L25 0 A25 25 0 ${props.OEE>50?1:0} 1
                                ${25 - Math.cos((props.OEE / 50 + .5 - 0.005) * Math.PI) * 25} 
                                ${25 - Math.sin((props.OEE / 50 + .5 - 0.005) * Math.PI) * 25} 
                                L${25 - Math.cos((props.OEE / 50 + .5 - 0.005) * Math.PI) * 20} 
                                ${25 - Math.sin((props.OEE / 50 + .5 - 0.005) * Math.PI) * 20} 
                                A20 20 0 ${props.OEE>50?1:0} 0 25 5`
                            }
                        />
                    </svg>
                        <span className='value'>{props.OEE}%</span>
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
                            d={ `M25 5 L25 0 A25 25 0 ${props.SLE>50?1:0} 1
                                ${25 - Math.cos((props.SLE / 50 + .5 - 0.005) * Math.PI) * 25} 
                                ${25 - Math.sin((props.SLE / 50 + .5 - 0.005) * Math.PI) * 25} 
                                L${25 - Math.cos((props.SLE / 50 + .5 - 0.005) * Math.PI) * 20} 
                                ${25 - Math.sin((props.SLE / 50 + .5 - 0.005) * Math.PI) * 20} 
                                A20 20 0 ${props.SLE>50?1:0} 0 25 5`
                            }
                        />
                    </svg>
                    <span className='value'>{props.SLE}%</span>
                    <span className='label'>SLE</span>

                    </li>
            </ul>
            <ul className="bottom-list fac-list">
                <li className="item">
                    <label className="item-title">
                        <img src={volume} className="logo" />
                        <span>Production Volume</span>
                    </label>
                    <span className="item-value">
                        { props.productionVolume } <span className='unit'>L</span>                   
                    </span>
                </li>
                <li className="item">
                    <label className="item-title">
                        <img src={quality} className="logo" />
                        <span>Production Quality</span>
                    </label>
                    <span className="item-value">
                        { props.productionQuality }                        
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Factory;