class CadastroUsuarioPage {

  acessarPaginaCadastro() {
    cy.visit('/cadastro')
  }

  preencherNome(nome) {
    cy.get('#nome').type(nome)
  }

  preencherEmail(email) {
    cy.get('#email').type(email)
  }

  preencherSenha(senha) {
    cy.get('#senha').type(senha)
  }

  clicarBotaoCadastrar() {
    cy.contains('button', 'Cadastrar').click()
  }

  validarMensagemSucesso(mensagem) {
    cy.contains(mensagem).should('be.visible')
  }
}

export default CadastroUsuarioPage
