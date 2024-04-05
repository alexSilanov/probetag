import Login from "../pom/login";


describe("Login Functionality", function() {

this.beforeEach(()=> {
    cy.visit('/');
})

    const userLogin = new Login();

    it("user loggt sich ein", function() {
        userLogin
          .fillPasswordField()
          .fillUserNameField()
          .clickLoginBtn()

    })


})