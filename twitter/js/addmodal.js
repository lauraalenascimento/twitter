var modal = document.getElementById("containermodal");

var btn = document.getElementById("entar");

var span = docuemt.getElementbyclassName("close") [0];

btn.onclick = function(){
    modal.style.display = "block";

}

span.onclick = function(){
    span.style.display = "none";
}