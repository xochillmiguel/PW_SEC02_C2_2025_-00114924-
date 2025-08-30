document.addEventListener("DOMContentLoaded", () =>{
    const elementTitle = document.querySelector("#title");
    const elementContent = document.querySelector("#content");
    const changeColors = document.querySelectorAll(".articulo");
    const footerImg = document.querySelector(".footer-img");
    const footerText = document.querySelector(".footer-text");

    function cambTitulo(){
        elementTitle.innerHTML = "HTML & CSS: Curso práctico avanzado";
    }

    function cambOrden(){
        elementContent.style.flexDirection =
        elementContent.style.flexDirection === "column" ? "row" : "column";
    }

    function cambColores(){
        changeColors.forEach((section) => section.classList.toggle("color-change"));
    }

    function footerImagen(){
        footerImg.classList.remove("hidden");
        footerText.classList.remove("hidden");
    }

    document.querySelector(".wrapButtons button:nth-child(1)").onclick = cambTitulo;
    document.querySelector(".wrapButtons button:nth-child(2)").onclick = cambOrden;
    document.querySelector(".wrapButtons button:nth-child(3)").onclick = cambColores;
    document.querySelector(".wrapButtons button:nth-child(4)").onclick = footerImagen;

});