# language: pt-BR
Feature: Cadastro de novo usuário

  Como um novo usuário
  Quero me cadastrar no sistema
  Para acessar as funcionalidades disponíveis

  Scenario: Cadastro realizado com sucesso
    Given que o usuário está na página de cadastro
    When ele preenche nome, email e senha válidos
    And clica no botão "Cadastrar"
    Then o sistema deve exibir a mensagem "Cadastro realizado com sucesso."
