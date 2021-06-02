describe("best seller list", () => {

  beforeEach(() => {
    cy.server();
  })

  it('should list the best sellers', function() {

    cy.intercept(
      'GET',
      "**/svc/books/v3/**",
      { fixture: "nyt-hardcover-fiction.json" },
    ).as("fetchBestSellers");


    cy.visit('/');

    cy.wait('@fetchBestSellers').then((xhr) => {
      const bestSellers = xhr.response.body as NyTimesBestSellerList;

      console.log('BS', bestSellers);

      cy.findAllByTestId('nyt-best-seller')
        .should('have.length', bestSellers.results.length)
        .each(($nytBestSeller, idx) => {
          const bestSeller = bestSellers.results[idx];

          cy.wrap($nytBestSeller).within(() => {

            cy.findByRole('link', {name: /get the book/i}).should(
              'have.attr',
              'href',
              bestSeller.amazon_product_url
            );

            cy.findByRole('img', { name: bestSeller.book_details[0].title }).should(
              'have.attr',
              'src',
              `http://covers.openlibrary.org/b/isbn/${bestSeller.book_details[0].primary_isbn13}-L.jpg`
            )

            cy.findByText(bestSeller.book_details[0].title, { selector: 'h3' }).should(
              'exist'
            )

            cy.findByText(bestSeller.book_details[0].author, { selector: 'h4' }).should(
              'exist'
            )

            cy.findByText(bestSeller.book_details[0].description, { selector: 'p' }).should(
              'exist'
            )

          })

        })
    })
  });

})
