import './Article.scss';

import React from 'react';
import { useParams } from 'react-router-dom';

function Article({ article }) {
  console.log('here', article);
  const { id, title, urlToImage, author, content, publishedAt } = article;
  return (
    <div className='article'>
      <h1>{title}</h1>
      <img src={urlToImage} className='article-img'></img>
      <h3 className='article-author'>Written by: {author}</h3>
      <h3 className='article-published'>Published on: {publishedAt}</h3>
      <span></span>
      <h3 className='article-content'>{content}</h3>
    </div>
  );
}
export default Article;
