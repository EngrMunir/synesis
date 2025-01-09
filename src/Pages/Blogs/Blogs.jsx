import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredBlogs, setFilteredBlogs] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.org/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBlogs(data);
            setFilteredBlogs(data);
        })
    },[])
    const handleSearch =()=>{
        const term = searchTerm.toLocaleLowerCase();
        const filtered = blogs.filter((blog)=>
            blog.title.toLocaleLowerCase().includes(term)||
            blog.content.toLocaleLowerCase().includes(term)
        )
        setFilteredBlogs(filtered)
    }
    return (
       <div>
       <div className='flex justify-between mt-10 mb-10'>
            <h2 className='text-3xl'>Placeholder Posts</h2>
           <div className='w-1/4'>
           <input type="text"
                className='p-2 border rounded-md'
                placeholder='Search blogs by title or content'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button 
                    className="bg-blue-500 text-white p-2"
                    onClick={handleSearch}
                >
                    Search
                </button>
           </div>
       </div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                filteredBlogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
       </div>
    );
};

export default Blogs;