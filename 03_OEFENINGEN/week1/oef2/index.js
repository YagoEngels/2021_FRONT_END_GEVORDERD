document.getElementById("button").addEventListener("click",function(){
    console.log(document.getElementById("textNumber").value)
    if(document.getElementById("textNumber").value %2 == 0){
        document.getElementById("end").innerHTML = "het getal is even";
        document.getElementById("end").style.backgroundColor = "green";

    } else {
        document.getElementById("end").innerHTML = "het getal is oneven";
        document.getElementById("end").style.backgroundColor = "red";
    }
});