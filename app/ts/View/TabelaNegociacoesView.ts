class TabelaNegociacoesView extends ViewBase<Negociacoes> {

    template(Negociacoes : Negociacoes):string{
        return `${Negociacoes.listar().map(x => {
            return `
            <tr>
                <td>${x.Data.getDate()}/${x.Data.getMonth()-1/x.Data.getFullYear()}</td>
                <td>${x.Quantidade}</td>
                <td>${x.Valor}</td>
                <td>${x.Volume}</td>
            </tr>
            `
        }).join('')}`;
    }

}