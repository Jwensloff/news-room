import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getNewsData } from '../../apiCalls';
import { data } from '../../mockData';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log('data', data.articles);
    setArticles(data.articles);
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <main className='content'>
        <Routes>
          <Route path='/' element={<NewsContainer articles={articles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
