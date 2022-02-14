import { Common } from "./common/common";

export class CheckBoxPage extends Common{
    constructor() {
        super()
        this.plus_btn = "[aria-label='Expand all']"
        this.checkbox_btn = "#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon"
    }

    passCheckBoxPage(){
        this.do(this.plus_btn).click()
        this.do(this.checkbox_btn).click()
        this.assert("#result > :nth-child(1)").contains("You have selected")
    }
}