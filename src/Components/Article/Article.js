import './Article.scss';

import React from 'react';
import { useParams } from 'react-router-dom';

function Article({ article }) {
  // const { title } = useParams();
  console.log('here', article);
  const { id, title, urlToImage, author, content, publishedAt } = article;
  return (
    <div className='article'>
      <h1>{title}</h1>
      <img src={urlToImage} className='article-img'></img>
      <h3>Written by: {author}</h3>
      <h3>{publishedAt}</h3>
      <h3>{content}</h3>
    </div>
  );
}
export default Article;
