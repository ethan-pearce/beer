describe('beers list page successful', () => {
    beforeEach(() => {
        cy.server()
        cy.fixture('beers.json').as('beersJSON');
        cy.route('GET', 'https://sandbox-api.brewerydb.com/v2/beers?key=816ecbe13a87ec829cd5aef047ca5c0a', '@beersJSON').as('beers');
        cy.fixture('beer.json').as('beerInfoJSON');
        cy.route('GET', 'https://sandbox-api.brewerydb.com/v2/beer/zTTWa2?withBreweries=Y&withSocialAccounts=Y&withIngredients=Y&key=816ecbe13a87ec829cd5aef047ca5c0a', '@beerInfoJSON').as('beerInfo');
    })

    it('should visit page and beers should load in', () => {
        cy.visit('/')
        .wait('@beers')
        .get(':nth-child(1) > a > .beerName')
        .should('exist')
        .should('have.text', "'Murican Pilsner")
        .get(':nth-child(1) > a > .beerSubtitle')
        .should('exist')
        .should('have.text', "American Pilsener")
        .get(':nth-child(1) > a > .beerImage')
        .should('exist')
        .get(':nth-child(1) > a > .organic')
        .should('not.exist')
    })

    it('should visit page and beers should load and show organic logo if beer is organic', () => {
        cy.visit('/')
        .wait('@beers')
        .get(':nth-child(38) > a > .beerName')
        .should('have.text', "7 Cities Pilsner")
        .get(':nth-child(38) > a > .beerSubtitle')
        .should('exist')
        .should('have.text', "American Pilsener")
        .get(':nth-child(38) > a > .beerImage')
        .should('exist')
        .get(':nth-child(38) > a > .beerImage')
        .should('exist')
        .get(':nth-child(38) > a > .organic')
        .should('exist')
    })


    it('should visit page and load beer info page if clicked on', () => {
        cy.visit('/')
        .wait('@beers')
        .get(':nth-child(48) > a > .beerName')
        .should('exist')
        .should('have.text', "All Colorado Apricot Wheat")
        .get(':nth-child(48) > a > .beerSubtitle')
        .should('exist')
        .should('have.text', "Fruit Wheat Ale")
        .get(':nth-child(48) > a > .beerImage')
        .should('exist')
        .get(':nth-child(2) > a')
        .click()
        .url()
        .should('eq', 'http://localhost:3000/beer-info/zTTWa2')
        .wait('@beerInfo')
        .get('.beerName')
        .should('exist')
        .should('have.text', "All Colorado Apricot Wheat")
        .get('.beerSubtitle')
        .should('exist')
        .should('have.text', "Fruit Wheat Ale")
    })
})


describe('beers list page error', () => {
    it('should visit page and show error message when API call fails', () => {
        cy.visit('/')
        cy.get('.container > div')
        .should('exist')
        .should('have.text', 'Sorry something went wrong')
    })
})