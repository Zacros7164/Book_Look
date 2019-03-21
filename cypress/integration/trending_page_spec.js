describe("The Trending Page", ()=>{
    beforeEach(()=>{
        cy.visit('/trending')
    })

    it("tests HC fic link", ()=>{
        cy.get("#hardcover-fiction").click()
            .get('.book-info')
            expect('.book-info').to.exist
    })
    it("tests HC nonfic link", ()=>{
        cy.get("#hardcover-nonfiction").click()
            .get('.book-info')
    })
    it("tests paper nonfic link", ()=>{
        cy.get("#paper-nonfiction").click()
            .get('.book-info')
    })
    it("tests elec fic link", ()=>{
        cy.get("#elec-fiction").click()
            .get('.book-info')
    })
    it("tests elec nonfic link", ()=>{
        cy.get("#elec-nonfiction").click()
            .get('.book-info')
    })

})