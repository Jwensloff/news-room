import './Article.scss';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import dayjs from 'dayjs';

function Article({ article }) {
  const { id, title, urlToImage, author, content, publishedAt } = article;
  const navigate = useNavigate();
  const originalDate = publishedAt;
  const formattedDate = dayjs(originalDate).format('MMMM D, YYYY, h:mm A');

  const navHome = () => {
    navigate('/');
  };

  console.log(formattedDate);
  return (
    <div className='article'>
      <div className='home-btn-wrapper'>
        <button className='home-btn' onClick={() => navHome()}>
          X
        </button>
      </div>

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
