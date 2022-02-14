import { Common } from "./common/common";

export class TextBoxPage extends Common{

    constructor() {
        super()
        this.userNameInput = "#userName"
        this.emailInput = "#userEmail"
        this.addressInput = "#currentAddress"
        this.perAddressInput = "#permanentAddress"
        this.submitBtn = "#submit"
    }

    fillForm(username='',email='',address='',perAddress=''){
        this.do(this.userNameInput).typeInField(username)
        this.do(this.emailInput).typeInField(email)
        this.do(this.addressInput).typeInField(address)
        this.do(this.perAddressInput).typeInField(perAddress)
        this.do(this.submitBtn).click()
    }
}