import React from 'react';

function SingleNewsArticle({
  id,
  title,
  image,
  author,
  description,
  published,
}) {
  return <div id={id}>
    <h2>{title}</h2>
    <h3>{description}</h3>
    <h3>Written by: {author}</h3>
    <h3>Published: {published}</h3>
    <img src={image}></img>
  </div>;
}

export default SingleNewsArticle;
