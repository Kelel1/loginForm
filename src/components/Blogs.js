import React                            from 'react';
import axios                            from 'axios';
import { useState, useEffect }          from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:4000/api/blogs')
      .then(response => {
        console.log('promise fullfilled');
        setBlogs(response.data);
        
      })
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog =>
          <li key={blog._id}>
            {blog.content}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Blogs;