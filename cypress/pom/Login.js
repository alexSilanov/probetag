import ProductPage from "./ProductPage";

class Login {
    userNameField = () => cy.get("#user-name");
    passwordField = () => cy.get("#password");
    loginBtn = () => cy.get("#login-button")


    fillUserNameField() {
        this.userNameField().type("standard_user")
        return this;
    }

    fillPasswordField() {
        this.passwordField().type("secret_sauce")
        return this
    }

    clickLoginBtn() {
        this.loginBtn().click()
        return new ProductPage()
    }

}

export default Login;