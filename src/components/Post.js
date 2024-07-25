import React from "react";

function Post({post}) {
  return (
    <div className="card blog" style={{width: "40rem"}}>
      <img src={post.urlToImage} className="card-img-top" alt="Error Image Loading..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.description}
        </p>
        <span className="publish">Published At : {post.publishedAt}</span>
        <a href={post.url} className="btn btn-primary">
          Read Full Blog
        </a>
      </div>
    </div>
  );
}

export default Post;
