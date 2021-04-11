import React from 'react';
import doctorImg from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const Doctor = () => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height:'250px'}} className='img-fluid- mb-3' src={doctorImg} alt=""/>
            <h4>Dr. Leo</h4>
            <p style={{color:'black'}}><FontAwesomeIcon className='text-primary' icon={faPhoneAlt}></FontAwesomeIcon>+880181234475</p>
        </div>
    );
};

export default Doctor;