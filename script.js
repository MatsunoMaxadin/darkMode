let el = document.querySelector("body");
let buton = document.getElementById("butao");
let tit = document.getElementById("tit");
let es = document.getElementById("es");
let atv = document.getElementById("atv");
let modo = "escuro";
let i = 0;

atv.innerHTML = `Mudar para o modo ${modo}: `;
function teste(){
    
    if (i === 1)
    
        {i = 0;
            tit.innerHTML = "Modo branco";
            es.innerHTML= "Modo Escuro";
            modo = "escuro";
            atv.innerHTML = `Mudar para o modo ${modo}: `;
        }
    else if (i === 0)
    
        {i = 1;
            tit.innerHTML = "Modo escuro";
            es.innerHTML = "Modo Claro"
            modo = "claro";
            atv.innerHTML = `Mudar para o modo ${modo}: `;
        }
    
    
    
    
    
};

function muda(){
    
    el.classList.toggle("escuro");
    buton.classList.toggle("escurotao");
    teste();
};

