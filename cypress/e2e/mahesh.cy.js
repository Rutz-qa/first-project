describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})


describe('Validate h2 tag text', () => {
    it('should check the h2 tag and compare its text', () => {
        // Visit the website
        cy.visit('https://next-note-taking.vercel.app/'); // Replace with your website URL

        // Expected text
        const expectedText = 'Changes'; // Replace with your expected text

        // Locate the h2 tag and validate its text
        cy.get('h2')
            .should('be.visible') // Ensure the h2 tag is visible
            .invoke('text') // Get the text content of the h2 tag
            .then((actualText) => {
                expect(actualText.trim()).to.equal(expectedText); // Compare actual text with expected text
            });
    });
});

