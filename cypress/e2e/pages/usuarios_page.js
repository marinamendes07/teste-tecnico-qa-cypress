import UsuariosElements from '../elements/usuarios'

const usuariosElements = new UsuariosElements()

class UsuariosPage {

  acessarTelaUsuarios() {
    cy.visit('/usuarios')
  }

  filtrarPorNome(nome) {
    cy.get(usuariosElements.inputFiltroNome())
      .type(`${nome}{enter}`)
  }

  validarUsuarioExibido(nome) {
    cy.contains(nome).should('be.visible')
  }
}

export default UsuariosPage
