import { TextBoxPage } from "./textBoxPage";
import { Common } from "./common/common";
import { CheckBoxPage } from "./checkBoxPage";

export class MainPage extends Common{
    constructor() {
        super()
        this.menu_btn = ".category-cards > :nth-child(1)"
        this.menu_btn2 = "#item-0"
        this.menu_btn3 = "#item-1"
    }

    openTextBoxPage(){
        this.do(this.menu_btn).click()
        this.do(this.menu_btn2).click()

        return TextBoxPage
    }

    openCheckBoxPage(){
        this.do(this.menu_btn).click()
        this.do(this.menu_btn3).click()

        return CheckBoxPage
    }
}