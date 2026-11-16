function CommentSection({ comments }) {
    return (
        <section>
            <h2>Recent Comments</h2>

            {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment!</p>
            ) : (
                <ul className="recent-comments">
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.name}</strong>
                            <p>{comment.email}</p>
                            <p>{comment.text}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default CommentSection;