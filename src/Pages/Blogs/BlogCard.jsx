import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const { id, slug, url, title, content, image, thumbnail, status, category, publishedAt, updatedAt, userId} = blog;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="img" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <p>{publishedAt}</p>
                    <p>{category}</p>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{`${content.slice(0,50)}........`}<Link to={`/details/${id}`}><button>learn more</button></Link></p>
                
            </div>
        </div>
    );
};

export default BlogCard;