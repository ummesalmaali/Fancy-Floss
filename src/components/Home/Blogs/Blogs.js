import React from 'react';
import './Blogs.css'
import wilson from '../../../images/wilson.png'
import BlogPost from '../BlogPost/BlogPost';


const blogData = [
    {
        title : 'Check at least a doctor in a year for better health',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita earum tenetur tempore. Eos, nobis adipisci!',
        author: 'Dr. Cudi',
        authorImage : wilson,
        date: '23 April 2021'

    },
    {
        title : 'Two times brush in a day keeps your teeth healthy',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita earum tenetur tempore. Eos, nobis adipisci!',
        author: 'Dr. Sinthia',
        authorImage : wilson,
        date: '23 April 2021'

    },
    {
        title : 'The tooth cancer is the concern of the decade',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita earum tenetur tempore. Eos, nobis adipisci!',
        author: 'Dr. Cudi',
        authorImage : wilson,
        date: '23 April 2021'

    },
]

const Blogs = () => {
    return (
        <section className='blogs my-5'>
            <div className="container">
                <div className="section-header text-center">
                <h5 className="text-primary">OUR BLOG</h5>
                <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                   {
                    blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                   }
                </div>
            </div>

        </section>
    );
};

export default Blogs;