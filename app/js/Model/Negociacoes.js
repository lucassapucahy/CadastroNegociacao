class Negociacoes {
    constructor() {
        this._negociacoes = new Array();
    }
    adiciona(pNegociacao) {
        this._negociacoes.push(pNegociacao);
    }
    listar() {
        return new Array(...this._negociacoes);
    }
}
