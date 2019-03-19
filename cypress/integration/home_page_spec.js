describe("The Home Page", ()=>{
    // not logged in link testing


    it('successfully loads', ()=>{
        cy.visit("/")
    })

    it("loads about us", ()=>{
        cy.get('[data-cy=about').click()
            .location().should((loc)=>{
                expect(loc.pathname).to.eq('/about')
            })
    })
    it("loads trending", ()=>{
        cy.get('[data-cy=trending').click()
            .location().should((loc)=>{
                expect(loc.pathname).to.eq('/trending')
            })
    })
    it("loads contact", ()=>{
        cy.get('[data-cy=contact').click()
            .location().should((loc)=>{
                expect(loc.pathname).to.eq('/contactUs')
            })
    })
    it("loads register", ()=>{
        cy.get('[data-cy=register').click()
            .location().should((loc)=>{
                expect(loc.pathname).to.eq('/register')
            })
    })
    it("loads login", ()=>{
        cy.get('[data-cy=login').click()
            .location().should((loc)=>{
                expect(loc.pathname).to.eq('/login')
            })
    })

    // logged in link testing

    it("loads review page", ()=>{
        cy.visit("/login")
            .get('[data-cy=email').type("zacros7164@gmail.com")
            .get('[data-cy=password').type("12345678")
            .get('form').submit()
            .location().should((loc)=>{
                expect(loc.search).to.eq('?msg=loginSuccess')
            })
            .get('[data-cy=review]').click()
            .location().should((loc)=>{
                expect(loc.pathname).to.eq("/review")
            })
    })

    it("successfully logs out", ()=>{
        cy.visit('/login')
            .get('[data-cy=email').type("zacros7164@gmail.com")
            .get('[data-cy=password').type("12345678")
            .get('form').submit()
            .location().should((loc)=>{
                expect(loc.search).to.eq('?msg=loginSuccess')
            })
            .get('[data-cy=logout').click()
            .location().should((loc)=>{
                expect(loc.search).to.eq('?msg=logoutSuccess')
            })

    })
})

