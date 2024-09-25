function validar () {
    let numeroA = parseFloat (document.getElementById ("numeroA").value);
    let numeroB = parseFloat (document.getElementById ("numeroB").value);

    if (numeroB > numeroA){
        alert ('Validação ok! Número B é maior que o número A');
    } else {
        alert ('Para seguir a validação o número B deve ser maior que o número A');
    }
}

document.getElementById('botao').addEventListener ('click', validar)