document.getElementById("form-sorteador").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const numeroMaximo = document.getElementById("numero-maximo").value; 
    const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1; 

    alert("Número sorteado é: " + numeroSorteado); //
});