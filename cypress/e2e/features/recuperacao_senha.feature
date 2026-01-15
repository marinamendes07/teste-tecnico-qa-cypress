# language: pt-BR
Feature: Recuperação de senha

  Como usuário do sistema
  Quero recuperar minha senha
  Para acessar novamente minha conta

  Scenario: Recuperação de senha com e-mail válido
    Given que o usuário acessa a página de recuperação de senha
    When ele informa um e-mail válido
    And clica no botão "Recuperar"
    Then o sistema deve exibir a mensagem "Um link de recuperação foi enviado para seu e-mail."
