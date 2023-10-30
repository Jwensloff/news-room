import React from 'react'
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
    <div>
      {allArticles}
    </div>
  )
}

export default NewsContainer
