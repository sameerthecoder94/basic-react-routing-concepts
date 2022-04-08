import { useParams, useSearchParams } from 'react-router-dom';
import { blogs } from '../data';

function BlogDetailPage() {
  const params = useParams(); // get the dynamic ID from the URL
  const [searchParams] = useSearchParams(); // get the query string from the URL

  const topRated = searchParams.get('topRated'); // get the topRated query string from the URL

  // logic that extract the article based on the `params.dynamicID`
  const blogDetail = blogs.find(
    (blog) => blog.id === params.dynamicID
  );

  if (!blogDetail) return <h1>No blog found!</h1>;

  return (
    <div>
      {topRated === 'yes' ? (
        <div
          style={{
            marginTop: 20,
            backgroundColor: 'coral',
            display: 'inline-block',
          }}
        >
          <code>Top Rated</code>
        </div>
      ) : null}

      <h1>{blogDetail.title}</h1>
      <p>{blogDetail.description}</p>
    </div>
  );
}
export default BlogDetailPage;
