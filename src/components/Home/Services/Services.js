import React from 'react';
import flourideImg from '../../../images/flouride.png'
import cavityImg from '../../../images/cavity.png'
import WhiteningImg from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name:'Flouride Treatment',
        image:flourideImg
    },
    {
        name:'Cavity Filling',
        image:cavityImg
    },
    {
        name:'Teeth Whitening',
        image:WhiteningImg
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            
            <div className='text-center'>
            <h4 style={{color:'#14D1D2'}}>OUR SERVICES</h4>
            <h2>SERVICES WE PROVIDE</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='w-75 row mt-5 m b-5'>
                {
                    servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
            </div>
        </section>
    );
};

export default Services;