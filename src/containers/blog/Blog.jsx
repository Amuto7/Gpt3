import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="wui__blog section__padding" id="blog">
      <div className="wui__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="wui__blog-container">
        <div className="wui__blog-container-groupA">
          <Article
            imgurl={blog01}
            date="Sep 26, 2021"
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
        <div className="wui__blog-container-groupB">
          <Article
            imgurl={blog02}
            date="Sep 26, 2021"
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            imgurl={blog03}
            date="Sep 26, 2021"
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            imgurl={blog04}
            date="Sep 26, 2021"
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Article
            imgurl={blog05}
            date="Sep 26, 2021"
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
