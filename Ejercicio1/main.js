let btn = document.getElementById('btn'),
    parrafo = document.getElementById('parrafo'),
    contador = 0; 

    function cambioColor(){
        if(contador == 0){
            parrafo.classList.add('orange');
            contador = 1;
        }else{
            parrafo.classList.remove('orange');
            contador = 0;
        }
    }

    btn.addEventListener('click',cambioColor, true)