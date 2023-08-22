const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`cliente: ${this.nomeDoCliente}`)
        console.log(`quantidade de itens: ${this.calcularTotalDeItens()}`)
        console.log(`total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`)
    },
    addProduto: function (produto) {
        let bandeira = 0
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                this.produtos[i].qtd = this.produtos[i].qtd + produto.qtd
                bandeira++
            }
        }
        if (bandeira === 0) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        console.log(`cliente: ${this.nomeDoCliente}`)
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`item: ${this.produtos[i].id} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - ${(this.produtos[i].precoUnit / 100).toFixed(2)} R$ `)
        }
        console.log(`total de itens: ${this.calcularTotalDeItens()}`)
        console.log(`total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`)
    },
    calcularTotalDeItens: function () {
        let quantidade = 0
        for (let i = 0; i < this.produtos.length; i++) {
            quantidade = quantidade + this.produtos[i].qtd
        }
        return quantidade
    },
    calcularTotalAPagar: function () {
        let totalPagar = 0
        for (let j = 0; j < this.produtos.length; j++) {
            totalPagar = totalPagar + this.produtos[j].precoUnit * (this.produtos[j].qtd);
        }
        return totalPagar
    },
    calcularDesconto: function () {
        let desconto
        let desconto2
        let maisBarato = 999999999999999999

        if (this.calcularTotalDeItens() > 4) {
            for (let i = 0; i < this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < maisBarato) {
                    maisBarato = this.produtos[i].precoUnit
                }
            }

            desconto = maisBarato

        } if (this.calcularTotalAPagar() > 1000) {
            desconto2 = (this.calcularTotalAPagar()) / 10
        }


        if (desconto > desconto2) {
            console.log(`desconto de: R$ ${desconto}`)

        } else if (desconto2 > desconto) {
            console.log(`desconto de: R$ ${desconto2}`)
        }
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(novaBermuda)
console.log(carrinho.imprimirResumo())
console.log(carrinho.calcularTotalDeItens())
carrinho.calcularDesconto()
