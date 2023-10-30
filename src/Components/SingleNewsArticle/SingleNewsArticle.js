import React from 'react';
import '../SingleNewsArticle/SingleNewsArticle.scss'
function SingleNewsArticle({
  id,
  title,
  image,
  author,
  description,
  published,
}) {
  return <div id={id} className='news-card'>
    <h2>{title}</h2>
    <h3>{description}</h3>
    <h3>Written by: {author}</h3>
    <h3>Published: {published}</h3>
    <img src={image} className='news-img'></img>
  </div>;
}

export default SingleNewsArticle;
