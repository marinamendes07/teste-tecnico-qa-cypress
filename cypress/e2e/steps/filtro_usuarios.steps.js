import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import UsuariosPage from '../pages/usuarios_page'

const usuariosPage = new UsuariosPage()

Given('que o usuário está na tela de usuários', () => {
  usuariosPage.acessarTelaUsuarios()
})

When('ele digita um nome no campo de busca', () => {
  usuariosPage.preencherFiltroNome('Ana')
})

When('pressiona a tecla Enter', () => {
  // Enter já foi acionado no step anterior
})

Then('o sistema deve exibir apenas usuários que contenham o nome buscado', () => {
  usuariosPage.validarResultadoFiltro('Ana')
})

