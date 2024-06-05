
document.getElementById('form').addEventListener("submit",event=>{
    event.preventDefault();
//lijst aanmaken compacter
//alles dynamisch laten verschijnen
//val (geen nummers of onbestaande namen);
//form submitten 
//terugknop 
//"test" als naam voor id weg
let name= document.getElementById('naam').value;
//submit adden aan local storage.
sessionStorage.setItem("naam",name);
window.location.href= 'mainscreen.html';
})

