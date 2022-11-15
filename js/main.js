/*----Elementos HTML----*/
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");
const t5 = document.querySelector("#t5");
const t6 = document.querySelector("#t6");
const t7 = document.querySelector("#t7");
const t8 = document.querySelector("#t8");
const t9 = document.querySelector("#t9");
const t10 = document.querySelector("#t10");
const t11 = document.querySelector("#t11");
const t12 = document.querySelector("#t12");
const contador = document.querySelector("small");


const t1F = document.getElementById("t1-f");
const t1B = document.getElementById("t1-b");
const t2F = document.getElementById("t2-f");
const t2B = document.getElementById("t2-b");
const t3F = document.getElementById("t3-f");
const t3B = document.getElementById("t3-b");
const t4F = document.getElementById("t4-f");
const t4B = document.getElementById("t4-b");
const t5F = document.getElementById("t5-f");
const t5B = document.getElementById("t5-b");
const t6F = document.getElementById("t6-f");
const t6B = document.getElementById("t6-b");
const t7F = document.getElementById("t7-f");
const t7B = document.getElementById("t7-b");
const t8F = document.getElementById("t8-f");
const t8B = document.getElementById("t8-b");
const t9F = document.getElementById("t9-f");
const t9B = document.getElementById("t9-b");
const t10F = document.getElementById("t10-f");
const t10B = document.getElementById("t10-b");
const t11F = document.getElementById("t11-f");
const t11B = document.getElementById("t11-b");
const t12F = document.getElementById("t12-f");
const t12B = document.getElementById("t12-b");

/*----Eventos----*/
t1.addEventListener("click", voltearT1);
t2.addEventListener("click", voltearT2);
t3.addEventListener("click", voltearT3);
t4.addEventListener("click", voltearT4);
t5.addEventListener("click", voltearT5);
t6.addEventListener("click", voltearT6);
t7.addEventListener("click", voltearT7);
t8.addEventListener("click", voltearT8);
t9.addEventListener("click", voltearT9);
t10.addEventListener("click", voltearT10);
t11.addEventListener("click", voltearT11);
t12.addEventListener("click", voltearT12);

/*----Variables----*/
let valorTarjeta = 0;
let valor1 = 0;
let valor2 = 0;
let puntosAcumulados = 0;





/*----Funciones----*/
function voltearT1(){
    //alert("Funciona");

    t1.style.transform = "rotateY(180deg)";
    t1.style.transition = ".75s";

    let timeOut = setTimeout(loadT1,200)

    function loadT1(){
        t1F.style.display = "flex";
        t1B.style.display = "none";
    }

    valorTarjeta = 1;
    jugada1();
    
}

function voltearT2(){
    //alert("Funciona");

    t2.style.transform = "rotateY(180deg)";
    t2.style.transition = ".75s";

    let timeOut = setTimeout(loadT2,200)

    function loadT2(){
        t2F.style.display = "flex";
        t2B.style.display = "none";
    }

    valorTarjeta = 2;
    jugada1();
    
}

function voltearT3(){
    //alert("Funciona");

    t3.style.transform = "rotateY(180deg)";
    t3.style.transition = ".75s";

    let timeOut = setTimeout(loadT3,200)

    function loadT3(){
        t3F.style.display = "flex";
        t3B.style.display = "none";
    }

    valorTarjeta = 3;
    jugada1();
    
}

function voltearT4(){
    //alert("Funciona");

    t4.style.transform = "rotateY(180deg)";
    t4.style.transition = ".75s";

    let timeOut = setTimeout(loadT4,200)

    function loadT4(){
        t4F.style.display = "flex";
        t4B.style.display = "none";
    }
    
    valorTarjeta = 4;
    jugada1();
}

function voltearT5(){
   // alert("Funciona");

    t5.style.transform = "rotateY(180deg)";
    t5.style.transition = ".75s";

    let timeOut = setTimeout(loadT5,200)

    function loadT5(){
        t5F.style.display = "flex";
        t5B.style.display = "none";
    }

    valorTarjeta = 5;
    jugada1();
    
}

function voltearT6(){
    //alert("Funciona");

    t6.style.transform = "rotateY(180deg)";
    t6.style.transition = ".75s";

    let timeOut = setTimeout(loadT6,200)

    function loadT6(){
        t6F.style.display = "flex";
        t6B.style.display = "none";
    }

    valorTarjeta = 6;
    jugada1();
    
}

function voltearT7(){
    //alert("Funciona");

    t7.style.transform = "rotateY(180deg)";
    t7.style.transition = ".75s";

    let timeOut = setTimeout(loadT7,200)

    function loadT7(){
        t7F.style.display = "flex";
        t7B.style.display = "none";
    }

    valorTarjeta = 1;
    jugada1();
    
}

