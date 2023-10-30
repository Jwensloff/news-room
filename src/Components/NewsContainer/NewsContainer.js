import React from 'react'
import '../NewsContainer/NewsContainer.scss'
import SingleNewsArticle from '../SingleNewsArticle/SingleNewsArticle'

function NewsContainer({articles}) {

  let allArticles = articles.map(article => {
    return (
      <SingleNewsArticle 
      key={article.url}
      id={article.url}
      title={article.title}
      image={article.urlToImage}
      author={article.author}
      description={article.description}
      published={article.publishedAt}
      /> 
    )
  })

  return (
    <div className='article-container'>
      {allArticles}
    </div>
  )
}

export default NewsContainer
