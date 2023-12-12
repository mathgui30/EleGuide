document.getElementById('adicionarProdutoBtn').addEventListener('click', function() {
  const nome = document.getElementById('nomeProd').value;
  const descricao = document.getElementById('descricao').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const foto = document.getElementById('foto').value;

  const data = {
    nome,
    descricao,
    preco,
    foto
  };

  fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao adicionar produto');
    }
    return response.json();
  })
  .then(result => {
    console.log('Produto adicionado:', result);
    window.location.href = 'products.html'; 
  })
  .catch(error => {
    console.error('Erro:', error);
  });
});