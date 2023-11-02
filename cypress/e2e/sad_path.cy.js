describe('Sad path testing', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://newsapi.org/v2/everything?q=keyword&apiKey=c555d5704e7b4eec95f3a8d77f3179dd',
      {
        statusCode: 200,
        fixture: 'mock_data.json',
      }
    )
      .as('data')
    });
    
    it('should display a message to the user if their seatch returns 0 results ', () => {
      cy.visit('http://localhost:3000/');
      cy.wait('@data');
    cy.get('.article-container').should('exist');
    cy.get('.news-card').should('have.length', 6);

    cy.get('.form').should('exist');
    cy.get("input[name='keyword']").type('testtest');
    cy.get("input[name='keyword']").should('have.value', 'testtest');
    cy.get('.news-card').should('have.length', 0);
    cy.get('.user-msg').should(
      'contain',
      "Sorry, we couldn't find anything that included that keyword. Please try agian."
    );
    cy.get('.exit-search-btn').should('exist').click();
    cy.get('.news-card').should('have.length', 6);
  });

  it('should navigate the user to an error page if they enter a bad url',()=> {
    cy.visit('http://localhost:3000/potato');
    cy.url().should('contain', 'http://localhost:3000/potato')
    cy.get('.error-page').should('exist').should('contain', '404 page not found')
    cy.get('.exit-btn').should('exist').click()
    cy.url().should('contain', 'http://localhost:3000/')
    cy.get('.article-container').should('exist');
    cy.get('.news-card').should('have.length', 6);
  })

  it('should navigate to error page if api call is bad',() => {
    cy.intercept(
      'GET',
      'https://newsapi.org/v2/everything?q=keyword&apiKey=c555d5704e7b4eec95f3a8d77f3179dd',
      {
        statusCode: 404,
        fixture: 'mock_data.json',
      }
    )
      .as('data')

    cy.visit('http://localhost:3000/');
    cy.wait('@data')
    cy.url().should('contain', 'http://localhost:3000/error')
    cy.get('.error-page').should('exist').should('contain', 'Oops, something went wrong. Please try again later.')
  
  })
});
