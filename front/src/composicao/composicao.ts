

export class Carro {
    private readonly motor = new Motor();
    ligar(): void{
        this.motor.ligar();
    }
    
    Acelerar(): void{
        this.motor.Acelerar();
    }

    Parar(): void{
        this.motor.Parar();
    }

    desligar(): void{
        this.motor.desligar();
    }
}

export class Motor{
    ligar(): void{
        console.log(`Motor esta ligando...`);
    }

    Acelerar(): void{
        console.log(`Acelerando motor...`);
    }

    Parar(): void{
        console.log(`Parando motor...`);
    }

    desligar(): void{
        console.log(`Desligando motor...`);
    }
    
}

const carro = new Carro();

carro.ligar();
carro.Acelerar();