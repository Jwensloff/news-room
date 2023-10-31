import './Article.scss';

import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

function Article({ article }) {
  const { id, title, urlToImage, author, content, publishedAt } = article;

  const originalDate = publishedAt;
  const formattedDate = dayjs(originalDate).format('MMMM D, YYYY, h:mm A');

  console.log(formattedDate);
  return (
    <div className='article'>
      <h2>{title}</h2>
      <img src={urlToImage} className='article-img'></img>
      <h3 className='article-author'>Written by: {author}</h3>
      <h3 className='article-published'>{formattedDate}</h3>
      <span></span>
      <h3 className='article-content'>{content}</h3>
    </div>
  );
}
export default Article;
