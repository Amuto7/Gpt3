import React from 'react';
import './Article.css'

const Article = ({imgurl,date,title}) => {
    return (
        <div className='wui__blog-container_article'>
            <div className='wui__blog-container_article-img'>
                <img src={imgurl} alt="blog" />
            </div>
            <div className="wui__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read full Article</p>
            </div>
        </div>
    );
}

export default Article;
