import { MainPage } from "../../PageObejcts/menuPage";
import { TextBoxPage } from "../../PageObejcts/textBoxPage"
import { CheckBoxPage } from "../../PageObejcts/checkBoxPage";

const textBoxPage = new TextBoxPage()
const mainPage = new MainPage()
const checkBoxPage = new CheckBoxPage()

describe("TestSuite01", function () {
    beforeEach(function (){
        cy.visit("https://demoqa.com/")
    });

    it('TestCase01', function () {
        mainPage.openTextBoxPage()
        textBoxPage.fillForm("Full Name", "test@test.com", "My Address", "My Permanent Address")
    });

    it('TestCase02', function () {
        mainPage.openCheckBoxPage()
        checkBoxPage.passCheckBoxPage()

    });
})