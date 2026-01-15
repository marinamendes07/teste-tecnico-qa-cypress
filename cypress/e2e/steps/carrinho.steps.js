import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que o usuário está na página do carrinho', () => {
  cy.visit('/carrinho')
})

When('ele clica no botão "Remover" de um produto', () => {
  cy.contains('Remover').first().click()
})

Then('o produto deve ser removido do carrinho', () => {
  cy.contains('Produto').should('not.exist')
})

Then('o contador do carrinho deve ser atualizado', () => {
  cy.get('#contador-carrinho')
    .invoke('text')
    .then((valor) => {
      expect(Number(valor)).to.be.lessThan(1)
    })
})
