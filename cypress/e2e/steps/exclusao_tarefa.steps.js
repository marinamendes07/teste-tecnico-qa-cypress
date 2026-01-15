import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import TarefasPage from '../pages/tarefas_page'

const tarefasPage = new TarefasPage()

Given('que o usuário está na tela de tarefas', () => {
  tarefasPage.acessarTelaTarefas()
})

When('ele clica no botão {string} de uma tarefa', () => {
  tarefasPage.excluirPrimeiraTarefa()
})

When('confirma a exclusão', () => {
  tarefasPage.confirmarExclusao()
})

Then('a tarefa deve ser removida da lista', () => {
  tarefasPage.validarTarefaRemovida()
})

Then('a mensagem {string} deve ser exibida', (mensagem) => {
  tarefasPage.validarMensagemExclusao(mensagem)
})
