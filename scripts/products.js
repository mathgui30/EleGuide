window.onload = async function() {
    try {
        // Fazer uma requisição GET para uma API (substitua a URL pela sua)
        const response = await axios.get('http://localhost:3000/produtos');
        
        // Verificar se a requisição foi bem-sucedida e se há dados retornados
        if (response.status === 200 && response.data && response.data.length > 0) {
            const produtos = response.data;
            const cardsContainer = document.getElementById('cardsContainer');
            
            // Iterar pelos produtos e criar os cards para cada um
            produtos.forEach(produto => {
                const card = `
                    <div class="col">
                        <div class="card">
                            <!-- Conteúdo do card com os detalhes do produto -->
                            <img src="${produto.foto}" class="card-img-top img-fluid" alt="Imagem do produto">
                            <div class="card-body">
                                <h5 class="card-title">${produto.nome}</h5>
                                <p class="card-text">${produto.descricao}</p>
                                <p class="card-price">Preço: R$ ${produto.preco}</p>
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Editar">
                                        <i class="fas fa-edit"></i> <!-- Ícone de editar -->
                                    </button>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Deletar">
                                        <i class="fas fa-trash-alt"></i> <!-- Ícone de deletar -->
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                cardsContainer.innerHTML += card;
            });
        } else {
            console.error('Não foi possível obter os produtos.');
        }
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
    }
};

// POST
const formulario = document.getElementById('addProduto'); 

formulario.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário de recarregar a página

    // Coletar os dados do formulário
    const nome = document.getElementById('nomeProd').value; // Substitua 'nomeDoProduto' pelo ID correto do campo de nome
    const descricao = document.getElementById('descProd').value; // Substitua 'descricaoDoProduto' pelo ID correto do campo de descrição
    const preco = document.getElementById('precoProd').value; // Substitua 'precoDoProduto' pelo ID correto do campo de preço
    const foto = document.getElementById('fotoProd').value;

    const novoProduto = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        foto: foto
    };

    try {
        const response = await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(novoProduto) // Converte o objeto JavaScript para JSON
        });

        if (response.ok) {
            console.log('Novo produto criado com sucesso!');
            // Faça algo após criar o produto, se necessário
        } else {
            console.error('Erro ao criar o produto:', response.status);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});

