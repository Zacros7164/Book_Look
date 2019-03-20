describe("The Review Page", ()=>{
    beforeEach(()=>{
        cy.request("POST", "loginProcess", {email : "Zacros7164@gmail.com", password: "12345678"})
            .visit('/')
            .get('[data-cy=review]').click()
    })

    // it("tests request module", ()=>{
    //     cy.visit('/')
    //         .get('[data-cy=review]').click()
    // })

    it("tests all inputs as required", ()=>{
        cy.get('[data-cy=title]').should("have.attr", "required")
            .get('[data-cy=author]').should("have.attr", "required")
            .get('[data-cy=ISBN]').should("have.attr", "required")
            .get('[name=reviewRadios]').should("have.attr", "required")
            .get('.genreFormControlClass').should("have.attr", "required")
    })

    it("tests submitted review", ()=>{
        cy.get('[data-cy=title]').type("Eye of the World")
            .get('[data-cy=author]').type("Robert Jordan")
            .get('[data-cy=ISBN]').type("1234567890")
            .get('#likeId').click()
            .get('.genreFormControlClass').select("Fantasy")
            .get('#submit').click()
            .location().should((loc)=>{
                expect(loc.search).to.eq("?msg=reviewSuccess")
            })
    })
})