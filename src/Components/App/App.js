import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getNewsData } from '../../apiCalls';
import { data } from '../../mockData';

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
        <NewsContainer articles={articles} />
      </main>
    </div>
  );
}

export default App;
