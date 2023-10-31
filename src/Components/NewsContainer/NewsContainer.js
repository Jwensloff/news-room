import React from 'react';
import '../NewsContainer/NewsContainer.scss';
import SingleNewsArticle from '../SingleNewsArticle/SingleNewsArticle';
import { Link } from 'react-router-dom';
import SearchSort from '../SearchSort/SearchSort';

function NewsContainer({
  articles,
  handleClick,
  keyword,
  setKeyword,
  handleSearch,
  filteredArticles,
  filter,
}) {
  
  const mappedArticles = filter ? filteredArticles : articles;

  let allArticles = mappedArticles.map((article) => {

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

  return (
    <div className='homepage'>
      <SearchSort
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
      />
      <div className='article-container'>{allArticles}</div>
    </div>
  );
}

export default NewsContainer;
