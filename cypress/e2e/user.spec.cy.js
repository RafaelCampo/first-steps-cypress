import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    userNameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar:'.oxd-topbar-header-breadcrumb-module',
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongCredentialAlert:"[role='alert']",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    submitButton:"[type='submit']"
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click(),
    cy.get(selectorsList.firstNameField).clear().type('Robert')
    cy.get(selectorsList.middleNameField).clear().type('Dylan')
    cy.get(selectorsList.lastNameField).clear().type('Collins')
    cy.get(selectorsList.genericField).eq(3).clear().type(654321)
    cy.get(selectorsList.genericField).eq(4).clear().type(123456)
    cy.get(selectorsList.genericField).eq(5).clear().type(1111111)
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})