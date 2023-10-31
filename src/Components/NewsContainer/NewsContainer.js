import React from 'react';
import '../NewsContainer/NewsContainer.scss';
import SingleNewsArticle from '../SingleNewsArticle/SingleNewsArticle';
import { Link } from 'react-router-dom';

function NewsContainer({ articles, handleClick }) {
  let allArticles = articles.map((article) => {
    return (
      <SingleNewsArticle
        key={article.url}
        id={article.url}
        title={article.title}
        image={article.urlToImage}
        author={article.author}
        description={article.description}
        published={article.publishedAt}
        handleClick={handleClick}
      />
    );
  });

  return <div className='article-container'>{allArticles}</div>;
}

export default NewsContainer;
