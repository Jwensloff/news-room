describe('Homepage', () => {
  beforeEach(() => {

      cy.intercept("GET", "https://newsapi.org/v2/everything?q=keyword&apiKey=c555d5704e7b4eec95f3a8d77f3179dd", {
        statusCode: 200, 
        fixture: "mock_data.json" 
      })
      .visit("http://localhost:3000/") 
  

  });

  it('passes', () => {
cy.get(".content").should("exist")  });
});
