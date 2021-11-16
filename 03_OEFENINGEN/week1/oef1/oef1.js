function hello(){
    alert("hello world");
}

hello();


document.getElementById("but").addEventListener("click", hello2())
function hello2(){
    document.getElementById("inputHello").value = "hello world";
}