describe('beers info page successful', () => {
    beforeEach(() => {
        cy.server()
        cy.fixture('beer.json').as('beerInfoJSON');
        cy.route('GET', 'https://sandbox-api.brewerydb.com/v2/beer/zTTWa2?withBreweries=Y&withSocialAccounts=Y&withIngredients=Y&key=816ecbe13a87ec829cd5aef047ca5c0a', '@beerInfoJSON').as('beerInfo');
        cy.fixture('beerOrganic.json').as('beerInfoOrganicJSON');
        cy.route('GET', 'https://sandbox-api.brewerydb.com/v2/beer/uA3MVL?withBreweries=Y&withSocialAccounts=Y&withIngredients=Y&key=816ecbe13a87ec829cd5aef047ca5c0a', '@beerInfoOrganicJSON').as('beerInfoOrganic');
    })

    it('should visit page and beers should load in', () => {
        cy.visit('/beer-info/zTTWa2')
        .wait('@beerInfo')
        .get('.beerName')
        .should('exist')
        .should('have.text', "All Colorado Apricot Wheat")
        .get('.beerSubtitle')
        .should('exist')
        .should('have.text', "Fruit Wheat Ale")
        .get('img')
        .should('exist')
        .get('.organic')
        .should('not.exist')
    })

    it('should visit page and beers should load and show organic logo if beer is organic', () => {
        cy.visit('/beer-info/uA3MVL')
        .wait('@beerInfoOrganic')
        .get('.beerName')
        .should('exist')
        .should('have.text', "7 Birds")
        .get('.beerSubtitle')
        .should('exist')
        .should('have.text', "American Pilsener")
        .get('img')
        .should('exist')
        .get('.organic')
        .should('exist')
    })
})


describe('beers list page error', () => {
    it('should visit page and show error message when API call fails', () => {
        cy.visit('/beer-info/zTTWa2')
        cy.get('.beerInfo > div')
        .should('exist')
        .should('have.text', 'Sorry something went wrong')
    })
})