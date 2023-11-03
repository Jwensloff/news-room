import '../NewsContainer/NewsContainer.scss';
import React from 'react';
import SingleNewsArticle from '../SingleNewsArticle/SingleNewsArticle';
import SearchSort from '../SearchSort/SearchSort';
import PropTypes from 'prop-types';

function NewsContainer({
  articles,
  filteredArticles,
  handleClick,
  keyword,
  setKeyword,
  handleSearch,
  filter,
  exitSearch,
}) {
  const mappedArticles = filter ? filteredArticles : articles;

  let allArticles = mappedArticles?.map((article) => {
    return (
      <SingleNewsArticle
        key={article.url}
        id={article.url}
        title={article.title}
        image={article.urlToImage}
        author={article.author}
        description={article.description}
        published={article.publishedAt}
        url={article.url}
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
        exitSearch={exitSearch}
      />
      {allArticles?.length ? (
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

NewsContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      urlToImage: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
      publishedAt: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  filteredArticles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      urlToImage: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
      publishedAt: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  handleClick: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  filter: PropTypes.bool.isRequired,
  exitSearch: PropTypes.func.isRequired,
};
