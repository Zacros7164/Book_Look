describe("The Register Page", ()=>{
    beforeEach(()=>{
        cy.visit('/register')
    });

    it("requires email", ()=>{
        cy.get("button").contains("Register!").click()
            .get("h2").contains("You must include an email")
    })

    it("requires password to be at least 8 characters", ()=>{
        cy.get('[data-cy="email').type("zacros7164@gmail.com")
            .get("[data-cy=password").type("1234567")
            .get("button").contains("Register!").click()
            .get("h2").contains("Your password must be at least 8 characters long")
    })

    it("requires unique email", ()=>{
        cy.get('[data-cy="email').type("zacros7164@gmail.com")
            .get("[data-cy=password").type("12345678")
            .get("button").contains("Register!").click()
            .get("h2").contains("This email adress is already registered")
    })

})