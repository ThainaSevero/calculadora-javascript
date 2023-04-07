const resultado = document.querySelector(".display");

function apareceTela(num) {
    resultado.value += num;
}

function result() {
    try {
        resultado.value = eval(resultado.value);
    } catch {
        alert('Por favor insira uma operação válida');
    }
}

function limpaInput() {
    resultado.value = '';  // '' vazio 
}

function deleta() {
    resultado.value = resultado.value.slice(0, -1);
}

