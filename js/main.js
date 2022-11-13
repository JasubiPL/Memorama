/*----Elementos HTML----*/
const tarjeta1 = document.querySelector("#t1");
const tarjeta2 = document.querySelector("#t2");
const tarjeta3 = document.querySelector("#t3");
const tarjeta4 = document.querySelector("#t4");
const tarjeta5 = document.querySelector("#t5");
const tarjeta6 = document.querySelector("#t6");
const tarjeta7 = document.querySelector("#t7");
const tarjeta8 = document.querySelector("#t8");
const tarjeta9 = document.querySelector("#t9");
const tarjeta10 = document.querySelector("#t10");
const tarjeta11 = document.querySelector("#t11");
const tarjeta12 = document.querySelector("#t21");

/*----Eventos----*/
tarjeta1.addEventListener("click", voltearT1);
tarjeta2.addEventListener("click", voltearT2);
tarjeta3.addEventListener("click", voltearT3);
tarjeta4.addEventListener("click", voltearT4);
tarjeta5.addEventListener("click", voltearT5);
tarjeta6.addEventListener("click", voltearT6);
tarjeta7.addEventListener("click", voltearT7);
tarjeta8.addEventListener("click", voltearT8);
tarjeta9.addEventListener("click", voltearT9);
tarjeta10.addEventListener("click", voltearT10);
tarjeta11.addEventListener("click", voltearT11);
tarjeta12.addEventListener("click", voltearT12);



/*----Funciones----*/
function voltearT1(){
    alert("Funciona");
    let t1F = document.getElementById("t1-f");
    let t1B = document.getElementById("t1-b");

    t1.style.transform = "rotateY(180deg)";
    t1.style.transition = ".75s";

    let timeOut = setTimeout(loadT1,200)

    function loadT1(){
        t1F.style.display = "flex";
        t1B.style.display = "none";
    }
    
}

function voltearT2(){
    alert("Funciona");
    let t2F = document.getElementById("t2-f");
    let t2B = document.getElementById("t2-b");

    t2.style.transform = "rotateY(180deg)";
    t2.style.transition = ".75s";

    let timeOut = setTimeout(loadT2,200)

    function loadT2(){
        t2F.style.display = "flex";
        t2B.style.display = "none";
    }
    
}

function voltearT3(){
    alert("Funciona");
    let t3F = document.getElementById("t3-f");
    let t3B = document.getElementById("t3-b");

    t3.style.transform = "rotateY(180deg)";
    t3.style.transition = ".75s";

    let timeOut = setTimeout(loadT3,200)

    function loadT3(){
        t3F.style.display = "flex";
        t3B.style.display = "none";
    }
    
}

function voltearT4(){
    alert("Funciona");
    let t4F = document.getElementById("t4-f");
    let t4B = document.getElementById("t4-b");

    t4.style.transform = "rotateY(180deg)";
    t4.style.transition = ".75s";

    let timeOut = setTimeout(loadT4,200)

    function loadT4(){
        t4F.style.display = "flex";
        t4B.style.display = "none";
    }
    
}

function voltearT5(){
    alert("Funciona");
    let t5F = document.getElementById("t5-f");
    let t5B = document.getElementById("t5-b");

    t5.style.transform = "rotateY(180deg)";
    t5.style.transition = ".75s";

    let timeOut = setTimeout(loadT5,200)

    function loadT5(){
        t5F.style.display = "flex";
        t5B.style.display = "none";
    }
    
}

function voltearT6(){
    alert("Funciona");
    let t6F = document.getElementById("t6-f");
    let t6B = document.getElementById("t6-b");

    t6.style.transform = "rotateY(180deg)";
    t6.style.transition = ".75s";

    let timeOut = setTimeout(loadT6,200)

    function loadT6(){
        t6F.style.display = "flex";
        t6B.style.display = "none";
    }
    
}

function voltearT7(){
    alert("Funciona");
    let t7F = document.getElementById("t7-f");
    let t7B = document.getElementById("t7-b");

    t7.style.transform = "rotateY(180deg)";
    t7.style.transition = ".75s";

    let timeOut = setTimeout(loadT7,200)

    function loadT7(){
        t7F.style.display = "flex";
        t7B.style.display = "none";
    }
    
}



