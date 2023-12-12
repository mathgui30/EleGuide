
function deletarProdutoPorId(elementId) {
    const apiUrl = `http://localhost:3000/users/${userId}`;
    axios.delete(apiUrl)
        .then(response => {
            console.log('Produto deletado com sucesso:', response.data);
            window.location.reload(); 
        })
        .catch(error => {
            console.error('Erro ao deletar o produto:', error);
        });
}