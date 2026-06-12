const painel = document.getElementById("painel");
const itens = document.querySelectorAll(".item");
const btnContraste = document.getElementById("btnContraste");

itens.forEach(item => {

    function mostrarInfo() {

        painel.innerHTML = `
        <h2>${item.dataset.titulo}</h2>
        <p>${item.dataset.texto}</p>
        `;

    }

    item.addEventListener("click", mostrarInfo);

    item.addEventListener("keydown", function(e){

        if(
            e.key === "Enter" ||
            e.key === " "
        ){
            mostrarInfo();
        }

    });

});

btnContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

});