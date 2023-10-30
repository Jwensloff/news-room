import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
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
      <header className='App-header'>header</header>
      <main className='content'>
        <NewsContainer articles={articles} />
      </main>
    </div>
  );
}

export default App;
