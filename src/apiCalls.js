// api key: c555d5704e7b4eec95f3a8d77f3179dd

export const getNewsData = () => {
  return fetch(
    'https://newsapi.org/v2/everything?q=keyword&apiKey=c555d5704e7b4eec95f3a8d77f3179dd'
  )
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the response is in JSON format
  })

};
