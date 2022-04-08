import { blogs } from '../data';

function BlogPage() {
  return (
    <div>
      <h1>Recent Activities</h1>

      <div className='blog-container'>
        {blogs.map((blog) => (
          <a
            href={`blog/${blog.id}`}
            key={blog.id}
            className='blog-item'
          >
            <div>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
