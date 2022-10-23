let t1 = document.getElementById("t1").addEventListener("click",voltear);

function voltear(){
    //alert("Funciona el boton");
    let t1F = document.getElementById("t1-f");
    let t1B = document.getElementById("t1-b");
    let t1 = document.getElementById("t1")

    t1.style.transform = "rotateY(180deg)";
    t1.style.transition = ".75s";

    let timeOut = setTimeout(load,200)

function load(){
    t1F.style.display = "flex";
    t1B.style.display = "none";
}
    
}