class NegociacaoController {
    constructor() {
        this._Negociacoes = new Negociacoes();
        this._tabela = new TabelaNegociacoesView($('#tblListaNegociacoes'));
        this._avisos = new AlertasView($('#divAvisos'));
        this._Data = $('#txtData');
        this._Quantidade = $('#txtQuantidade');
        this._valor = $('#txtValor');
    }
    adiciona(event) {
        event.preventDefault();
        console.log('1');
        let negociacao = new Negociacao(new Date(this._Data.val().toString().replace('-', ',')), parseInt(this._Quantidade.val().toString()), parseFloat(this._valor.val().toString()));
        console.log('2');
        this._Negociacoes.adiciona(negociacao);
        console.log('3');
        console.log(this._Negociacoes.listar());
        console.log('4');
        this._tabela.atualizar(this._Negociacoes);
        console.log('5');
        this._avisos.atualizar("inserido com sucesso.");
        console.log('6');
    }
}
