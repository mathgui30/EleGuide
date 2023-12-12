const botoesEditar = document.querySelectorAll('.editar-produto');
botoesEditar.forEach(botao => {
    botao.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do botão
        const produtoId = this.getAttribute('data-id');
        console.log('ID do produto:', produtoId); // Verifique se o ID está sendo capturado corretamente
        preencherModalParaEdicao(produtoId);
    });
});

function preencherModalParaEdicao(elementId) {
    const apiUrl = `http://localhost:3000/users/${elementId}`;
    axios.get(apiUrl)
        .then(response => {
            const produto = response.data; 
           
            document.getElementById('editarNomeProd').value = produto.nome;
            document.getElementById('editarDescricao').value = produto.descricao;
            document.getElementById('editarPreco').value = produto.preco;
            document.getElementById('editarFoto').value = produto.foto;

            abrirModalEditar(); 
        })
        .catch(error => {
            console.error('Erro ao obter os dados do produto:', error);
   
        });
}


document.getElementById('editarProdutoBtnModal').addEventListener('click', function() {
    const produtoId = document.querySelector('.editar-produto').getAttribute('data-id');
    editarElemento(produtoId);
});

function editarElemento(elementId) {
    const nome = document.getElementById('editarNomeProd').value;
    const descricao = document.getElementById('editarDescricao').value;
    const preco = document.getElementById('editarPreco').value;
    const foto = document.getElementById('editarFoto').value;

    const dadosEditados = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        foto: foto
    };

    axios.put(apiUrl)
        .then(response => {
            console.log('Produto editado com sucesso:', response.data);
            window.location.href = 'products.html'; 

            
            const elementoExistente = document.getElementById(elementId);
            if (elementoExistente) {
                elementoExistente.remove();
            }

            atualizarListaElementos();
        })
        .catch(error => {
            console.error('Erro ao editar o produto:', error);
        });
}