const testData = require("../testdata/testData.json");
class loginPage {
  url = "https://www.saucedemo.com/v1/";
  usernameID = 'input[data-test="username"]';
  passwordID = 'input[data-test="password"]';
  loginButtonID = 'input[id="login-button"]';

  constructor(page) {
    this.page = page;
  }

  async navigateToUrl() {
    await this.page.goto("https://www.saucedemo.com/v1/");
  }
  async loginWithCredentials() {
    await this.page.fill(this.usernameID, testData.userName);
    await this.page.fill(this.passwordID, testData.password);
    await this.page.click(this.loginButtonID);
    await this.page.waitForTimeout(10000);
  }
}

module.exports = loginPage;
