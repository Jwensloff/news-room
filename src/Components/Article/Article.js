import './Article.scss';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import dayjs from 'dayjs';

function Article({ article }) {
  const { id, title, urlToImage, author, content, publishedAt, url } = article;
  const navigate = useNavigate();
  const originalDate = publishedAt;
  const formattedDate = dayjs(originalDate).format('MMMM D, YYYY, h:mm A');

  const navHome = () => {
    navigate('/');
  };

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
      <div className='link-wrapper'>
        <h3>See the whole article</h3>
        <a href={url}>here!</a>
      </div>
    </div>
  );
}
export default Article;
