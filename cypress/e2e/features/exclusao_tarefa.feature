# language: pt-BR
Feature: Exclusão de tarefa

  Como usuário do sistema
  Quero excluir uma tarefa
  Para manter minha lista organizada

  Scenario: Excluir tarefa da lista com sucesso
    Given que o usuário está na tela de tarefas
    When ele clica no botão "Excluir" de uma tarefa
    And confirma a exclusão
    Then a tarefa deve ser removida da lista
    And a mensagem "Tarefa excluída" deve ser exibida
