export class Common{
    do(sel){
        return {
            typeInField(text){
                cy.get(sel).type(text)
            },

            click(){
                cy.get(sel).click()
            }
        }
    }


    assert(sel){
        return {
            contains(text){
                cy.get(sel).contains(text)
            },

            haveText(text){
                cy.get(sel).should('have.text', text)
            },

            beVisible(){
                cy.get(sel).should('be.visible')
            }
        }
    }
}