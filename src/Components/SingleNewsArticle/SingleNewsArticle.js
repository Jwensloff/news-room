import React from 'react';
import '../SingleNewsArticle/SingleNewsArticle.scss';
import dayjs from 'dayjs';

function SingleNewsArticle({
  id,
  title,
  image,
  author,
  description,
  published,
  handleClick,
}) {
  const originalDate = published;
  const formattedDate = dayjs(originalDate).format('MMMM D, YYYY, h:mm A');

  return (
    <div id={id} className='news-card' onClick={() => handleClick(title)}>
      <img src={image} className='news-img'></img>
      <h2>{title}</h2>
      <h3 className='author-text'>Written by: {author}</h3>
      <h3 className='published-text'>{formattedDate}</h3>
      <h3>{description}</h3>
    </div>
  );
}

export default SingleNewsArticle;
