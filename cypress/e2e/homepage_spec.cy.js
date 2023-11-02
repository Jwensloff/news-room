describe('Homepage', () => {
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
      .visit('http://localhost:3000/');
    cy.wait('@data');
  });

  it('should display the news cards', () => {
    cy.get('h1').should('contain', 'News Room');
    cy.get('.form').should('exist');

    cy.get('.article-container').should('exist');
    cy.get('.news-card').should('have.length', 6);
    cy.get('.news-card')
      .first()
      .should(
        'have.id',
        'https://gizmodo.com/reverse-keyword-search-warrants-explainer-colorado-1850945867'
      )
      .should(
        'contain',
        "Invasive' Google Keyword Search Warrants Get Court Greenlight, Here's Everything You Need to Know"
      )
      .should('contain', 'Written by: Mack DeGeurin')
      .should(
        'contain',
        "Colorado's Supreme Court this week had the opportunity"
      );

    cy.get('.news-card')
      .last()
      .should(
        'have.id',
        'https://readwrite.com/35-chatgpt-prompts-to-help-with-marketing-your-startup/'
      )
      .should(
        'contain',
        '35 ChatGPT Prompts to Help with Marketing Your Startup'
      )
      .should('contain', 'Written by: Ann Smarty')
      .should(
        'contain',
        'In the rapidly evolving digital landscape, startups need more than just a good product; they need out-of-the-box marketing strategies.'
      );
  });

  it('should allow you to click an article', () => {
    cy.get('.news-card')
      .first()
      .should(
        'have.id',
        'https://gizmodo.com/reverse-keyword-search-warrants-explainer-colorado-1850945867'
      )
      .click();

    cy.url().should(
      'include',
      "http://localhost:3000/article/'Invasive'%20Google%20Keyword%20Search%20Warrants%20Get%20Court%20Greenlight,%20Here's%20Everything%20You%20Need%20to%20Know"
    );

    cy.get('.article')
      .should(
        'contain',
        "Invasive' Google Keyword Search Warrants Get Court Greenlight, Here's Everything You Need to Know"
      )
      .should('contain', 'Written by: Mack DeGeurin')
      .should(
        'contain',
        "Colorado's Supreme Court this week had the opportunity"
      )
      .should('contain', 'See the whole article');

    cy.get('.home-btn').click();

    cy.get('.article-container').should('exist');
    cy.get('.news-card').should('have.length', 6);
  });

  it('should allow you to search for an atricle', () => {
    cy.get('.article-container').should('exist');
    cy.get('.news-card').should('have.length', 6);

    cy.get('.form').should('exist');
    cy.get("input[name='keyword']").type('Mack');
    cy.get("input[name='keyword']").should('have.value', 'Mack')
    cy.get('.news-card').should('have.length', 1);
    cy.get('.news-card')
      .first()
      .should(
        'have.id',
        'https://gizmodo.com/reverse-keyword-search-warrants-explainer-colorado-1850945867'
      )
      .click();

    cy.url().should(
      'include',
      "http://localhost:3000/article/'Invasive'%20Google%20Keyword%20Search%20Warrants%20Get%20Court%20Greenlight,%20Here's%20Everything%20You%20Need%20to%20Know"
    );

    cy.get('.article')
      .should(
        'contain',
        "Invasive' Google Keyword Search Warrants Get Court Greenlight, Here's Everything You Need to Know"
      )
      .should('contain', 'Written by: Mack DeGeurin')
      .should(
        'contain',
        "Colorado's Supreme Court this week had the opportunity"
      )
      .should('contain', 'See the whole article');

    cy.get('.home-btn').click();

    cy.get('.article-container').should('exist');
    cy.get('.news-card').should('have.length', 1);
    cy.get('.exit-search-btn').should('exist').click()
    cy.get('.news-card').should('have.length', 6);
  });
});
