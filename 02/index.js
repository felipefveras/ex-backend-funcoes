const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log('o carro já está ligado,xará')
        } else {
            this.ligado = true;
            console.log(`carro ligado. Velocidade: ${this.velocidade}`)
        }

    },
    desligado: function () {
        if (this.ligado === false) {
            console.log('o carro já está desligado')
        } else {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`carro desligado. Velocidade: ${this.velocidade}`)
        }

    },
    acelerar: function () {
        if (this.ligado === false) {
            console.log('não é possivel acelerar o carro desligado')
        } else {
            this.velocidade += 10
            console.log(`carro ligado. velocidade: ${this.velocidade}`)
        }

    },
    desacelerar: function () {
        if (this.ligado === false) {
            console.log('n é possivel desacelerar um carro desligado')
        } else {
            this.velocidade += -10
            console.log(`carro ligado. velocidade: ${this.velocidade}`)
        }
    }

}

carro.desligado()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligado()
carro.acelerar()
carro.desacelerar()




