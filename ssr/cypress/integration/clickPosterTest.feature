/// <reference types="Cypress" />

describe('click on Movie Item Poster', () => {

  it('change on click poster in header', () => {

    cy.visit('http://localhost:5000');

    const posterPathSecondItem = "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg";
    const secondItemIndex = 1;

    cy.get('.results .item .item-poster img')
      .eq(secondItemIndex)  
      .click()
      .should('have.attr', 'src', posterPathSecondItem);

    cy.get('.movie-description-poster img')
      .should('have.attr', 'src', posterPathSecondItem);  
  });

});