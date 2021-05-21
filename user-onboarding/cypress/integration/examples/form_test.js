describe('Form App', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })

    
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passInput = () => cy.get('input[name=password]')
    const tosCheck = () => cy.get('input[name=tos]')
    const form = () => cy.get('form')

    it('checking to make sure tests work', () => {
        expect(2+2).to.equal(4)
    })

    describe('Fill out inputs', () => {

        it('the elements are showing', () => {
            nameInput().should('exist')
            emailInput().should('exist')
        })

        it('Able to enter name', () => {
            nameInput()
            .should('have.value', '')
            .type('Franky Random')
            .should('have.value', 'Franky Random')
        })

        it('Able to enter email', () => {
            emailInput()
            .should('have.value', '')
            .type('someone@email.com')
            .should('have.value', 'someone@email.com')
        })

        it('Able to enter passwrod', () => {
            passInput()
            .should('have.value', '')
            .type('letsgo')
            .should('have.value', 'letsgo')
        })

        it('Able to accept TOS', () => {
            tosCheck()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        })

        it('Able to submit form', () => {
            form()
            .submit()
        })
    })
})