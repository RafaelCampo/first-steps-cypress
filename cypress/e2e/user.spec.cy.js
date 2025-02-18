import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage  = new MenuPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    submitButton:"[type='submit']",
    nationalityDropdown:".oxd-select-wrapper",
    genericCombobox:".oxd-select-text--arrow",
    secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)"
    
  }


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    /*cy.get(selectorsList.myInfoButton).click(),
    cy.get(selectorsList.firstNameField).clear().type('Robert')
    cy.get(selectorsList.middleNameField).clear().type('Dylan')
    cy.get(selectorsList.lastNameField).clear().type('Collins')
    cy.get(selectorsList.genericField).eq(3).clear().type(654321)
    cy.get(selectorsList.genericField).eq(4).clear().type(123456)
    cy.get(selectorsList.genericField).eq(5).clear().type(1111111)
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close') */
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})