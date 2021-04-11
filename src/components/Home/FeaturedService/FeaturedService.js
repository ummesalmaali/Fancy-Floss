import React from 'react';
import featured from '../../../images/featured.png'
const FeaturedService = () => {
    return (
        <section className='features-service pb-0 pb-md-0 my-5'>
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img className='img-fluid' src={featured} alt="Responsive Image"/>
                    </div>
                    <div className='col-md-7 align-self-center'>
                       <h1>Exceptional Dental Care, On Your Terms</h1>
                       <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi voluptatem similique distinctio consequuntur libero quo quod itaque magnam provident. Hic perferendis libero aliquid quisquam temporibus doloremque consequuntur reprehenderit officia!</p>
                       <button className="btn btn-primary">Learn more</button>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default FeaturedService;