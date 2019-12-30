class ViewBase {
    constructor(pElemento) {
        this._Elemento = pElemento;
    }
    atualizar(parametro) {
        this._Elemento.html(this.template(parametro));
    }
}
