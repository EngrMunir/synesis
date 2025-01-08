import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.org/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blogs;