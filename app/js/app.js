var controller = new NegociacaoController();
document.querySelector("#formNegociacao").addEventListener('submit', function (e) { controller.adiciona(e); });
