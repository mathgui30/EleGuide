
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".card card-body"); 

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name) {
            card.classList.remove("hide");
        }
    })
};


filterButtons.forEach(button => button.addEventListener("click", filterCards));

function abrirModal(){
    new bootstrap.Modal("#JanelaModal").show();
}
function abrirModalDeletar(){
    new bootstrap.Modal("#Deletar").show();
}
function abrirModalEditar(){
    new bootstrap.Modal("#Editar").show();
}