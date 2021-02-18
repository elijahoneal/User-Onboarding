describe( "Can Submit Form Data", ()=> {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    } )
    it("Basic test", () => {
        expect(1+1).to.equal(2)
    })
    const nameInput = () => cy.get('[data-cy=nameInput]')
    const emailInput = () => cy.get('[data-cy=emailInput]')
    const passwordInput = () => cy.get('[data-cy=passwordInput]')
    const termsCheckbox = () => cy.get('[data-cy=termsCheckbox]')
    const button = () => cy.get('[data-cy=button]')

    it("Should submit and clear field", () => {

        nameInput().type('Elijah')
        .should('have.value', 'Elijah')

        emailInput().type('elijahoneal@gmail.com')

        passwordInput().type('mystery password')

        termsCheckbox().click()
        
        button().click()
        
        nameInput().should('have.value' , '')
        emailInput().should('have.value' , '')
        passwordInput().should('have.value' , '')
    })
})