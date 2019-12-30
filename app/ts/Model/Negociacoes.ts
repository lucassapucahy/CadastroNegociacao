class Negociacoes {
    private _negociacoes = new Array<Negociacao>();

    adiciona(pNegociacao: Negociacao): void {
        this._negociacoes.push(pNegociacao);
    }

    listar(): Array<Negociacao>{
        return new Array(...this._negociacoes);
    }
}