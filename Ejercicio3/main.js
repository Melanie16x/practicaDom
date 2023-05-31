let btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    let operacion = document.getElementById('operacion').value;
    let valor1 = parseInt(document.getElementById('numero1').value);
    let valor2 = parseInt(document.getElementById('numero2').value);
    if (operacion == 1){
        document.getElementById('resultado').innerHTML = valor1 + valor2;
    }else if(operacion == 2){
        document.getElementById('resultado').innerHTML = valor1 - valor2;
    }else if(operacion == 3){
        document.getElementById('resultado').innerHTML = valor1 * valor2;
    }else if(operacion == 4){
        document.getElementById('resultado').innerHTML = valor1 / valor2;
    }
})

