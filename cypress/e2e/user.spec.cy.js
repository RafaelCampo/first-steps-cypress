import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage  = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.writeEmployeeFullName('Robert','Nogueira','Nascimento')
    myInfoPage.changeEmployeeId(123456)
    myInfoPage.changeOtherId(654321)
    myInfoPage.changeDriversLicenseNumber('77777777')
    myInfoPage.changeNationalityCombobox()
    myInfoPage.changeMaritalStatusCombobox()
    myInfoPage.clickSubmitButton()
    myInfoPage.checkSuccessfulMessage()
  
  })

  
})