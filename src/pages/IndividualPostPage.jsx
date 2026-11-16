
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

import BlogPost from '../components/blog/BlogPost';
import CommentSection from '../components/blog/CommentSection';
import CommentForm from '../components/blog/CommentForm';

function IndividualPostPage() {

    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            setPost(response.data);

            return axios.get(
                `https://jsonplaceholder.typicode.com/users/${response.data.userId}`
            );
        })
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            setError('Unable to load this blog post.');
        });

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => {
        setComments(response.data.map(comment => ({
            name: comment.name,
            email: comment.email,
            text: comment.body
        })));
    })
    .catch(error => {
        setError('Unable to load comments.');
    });

}, [id]);


   function addComment(newComment) {
    axios.post(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        {
            name: newComment.name,
            body: newComment.text,
            postId: Number(id)
        }
    )
    .then(response => {
        setComments([...comments, {
            name: response.data.name,
            email: response.data.email || '',
            text: response.data.body
        }]);
    })
    .catch(error => {
        setError('Unable to submit your comment. Please try again.');
         });
    }


        if (error) {
        return <p>{error}</p>;
    }

    if (!post || !user) {
        return null;
    }


    return (
        <div>
            <BlogPost
                title={post.title}
                author={user.name}
                date=""
                content={post.body}
            />

           <p className="author-email">
             Email: {user.email}
            </p>

            <CommentForm onAddComment={addComment} />

            <CommentSection comments={comments} />
        </div>
    );
}

export default IndividualPostPage;
