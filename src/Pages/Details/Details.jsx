import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const BlogDetails = useLoaderData();
    const [reviews, setReviews] = useState([]);

    const {  url, title, content, image,thumbnail, category, publishedAt } = BlogDetails;

    useEffect(()=>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <div className='flex flex-col gap-5 mt-5'>
            {/* blog section */}
            <div className="flex gap-5">
           <div className='w-1/2 mx-auto'>
            <figure>
                    <img
                    src={thumbnail}
                    alt="blog" />
                </figure>
           </div>
            <div className='w-1/2 mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p>{publishedAt}</p>
                    </div>
                    <button className='btn btn-outline bg-[#C9C5C580]'>{category}</button>
                </div>
                <p>{content}</p>
            </div>
        </div>
        {/* reviews section */}
        <section className="mt-5">
            <h2 className="text-3xl font-bold text-center">Latest Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-6">
                {
                    reviews.map((review,index)=>(
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold mt-2">{review.reviewTitle}</h3>
                            <p className="text-sm text-gray-600">{review.comment}</p>
                            <p className="mt-2">{review.reviewerName}</p>
                        </div>
                    ))
                }
            </div>
        </section>
        {/* subscription section */}
        <section className='mt-10 flex justify-center items-center mb-10'>
            <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold text-center mb-4'>
                Follow the latest trends
                </h2>
                <p className='text-center text-gray-600 mb-6'>
                With our daily newsletter
                </p>
                <form className='flex gap-4'>
                    <input type="email" placeholder='Enter your email' 
                    className='p-3 border border-gray-300 rounded-lg' required/>
                    <button type='submit' 
                    className="btn bg-blue-500 text-white rounded-lg p-3">Subscribe</button>
                </form>
            </div>
        </section>
        </div>
    );
};

export default Details;