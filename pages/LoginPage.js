export class LoginPage{
constructor(page) {
    this.page = page;
    this.url = 'https://www.hudl.com/';
    this.loginMenu = page.getByRole('link', { name: 'Log in' });
    this.hudlLoginOption = page.locator('a.subnav__item.subnavitem.subnavitem--icon');
    this.emailBox = page.getByRole('textbox', { name: "Email" });
    this.passWordBox = page.getByRole('textbox', { name: "Password" });
    this.continueButton = page.getByText('Continue', { exact: true });
    this.submitButton = page.getByRole('button', { name: 'Continue' });
}

async navigateToLoginPage(){
    await this.page.goto(this.url);
    await this.loginMenu.click();
    await this.hudlLoginOption.click();
}

async enterEmail(email){
    await this.emailBox.fill(email);
    await this.continueButton.click();
}

async enterPassword(password){
    await this.passWordBox.fill(password);
    await this.submitButton.click();
}

async submit(){
    await this.submitButton.click();
}

async login(email, password){
    await this.enterEmail(email);
    await this.enterPassword(password);
}

async invalidLogin(email){
    await this.enterEmail(email);
}
}