import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import NavBar from '../NavBar/NavBar';
import Article from '../Article/Article';
import SearchSort from '../SearchSort/SearchSort';
import { useEffect, useState } from 'react';
import { getNewsData } from '../../apiCalls';
import { data } from '../../mockData';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  useEffect(() => {
    console.log('data', data.articles);
    setArticles(data.articles);
  }, []);

  const navigate = useNavigate();

  const handleClick = (title) => {
    console.log('clicked', title);
    const filteredArticle = articles.find((article) => article.title === title);
    setArticle(filteredArticle);
    navigate(`/${title}`);
  };

  const exitSearch = () => {
    setFilter(false);
    setFilteredArticles('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('clicked', keyword);
    setFilter(true);
    const filteredArticles = articles.filter((article) => {
      let editedKeyword = keyword?.toLowerCase().trim();
      if (
        article.title.toLowerCase().includes(editedKeyword) ||
        article.author.toLowerCase().includes(editedKeyword) ||
        article.description.toLowerCase().includes(editedKeyword) ||
        article.content.toLowerCase().includes(editedKeyword)
      ) {
        return article;
      }
    });
    console.log(filteredArticles);
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
          <Route path='/:title' element={<Article article={article} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
