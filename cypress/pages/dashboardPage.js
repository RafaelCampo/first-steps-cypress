class DashboardPage{

    selectorsList(){
        const selectors = {
            dashboardGrid:'.orangehrm-dashboard-grid',
            urlDashboard:'/web/index.php/dashboard/index'
        }

        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal', this.selectorsList().urlDashboard)
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }


}

export default DashboardPage