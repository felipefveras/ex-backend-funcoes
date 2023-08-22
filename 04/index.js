const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo = this.saldo + valor
        this.historicos.push({ tipo: 'Deposito', valor: valor })
        console.log(`Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`)

    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor
            this.historicos.push({ tipo: 'Saque', valor: valor })
            console.log(`saque de R$${((valor) / 100).toFixed(2)} realizado para a cliente: ${this.nome}`)
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        }
    },
    extrato: function () {
        console.log(`extrato de R$ ${this.nome} - Saldo: ${((this.saldo) / 100).toFixed(2)}R$ `)
        console.log(`histórico de ${this.nome}`)
        for (let i = 0; i < this.historicos.length; i++) {
            console.log(this.historicos[i].tipo + ' ' + 'de' + ' ' + 'R$' + this.historicos[i].valor)
        }
    }
}

contaBancaria.depositar(10000)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.extrato()