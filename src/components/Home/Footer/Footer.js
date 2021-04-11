import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'
import { faFacebookF,faInstagram,faGooglePlusG } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
    const noNamed = [
        {
            name:"Emergency Dental Care", link: "/emergency",

        },
        {name:"Check Up", link:'/checkup'},
        {name:"Treatment of Personal Diseases", link:'/personal-treatment'},
        {name:"Tooth Extraction", link:'/tooth-extract'},
        {name:"Check Up", link:'/checkup'}
     ]
     const ourAddress = [
         {name:"New York - 101010 Hudson", link:"//google.com/map"},
         {name:"Yards", link:"//google.com/map"}
     ]
     const oralHealth = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:'/checkup'},
        {name:"Treatment of Personal Diseases", link:'/personal-treatment'},
        {name:"Tooth Extraction", link:'/tooth-extract'},
        {name:"Check Up", link:'/checkup'},
        {name:"Check Up", link:'/checkup'},
        {name:"Check Up", link:'/checkup'}
     ]
     const services = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:'/checkup'},
        {name:"Treatment of Personal Diseases", link:'/personal-treatment'},
        {name:"Tooth Extraction", link:'/tooth-extract'},
        {name:"Check Up", link:'/checkup'},
        {name:"Check Up", link:'/checkup'},
        {name:"Check Up", link:'/checkup'}
     ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}></FooterCol>
                    <Footer key={2} menuTitle="Services" menuItems={services}></Footer>
                    <Footer key={3} menuTitle="Oral Health" menuItems={oralHealth}></Footer>
                    <Footer key={4} menuTitle="Our Address" menuItems={ourAddress}></Footer>
                    <ul className='social-media list-inline'>
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF}></FontAwesomeIcon></a></li>
                        <li className="list-inline-item"><a href="//goggle.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG}></FontAwesomeIcon></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call Now</h6>
                        <button className="btn btn-primary">221122221</button>
                    </div>
                    <div className="copyRight text-center">
                     <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;