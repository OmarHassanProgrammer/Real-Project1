import Factory from './Factory';
import './MainDashboard.css';

function MainDashboard() {
    return (
        <div className="main-dashboard">
            <div className='top'>
                <div className='navigation'>Dashboard / Production</div>
                <div className='sub-filter'>
                    <div className='item'>SKU</div>
                    <div className='item active'>Production</div>
                </div>
            </div>
            <div className='factories'>
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="100"
                    SLE="100"
                    USLE="100"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="50"
                    SLE="63"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="65"
                    SLE="63"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="100"
                    SLE="63"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="90"
                    SLE="80"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="80"
                    SLE="63"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2"
                    OEE="75"
                    SLE="63"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
                <Factory 
                    name="Factory Name"
                    actualSpeed="5000"
                    actualProduction="20000"
                    lastHourCycleTime="20"
                    ratioOfActiveLines="5:2" 
                    OEE="70"
                    SLE="63"
                    USLE="30"
                    productionVolume="500"
                    productionQuality="5000"
                />
            </div>
        </div>
    );
}

export default MainDashboard;