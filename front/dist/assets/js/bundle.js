/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************************!*\
  !*** ./src/origamid/objetos/objetos.ts ***!
  \*****************************************/

const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};
const servico1 = {
    nome: "Instalacao",
};
function mostrarQuantidade(produto) {
    if (produto.nome)
        console.log("Nome:", produto.nome);
    if (produto.quantidade)
        console.log("Quantidade:", produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
mostrarQuantidade(servico1);
;
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: 'Diego',
};
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: "HTML e CSS",
    autor: "Diego"
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map