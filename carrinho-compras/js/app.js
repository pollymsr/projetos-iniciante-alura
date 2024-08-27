let totalGeral = 0; 

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim(); // Use .trim() para remover espaços em branco extras
    let quantidade = document.getElementById('quantidade').value;

    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.')); // Substitua a vírgula por ponto se necessário
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco.toFixed(2)}</span>
    </section>`;
    
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

    document.getElementById('quantidade').value = 0; // Corrige o erro de digitação
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}
