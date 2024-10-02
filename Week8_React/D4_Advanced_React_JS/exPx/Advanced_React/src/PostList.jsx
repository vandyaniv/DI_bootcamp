import { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/posts.json');
        if (!response.ok) {
          throw new Error(`Erorr Fetching data : ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('error fetching data ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2> POST </h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3> {post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
