
import posts from '../data/posts.js';
import BlogPost from '../components/blog/BlogPost';
import { Link } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

function BlogPostsPage() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                setError('Failed to fetch posts. Please try again later.');
            });
    }, []);

    if (error) {
        return <div>{error}</div>
    }
    return (
        <div>
            <h2>Latest Blog Posts</h2>

            {posts.map((post) => (
                <div key={post.id}>
                    <BlogPost
                        title={post.title}
                        author={`User ${post.userId}`}
                        date='2024-06-01'
                        content={post.body}
                    />
                    <p style={{ textAlign: 'center' }}>
                    <Link className="read-more" to={`/posts/${post.id}`}>
                        Read More
                    </Link>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default BlogPostsPage;
