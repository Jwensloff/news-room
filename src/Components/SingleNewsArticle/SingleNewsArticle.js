import React from 'react';
import '../SingleNewsArticle/SingleNewsArticle.scss';
function SingleNewsArticle({
  id,
  title,
  image,
  author,
  description,
  published,
}) {
  return (
    <div id={id} className='news-card'>
      <div className='top-card-info'>
        <h2>{title}</h2>
        <h3 className='author-text'>Written by: {author}</h3>
        <h3 className='published-text'>Published: {published}</h3>
      </div>
      <h3>{description}</h3>
      <img src={image} className='news-img'></img>
    </div>
  );
}

export default SingleNewsArticle;