function voltearT8(){
    //alert("Funciona");

    t8.style.transform = "rotateY(180deg)";
    t8.style.transition = ".75s";

    let timeOut = setTimeout(loadT8,200)

    function loadT8(){
        t8F.style.display = "flex";
        t8B.style.display = "none";
    }

    valorTarjeta = 2;
    jugada1();
    
}

function voltearT9(){
    //alert("Funciona");

    t9.style.transform = "rotateY(180deg)";
    t9.style.transition = ".75s";

    let timeOut = setTimeout(loadT9,200)

    function loadT9(){
        t9F.style.display = "flex";
        t9B.style.display = "none";
    }

    valorTarjeta = 3;
    jugada1();
    
}

function voltearT10(){
    //alert("Funciona");

    t10.style.transform = "rotateY(180deg)";
    t10.style.transition = ".75s";

    let timeOut = setTimeout(loadT10,200)

    function loadT10(){
        t10F.style.display = "flex";
        t10B.style.display = "none";
    }

    valorTarjeta = 4;
    jugada1();
    
}
function voltearT11(){
    //alert("Funciona");

    t11.style.transform = "rotateY(180deg)";
    t11.style.transition = ".75s";

    let timeOut = setTimeout(loadT11,200)

    function loadT11(){
        t11F.style.display = "flex";
        t11B.style.display = "none";
    }

    valorTarjeta = 5;
    jugada1();
    
}

function voltearT12(){
    //alert("Funciona");

    t12.style.transform = "rotateY(180deg)";
    t12.style.transition = ".75s";

    let timeOut = setTimeout(loadT12,200)

    function loadT12(){
        t12F.style.display = "flex";
        t12B.style.display = "none";
    }

    valorTarjeta = 6;
    jugada1();
    
}

function jugada1(){
    //alert(valorTarjeta);
    if(valor1 === 0){
        valor1 = valorTarjeta;
    }
    else{
        valor2 = valorTarjeta;

        if(valor1 === valor2){
            setTimeout(() =>{
                //alert("Bingo!!");
                desaparecer();
            },500);
        }
        else{
            valor1 = 0;
            valor2 = 0;
            setTimeout(() =>{
                //alert("Son diferentes");
                voltearTarjetas();
            },500);

            
        }
    }

}

function desaparecer(){
    setTimeout(() =>{
        if(valor1 === 1){
            // alert("Se ejecuta la funcion")
             t1.style.display = "none";
             t7.style.display = "none";
             valor1 = 0;
             valor2 = 0;
         }else if(valor1 === 2){
            // alert("Se ejecuta la funcion")
             t2.style.display = "none";
             t8.style.display = "none";
             valor1 = 0;
             valor2 = 0;
         }else if(valor1 === 3){
             //alert("Se ejecuta la funcion")
             t3.style.display = "none";
             t9.style.display = "none";
             valor1 = 0;
             valor2 = 0;
         }else if(valor1 === 4){
            // alert("Se ejecuta la funcion")
             t4.style.display = "none";
             t10.style.display = "none";
             valor1 = 0;
             valor2 = 0;
         }else if(valor1 === 5){
            // alert("Se ejecuta la funcion")
             t5.style.display = "none";
             t11.style.display = "none";
             valor1 = 0;
             valor2 = 0;
         }else if(valor1 === 6){
             //alert("Se ejecuta la funcion")
             t6.style.display = "none";
             t12.style.display = "none";
             valor1 = 0;
             valor2 = 0;
         }
         puntosAcumulados = puntosAcumulados + 10;
         contador.innerText = puntosAcumulados;
    },750);
}

function voltearTarjetas(){
    setTimeout(() => {
        t1F.style.display = "none";
        t1B.style.display = "flex";
        t2F.style.display = "none";
        t2B.style.display = "flex";
        t3F.style.display = "none";
        t3B.style.display = "flex";
        t4F.style.display = "none";
        t4B.style.display = "flex";
        t5F.style.display = "none";
        t5B.style.display = "flex";
        t6F.style.display = "none";
        t6B.style.display = "flex";
        t7F.style.display = "none";
        t7B.style.display = "flex";
        t8F.style.display = "none";
        t8B.style.display = "flex";
        t9F.style.display = "none";
        t9B.style.display = "flex";
        t10F.style.display = "none";
        t10B.style.display = "flex";
        t11F.style.display = "none";
        t11B.style.display = "flex";
        t12F.style.display = "none";
        t12B.style.display = "flex";
    },750);
    

}