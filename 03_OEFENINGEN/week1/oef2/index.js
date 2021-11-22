const getal = document.getElementById("textNumber")
const eind = document.getElementById("end")


getal.addEventListener("input",function(e){
    if(getal.value %2 == 0){
        eind.innerHTML = "het getal is even";
        eind.style.backgroundColor = "green";

    } else {
        eind.innerHTML = "het getal is oneven";
        eind.style.backgroundColor = "red";
    }

    e.preventDefault();
});