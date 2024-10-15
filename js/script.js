const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Eventos //
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        // Remover a seleção anterior
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        // Adicionar a classe "selected" no botão clicado
        btn.querySelector(".color").classList.add("selected");

        // Pegar o ID do botão clicado
        const id = btn.getAttribute("id");

        // Alterando imagens junto com o botão
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});
