Feature: Carrinho de compras

Scenario: Remover produto do carrinho
  Given que o usuário está na página do carrinho
  When ele clica no botão "Remover" de um produto
  Then o produto deve ser removido do carrinho
  And o contador do carrinho deve ser atualizado
