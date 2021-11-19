import React from 'react';

import AppointHeader from '../../Components/Avaibable/AppointHeader';
import Appointava from '../../Components/Avaibable/Appointava';
import Navigation from '../../Components/Shared/Navigation/Navigation';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader date={date} setDate={setDate}></AppointHeader>
            <Appointava date={date}></Appointava>
        </div>
    );
};

export default Appointment;