import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import RecuperacaoSenhaPage from '../pages/recuperacao_senha_page'

const recuperacaoSenhaPage = new RecuperacaoSenhaPage()

Given('que o usuário acessa a página de recuperação de senha', () => {
  recuperacaoSenhaPage.acessarPagina()
})

When('ele informa um e-mail válido', () => {
  recuperacaoSenhaPage.preencherEmail('marina@ndd.com.br')
})

When('clica no botão {string}', () => {
  recuperacaoSenhaPage.clicarBotaoRecuperar()
})

Then('o sistema deve exibir a mensagem {string}', (mensagem) => {
  recuperacaoSenhaPage.validarMensagemSucesso(mensagem)
})
