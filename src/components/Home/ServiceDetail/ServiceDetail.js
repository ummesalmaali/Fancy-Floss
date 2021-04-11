import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height:'50px'}} src={service.image} alt=""/>
            <h5 className='mt-5 mb-3'>{service.name}</h5>
            <h6 className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident placeat distinctio voluptatibus iure inventore cumque quidem illum cupiditate voluptas velit?</h6>
            
        </div>
    );
};

export default ServiceDetail;