import { url } from "inspector";
import { driverInstance } from "../src/core/driver";
import { Login } from "../src/pages/login";
import { userData } from "../user-data";


describe('Set Login', () => {
    let login: Login;

    beforeAll(async () => { 
        await driverInstance.start();
        login = new Login();
    });

    afterAll(async () => {
        await driverInstance.closeDriver();
          
    });

    it('Go to Login page', async () => {
        await login.navigateTo('https://www.demoblaze.com/index.html')
        
    },8000);

    test('Set Login', async () => {
  
        await login.login(userData.username, userData.password);
        const isDisplayedWelcome = await login.validatelogin();
        expect (isDisplayedWelcome).toBeTruthy();
             
    },8000);

});
