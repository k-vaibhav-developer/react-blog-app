import React, { useEffect, useState } from "react";
import Post from "./Post";

function PostList() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-06-24&sortBy=publishedAt&apiKey=6968b74405a8401fbc2390b7e75ec2b6"
    )
      .then((res) => res.json())
      .then((data) => setPost(data.articles))
      .catch((err) => console.log("Error in fetching the data from the api"));
  }, []);

  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    console.log(pageNo);
  }, [pageNo])

  function handlePrev() {
    if (pageNo !== 0) {
      setPageNo(pageNo - 1);
    }
  }

  function handleNext() {
    if (pageNo < Math.floor(post.length / 10) - 1) {
      setPageNo(pageNo + 1);
    }
  }

  return (
    <div className="flex-container">
      <div className="pagination">
        <button type="button" className="btn btn-outline-dark" onClick={handlePrev}>
          Prev
        </button>
        <span>
          {pageNo + 1} of {Math.floor(post.length / 10)}
        </span>
        <button type="button" className="btn btn-outline-dark" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="blogposts">
        {post.slice(pageNo * 10, pageNo * 10 + 10).map((item, index) => (
          <Post post={item} key={index}></Post>
        ))}
      </div>
    </div>
  );
}

export default PostList;
