# 🥪 Caixa da Lanchonete

Minha solução para o **desafio técnico da DB Server**: automatizar o caixa de uma lanchonete, calculando o valor de uma compra a partir do cardápio, das formas de pagamento e das regras de desconto/taxa.

## Regras implementadas

| Código | Item | Valor |
| --- | --- | --- |
| `cafe` | Café | R$ 3,00 |
| `chantily` | Chantily (extra do café) | R$ 1,50 |
| `suco` | Suco natural | R$ 6,20 |
| `sanduiche` | Sanduíche | R$ 6,50 |
| `queijo` | Queijo (extra do sanduíche) | R$ 2,00 |
| `salgado` | Salgado | R$ 7,25 |
| `combo1` | 1 suco + 1 sanduíche | R$ 9,50 |
| `combo2` | 1 café + 1 sanduíche | R$ 7,50 |

- Pagamento: `dinheiro` (5% de desconto), `debito` e `credito` (3% de acréscimo)
- Item extra exige o item principal correspondente (combos não contam como principal)
- Mensagens de erro: `Não há itens no carrinho de compra!`, `Quantidade inválida!`, `Item inválido!`, `Forma de pagamento inválida!` e `Item extra não pode ser pedido sem o principal`

## Uso

```js
import { CaixaDaLanchonete } from "./src/caixa-da-lanchonete.js";

new CaixaDaLanchonete().calcularValorDaCompra("debito", ["cafe,1", "chantily,1"]);
// "R$ 4,50"
```

## Como rodar os testes

```bash
npm install
npm test       # Jest — 19 testes, 100% de cobertura de linhas
```

## Autor

Feito por [Amós Magalhães](https://github.com/amslimaa).
