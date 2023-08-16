class CaixaDaLanchonete {
    constructor(){
        this.formasDePagamento = ["dinheiro", "debito", "credito"];
        this.cardapio = [
            {
                "codigo": "cafe",
                "descricao": "Café",
                "valor": 3,
              },
              {
                "codigo": "chantily",
                "descricao": "Chantily (extra do Café)",
                "valor": 1.5,
              },
              {
                "codigo": "suco",
                "descricao": "Suco Natural",
                "valor": 6.20,
              },
              {
                "codigo": "sanduiche",
                "descricao": "Sanduíche",
                "valor": 6.50,
              },
              {
                "codigo": "queijo",
                "descricao": "Queijo (extra do Sanduíche)",
                "valor": 2,
              },
              {
                "codigo": "salgado",
                "descricao": "Salgado",
                "valor": 7.25,
              },
              {
                "codigo": "salgado",
                "descricao": "Salgado",
                "valor": 7.25,
              },
              {
                "codigo": "combo1",
                "descricao": "1 Suco e 1 Sanduíche",
                "valor": 9.50,
              },
              {
                "codigo": "combo2",
                "descricao": "1 Café e 1 Sanduíche",
                "valor": 7.50,
              }
        ]

    }
    
    calcularValorDaCompra(metodoDePagamento, itens) {

        let valorTotal = 0;
        let hasAnInvalidQuantity = false;
        let hasAnInvalidItem = false;
        let QtdCafe = 0;
        let QtdChantily = 0;
        let QdtSanduiche = 0
        let QtdQueijo = 0;

        //verifiaca se a forma de pagamento eh valida
        if(!this.formasDePagamento.includes(metodoDePagamento)){
            return "Forma de pagamento inválida!";
        }
            
        //verificando se ha itens no carrinho de compra
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }
        //quantifica itens extras e principais
        itens.forEach(item => {
            let itemQtd = item.split(',')
            if (itemQtd[0] == "cafe") QtdCafe++;
            if (itemQtd[0] == "chantily")  QtdChantily++;
            if (itemQtd[0] == "queijo")  QtdQueijo++;
            if (itemQtd[0] == "sanduiche") QdtSanduiche++;
        });
        //verifica se o item extra foi pedido sem o principal
        if(QtdChantily > QtdCafe || QtdQueijo > QdtSanduiche){
            return "Item extra não pode ser pedido sem o principal";
        }
        
        itens.forEach(item => {

            let itemQtd = item.split(',')
            if(itemQtd[1] == 0) hasAnInvalidQuantity = true;
            let itemValor = 0;
            try {
                itemValor = this.cardapio.find(x => x.codigo == itemQtd[0]).valor;
            } catch (error) {
                hasAnInvalidItem = true;
            }
            
            valorTotal += itemValor * itemQtd[1];
        });
        //verifica se a quantidade eh valida
        if(hasAnInvalidQuantity) return "Quantidade inválida!";
        if(hasAnInvalidItem) return "Item inválido!";

        //aplicando desconto de 5% para pagamento em dinheiro
        //aplicando acréscimo de 3% para pagamento em crédito
        switch (metodoDePagamento) {
            case "dinheiro": valorTotal =  valorTotal * 0.95; break;
            case "debito": valorTotal = valorTotal ; break;
            case "credito": valorTotal = valorTotal * 1.03;break;
            default: valorTotal = "Forma de pagamento inválida!";
        }
        return ("R$ "+ valorTotal.toFixed(2)).replace(".",",");
    }

}

export { CaixaDaLanchonete };
 