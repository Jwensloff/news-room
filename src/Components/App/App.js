import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import NavBar from '../NavBar/NavBar';
import Article from '../Article/Article';
import { useEffect, useState } from 'react';
import { getNewsData } from '../../apiCalls';
import { data } from '../../mockData';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  
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

  return (
    <div className='App'>
      <NavBar />
      <main className='content'>
        <Routes>
          <Route
            path='/'
            element={
              <NewsContainer articles={articles} handleClick={handleClick} />
            }
          />
          <Route path='/:title' element={<Article article={article} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
