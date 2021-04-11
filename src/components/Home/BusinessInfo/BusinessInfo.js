import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarkerAlt,faClock,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData = [
        {
            title:'Opening Hours',
            description:'We are open 24*7',
            icon:faClock,
            background:'primary'
        },
        {
            title:'Visit our Location',
            description:'Brooklyn,NY,USA',
            icon:faMapMarkerAlt,
            background:'dark'
        },
        {
            title:'Call us now',
            description:'+15697854124',
            icon:faPhoneVolume,
            background:'primary'
        }
    ]

    return (
        <section className='d-flex justify-content-center'>
           <div className='w-75 row'>
           {
                infosData.map(info => <InfoCard info={info}></InfoCard> )
            }
           </div>
        </section>
    );
};

export default BusinessInfo;