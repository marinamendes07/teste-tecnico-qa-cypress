import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CadastroUsuarioPage from '../pages/cadastro_usuario_page'

const cadastroUsuarioPage = new CadastroUsuarioPage()

Given('que o usuário está na página de cadastro', () => {
  cadastroUsuarioPage.acessarPaginaCadastro()
})

When('ele preenche nome, email e senha válidos', () => {
  cadastroUsuarioPage.preencherNome('Marina Magalhães')
  cadastroUsuarioPage.preencherEmail(`marina_${Date.now()}@email.com`)
  cadastroUsuarioPage.preencherSenha('123456')
})

When('clica no botão {string}', () => {
  cadastroUsuarioPage.clicarBotaoCadastrar()
})

Then('o sistema deve exibir a mensagem {string}', (mensagem) => {
  cadastroUsuarioPage.validarMensagemSucesso(mensagem)
})
