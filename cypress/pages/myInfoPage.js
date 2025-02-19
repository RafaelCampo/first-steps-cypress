class MyInfoPage{

    selectorsList(){
        const selectors = {
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

        return selectors

    }

    writeEmployeeFullName(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    changeEmployeeId(id){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(id)
    }

    changeOtherId(otherId){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    }

    changeDriversLicenseNumber(driversLicenseNumber){
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    }

    changeNationalityCombobox(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
    }

    changeMaritalStatusCombobox(){
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }

    clickSubmitButton(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
    }

    checkSuccessfulMessage(){
       cy.get('body').should('contain', 'Successfully Updated')
       cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage