function verMais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var menosTexto = document.getElementById("menos");
    var btnVerMais = document.getElementById("btnVerMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        menosTexto.style.display = "inline";
        maisTexto.style.display = "none";
        btnVerMais.innerHTML = "<i class='bi bi-chevron-right'></i>";
    } else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        menosTexto.style.display = "none";
        btnVerMais.innerHTML = "<i class='bi bi-chevron-left'></i>";
    }
}