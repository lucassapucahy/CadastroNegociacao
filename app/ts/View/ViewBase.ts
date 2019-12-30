abstract class ViewBase<T>{
    private _Elemento : JQuery;

    constructor(pElemento:JQuery) {
        this._Elemento = pElemento;
    }

    abstract template(parametro:T):string

    atualizar(parametro:T):void{
        this._Elemento.html(this.template(parametro));
    }

}