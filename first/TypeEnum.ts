enum Cores {
    VERMELHO = 10, // 10 
    AZUL = 20, // 20
    AMARELO = 200, // 200
 
}


 // Ele une os dois enum
enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA 
}


function escolhaACor(cor: Cores):void {
    console.log(Cores[cor]);
}


console.log(Cores.VERMELHO);
console.log(Cores[0]); // "VERMELHO"