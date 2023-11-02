import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import NavBar from '../NavBar/NavBar';
import Article from '../Article/Article';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import { getNewsData } from '../../apiCalls';
// import { data } from '../../../cypress/fixtures/mockData';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // setArticles(data.articles)
    getNewsData()
      .then((data) => {
        console.log(data)
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Oops, something went wrong. Please try again later.');
        navigate('/error');
      });
  }, []);

  const handleClick = (title) => {
    const filteredArticle = articles.find((article) => article.title === title);
    setArticle(filteredArticle);
    navigate(`/article/${title}`);
  };

  const exitSearch = () => {
    setFilter(false);
    setFilteredArticles('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilter(true);
    const filteredArticles = articles?.filter((article) => {
      let editedKeyword = keyword && keyword.toLowerCase().trim();
      if (
        article.title?.toLowerCase().includes(editedKeyword) ||
        article.author?.toLowerCase().includes(editedKeyword) ||
        article.description?.toLowerCase().includes(editedKeyword) ||
        article.content?.toLowerCase().includes(editedKeyword)
      ) {
        return article;
      }
    });
    setFilteredArticles(filteredArticles);
  };

  return (
    <div className='App'>
      <NavBar />
      <main className='content'>
        <Routes>
          <Route
            path='/'
            element={
              <NewsContainer
                articles={articles}
                handleClick={handleClick}
                keyword={keyword}
                setKeyword={setKeyword}
                handleSearch={handleSearch}
                filter={filter}
                filteredArticles={filteredArticles}
                exitSearch={exitSearch}
              />
            }
          />
          <Route
            path='/article/:title'
            element={<Article article={article} />}
          />
          <Route
            path='error'
            element={<ErrorPage error={error} setError={setError} />}
          />

          <Route
            path='*'
            element={<ErrorPage error={error} setError={setError} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
