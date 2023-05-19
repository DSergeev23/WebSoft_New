import {Login} from "../Page_object/Login_page.cy"  
import { MainCommands } from "../Page_object/All_pages_commands.cy"
import { TestingManagementCommands } from "../Page_object/Page_testing_management.cy"

const mainCommands = new MainCommands()
const testingManagementCommands = new TestingManagementCommands()
const login = new Login()


it('Запуск теста', function(){
    mainCommands.interceptChangeObjectUrl('**/tests/*/**')
    login.loginUser('FS','FS')
    mainCommands.openMenuItemPage('Обучение','WT_0x60C1FDC25AC90F53','/education')
    mainCommands.openWidgetLearningModule('Все тесты')
    testingManagementCommands.openAllTests()
    testingManagementCommands.openTestPage('Занимательная география')
    cy
        .intercept('POST', '/lpapi.html*').as('matchedUrl2')
        cy
        .contains('Начать')
        .click()
        cy
        .wait('@matchedUrl2').then((interception) => {
        cy
        .visit(`/${interception.response.body.result.redirect_url}`)
        }) 
    cy
    .contains('Продолжить')
    .click()
    cy
    .get('#next')
    .click() 
    cy
    .get('[class="v-card v-sheet theme--light card top"]').contains('Франция')
    .click()
    cy
    .get('#next')
    .click() 

})
 