class RecuperacaoSenhaPage {

  acessarPagina() {
    cy.visit('/recuperar-senha')
  }

  preencherEmail(email) {
    cy.get('#email-recuperacao').type(email)
  }

  clicarBotaoRecuperar() {
    cy.contains('button', 'Recuperar').click()
  }

  validarMensagemSucesso(mensagem) {
    cy.contains(mensagem).should('be.visible')
  }
}

export default RecuperacaoSenhaPage
