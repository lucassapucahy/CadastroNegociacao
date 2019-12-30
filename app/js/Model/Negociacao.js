class Negociacao {
    constructor(pData, pQuantidade, pValor) {
        this._Data = pData;
        this._Quantidade = pQuantidade;
        this._Valor = pValor;
    }
    get Data() {
        return new Date(this._Data);
    }
    get Quantidade() {
        return this._Quantidade;
    }
    get Valor() {
        return this.Valor;
    }
    get Volume() {
        return this.Quantidade * this._Valor;
    }
}
