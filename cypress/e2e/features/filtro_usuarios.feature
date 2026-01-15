# language: pt-BR
Feature: Filtro de usuários

  Como usuário do sistema
  Quero filtrar usuários pelo nome
  Para localizar informações rapidamente

  Scenario: Filtrar usuários pelo nome
    Given que o usuário está na tela de usuários
    When ele digita um nome no campo de busca
    And pressiona a tecla Enter
    Then o sistema deve exibir apenas usuários que contenham o nome buscado
