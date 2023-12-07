const url = "http://localhost:3000/produtos";

function getProducts() {
  axios.get(url)
    .then(response => {
      const data = response.data;
      const productsContainer = document.getElementById('productsContainer');

      data.forEach(product => {
        if (product.foto && product.nome && product.descricao && product.preco) {
          const card = createProductCard(product);
          productsContainer.appendChild(card);
        }
      });
    })
    .catch(error => console.log(error));
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('col');

  const cardHtml = `
    <div class="card">
      <img src="${product.foto}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.nome}</h5>
        <p class="card-text">${product.descricao}</p>
        <h3>R$ ${product.preco}</h3>
        <button class="btn btn-primary">Visualizar</button>
      </div>
    </div>
  `;

  card.innerHTML = cardHtml;
  return card;
}

document.addEventListener('DOMContentLoaded', function() {
  getProducts();
});
