import React from 'react';

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
    <div className='flex'>
    <p>{publishedAt}</p>
    <p>{category}</p>
    </div>
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default BlogCard;