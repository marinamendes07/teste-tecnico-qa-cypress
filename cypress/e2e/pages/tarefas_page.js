class TarefasPage {

  acessarTelaTarefas() {
    cy.visit('/tarefas')
  }

  excluirPrimeiraTarefa() {
    cy.contains('Excluir').first().click()
  }

  confirmarExclusao() {
    cy.contains('Confirmar').click()
  }

  validarMensagemExclusao(mensagem) {
    cy.contains(mensagem).should('be.visible')
  }

  validarTarefaRemovida() {
    cy.contains('Excluir').should('not.exist')
  }
}

export default TarefasPage
