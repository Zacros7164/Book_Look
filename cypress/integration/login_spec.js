describe("The Login Page", ()=>{
    beforeEach(()=>{
        cy.visit('/login');
    })

    it('requires email', ()=>{
        cy.contains('Login!').click()
            .get("h2").contains("You must enter an email first!")
            
    })

    it("requires password", ()=>{
        cy.get('[data-cy=email]').type("zacros7164@gmail.com")
            .get("button").contains("Login!").click()
            .get("h2").contains("This password is not associated with this email")
    })

    it("logs in successfully", ()=>{
        cy.get('[data-cy=email').type("zacros7164@gmail.com")
            .get('[data-cy=password').type('12345678')
            .get("#loginForm").submit()
            .location().should((loc)=>{
                expect(loc.search).to.eq("?msg=loginSuccess")
            })
    })
})

