function BlogPost(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>By {props.author} | {props.date}</p>
            <p>{props.content}</p>
        </article>
    );
}

export default BlogPost;