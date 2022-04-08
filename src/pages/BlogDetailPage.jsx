import { useParams } from 'react-router-dom';
import { blogs } from '../data';

function BlogDetailPage() {
  const params = useParams(); // get the dynamic ID from the URL

  // logic that extract the article based on the `params.dynamicID`
  const blogDetail = blogs.find(
    (blog) => blog.id === params.dynamicID
  );

  if (!blogDetail) return <h1>No blog found!</h1>;

  return (
    <div>
      <h1>{blogDetail.title}</h1>
      <p>{blogDetail.description}</p>
    </div>
  );
}
export default BlogDetailPage;
