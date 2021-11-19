import React from 'react';

import Doctors from '../../Components/Doctors/Doctors';
import TreatmentBanner from '../../Components/TreatmentBanner/TreatmentBanner';
import AppointBanner from '../../Components/Shared/AppointBanner/AppointBanner';
import Benner from '../../Components/Shared/Banner/Benner';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Service from '../../Components/Shared/Service/Service';
import ShortInfo from '../../Components/Shared/ShortInfo/ShortInfo';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Benner></Benner>
            <ShortInfo></ShortInfo>
            <Service></Service>
            <TreatmentBanner></TreatmentBanner>
            <AppointBanner></AppointBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;