class Negociacao{
    private _Data:Date;
    private _Quantidade:number;
    private _Valor:number;

    constructor(pData:Date,pQuantidade:number,pValor:number) {
        this._Data=pData;
        this._Quantidade = pQuantidade;
        this._Valor = pValor;
    }

    get Data():Date{
        return new Date(this._Data);
    }

    get Quantidade():number{
        return this._Quantidade;
    }

    get Valor():number{
        return this.Valor;
    }

    get Volume():number{
        return this.Quantidade * this._Valor
    }

}