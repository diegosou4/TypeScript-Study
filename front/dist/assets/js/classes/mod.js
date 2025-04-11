"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    nome;
    colaboradores = [];
    cnpj;
    constructor(nome, cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    getcnpj() {
        return this.cnpj;
    }
    setColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    showColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
class Colaborador {
    nome;
    sobrenome;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Empresa('Youtube', '11.111.111/00001-11');
const colaborador1 = new Colaborador('Diego', 'Souza');
const colaborador2 = new Colaborador('Joao', 'Souza');
const colaborador3 = new Colaborador('Jose', 'Souza');
empresa1.setColaborador(colaborador1);
empresa1.setColaborador(colaborador2);
empresa1.setColaborador(colaborador3);
console.log(empresa1.showColaboradores());
//# sourceMappingURL=mod.js.map