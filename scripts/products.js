function renderizarCartoes(produtos) {
    const cardsContainer = document.getElementById('cardsContainer');

    produtos.forEach(produto => {
        const card = `
        <div class="col">
            <div class="card">
                <img src="${produto.foto}" class="card-img-top img-fluid" alt="Imagem do produto">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <p class="card-price">Preço: R$ ${produto.preco}</p>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary editar-produto" data-bs-toggle="modal" data-bs-target="#Editar" data-id="${produto._id}">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button type="button" class="btn btn-danger deletar-produto" data-bs-toggle="modal" data-bs-target="#Deletar" data-id="${produto._id}">
                            <i class="fas fa-trash-alt"></i> Deletar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardsContainer.innerHTML += card;
    });

   
    configurarEventosEdicaoEExclusao();
}

function configurarEventosEdicaoEExclusao() {
    const botoesEditar = document.querySelectorAll('.editar-produto');
    botoesEditar.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-id');
            console.log('ID do produto:', produtoId);
           
            preencherModalParaEdicao(produtoId);
        });
    });

    const botoesDeletar = document.querySelectorAll('.deletar-produto');
    botoesDeletar.forEach(botao => {
        botao.addEventListener('click', function() {
            // Capturar o ID do produto do botão de exclusão do card
            const produtoId = this.getAttribute('data-id');
            console.log('ID do produto a ser deletado:', produtoId);
            
            // Ao clicar no botão "Apagar" dentro do modal, chamar a função para deletar o produto correspondente
            document.querySelector('#Deletar .btn-primary').addEventListener('click', function() {
                deletarProdutoPorId(produtoId);
            });
        });
    });
}




window.onload = async function() {
    try {
        const response = await axios.get('http://localhost:3000/produtos');

        if (response.status === 200 && response.data && response.data.length > 0) {
            const produtos = response.data;
            renderizarCartoes(produtos);
        } else {
            console.error('Não foi possível obter os produtos.');
        }
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
    }

  
    configurarEventosEdicaoEExclusao();
};