window.onload = async function() {
    try {
        // Fazer uma requisição GET para uma API (substitua a URL pela sua)
        const response = await axios.get('URL_DA_SUA_API/produtos');
        
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
                            <div class="card-body">
                                <h5 class="card-title">${produto.nome}</h5>
                                <p class="card-text">${produto.descricao}</p>
                                <p class="card-price">Preço: R$ ${produto.preco}</p>
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