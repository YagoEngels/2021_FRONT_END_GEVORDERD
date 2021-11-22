document.getElementById("but").addEventListener("click",function(e){
    let mogelijkeUrl = document.getElementById("url").value;

    if(isValidHttpUrl(mogelijkeUrl)){
        document.getElementById("url").style.backgroundColor = "green";
    } else{
        document.getElementById("url").style.backgroundColor = "red";
    }
    e.preventDefault();
});

function isValidHttpUrl(string){
    let url;

    try{
        url = new URL(string);
    } catch(_){
        return false;
    }

    return url.protocol == "http:" || url.protocol == "https:";
}