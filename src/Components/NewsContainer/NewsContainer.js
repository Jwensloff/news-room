import React from 'react'
import SingleNewsArticle from '../SingleNewsArticle/SingleNewsArticle'

function NewsContainer({articles}) {

  let allArticles = articles.map(article => {
    return (
      <SingleNewsArticle 
      id={article.url}
      title={article.title}
      image={article.urlToImage}
      
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
