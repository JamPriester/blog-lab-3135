
import { useState } from 'react';

function CommentForm({ onAddComment }) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

      if (name.trim() === '' || comment.trim() === '') {
        setError('Please enter both your name and a comment.');
    return;
    }

    setError('');

        onAddComment({
            name: name,
            text: comment
        });

        setName('');
        setComment('');
    }

    return (
    <form onSubmit={handleSubmit}>
        <h3>Leave a Comment</h3>
            {error && <p className="form-error">{error}</p>}


        <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />

        <textarea
            placeholder="Write your comment..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
        />

        <button type="submit">Submit</button>
    </form>
    );
}

export default CommentForm;
