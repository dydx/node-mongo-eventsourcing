describe('Landing Page', () => {
    it('should load', () => {
        cy
            .visit('http://localhost:3000')
            .get('#heading').should('contain', 'Login');
    });
});
