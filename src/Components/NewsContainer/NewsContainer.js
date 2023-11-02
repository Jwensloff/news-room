import React from 'react';
import '../NewsContainer/NewsContainer.scss';
import SingleNewsArticle from '../SingleNewsArticle/SingleNewsArticle';
import SearchSort from '../SearchSort/SearchSort';

function NewsContainer({
  articles,
  handleClick,
  keyword,
  setKeyword,
  handleSearch,
  filteredArticles,
  filter,
  exitSearch,
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
        url={article.url}
      />
    );
  });

  return (
    <div className='homepage'>
      <SearchSort
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
        exitSearch={exitSearch}
      />
      {allArticles.length ? (
        <div className='article-container'>{allArticles}</div>
      ) : (
        <p className='user-msg'>
          Sorry, we couldn't find anything that included that keyword. Please
          try agian.
        </p>
      )}
    </div>
  );
}

export default NewsContainer;
