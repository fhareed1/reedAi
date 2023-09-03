import React from 'react';
import   './Article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={imgUrl} alt="Blog Post" />
      </div>
      <div className='gpt3__blog-container__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Ariticle</p>
      </div>
    </div>
  );
};

export default Article;
