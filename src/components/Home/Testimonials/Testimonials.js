import React from 'react';
import './Testimonials.css'
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis.',
        name:'Wilson Harry',
        from:'California',
        img:wilson
    },
    {
        quote:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis.',
        name:'Ema Gomez',
        from:'California',
        img: ema
    },
    {
        quote:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis.',
        name:'Aliza Farari',
        from:'California',
        img:aliza
    }
]

const Testimonials = () => {
   
    return (
     <section className='testimonials my-5 py-5'>
         <div className='container'>
             <div className='section-header'>
                 <h5 className='text-primary '>TESTIMONIAL</h5>
             <h1>What Our Patients <br/> Say</h1>
             </div>
             <div className='card-deck mt-5'>
              {
                testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial> )
              }
             </div>
         </div>
     </section>
    );
};

export default Testimonials;