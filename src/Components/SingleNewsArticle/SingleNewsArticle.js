import React from 'react';
import '../SingleNewsArticle/SingleNewsArticle.scss';
function SingleNewsArticle({
  id,
  title,
  image,
  author,
  description,
  published,
  handleClick,
}) {
  return (
    <div id={id} className='news-card' onClick={() => handleClick(title)}>
      <img src={image} className='news-img'></img>
      <h2>{title}</h2>
      <h3 className='author-text'>Written by: {author}</h3>
      <h3 className='published-text'>Published: {published}</h3>
      <h3>{description}</h3>
    </div>
  );
}

export default SingleNewsArticle;
