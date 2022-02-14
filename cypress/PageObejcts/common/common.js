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
            }
        }
    }
}