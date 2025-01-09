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
        </div>
    );
};

export default Details;