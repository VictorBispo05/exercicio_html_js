document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    if (validaNumero()) {
        exibirMensagemV("Formulário válido")
    } else {
        exibirMensagemI("Formulário inválido");
    }
})


function validaNumero() {
    var valorA = parseFloat(document.getElementById("A").value);
    var valorB = parseFloat(document.getElementById("B").value);
    
    if (valorA >= valorB) {
        ;
        return false;
    }

    return true;
}

var mensagemElementV = document.getElementById("valido");
var mensagemElementI = document.getElementById("invalido");

function exibirMensagemV(valido) {
    mensagemElementV.textContent = valido;
    mensagemElementV.style.display="block"
    mensagemElementI.style.display="none"
}

function exibirMensagemI(invalido) {
    mensagemElementI.textContent = invalido;
    mensagemElementI.style.display="block"
    mensagemElementV.style.display="none"
}