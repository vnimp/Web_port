
document.getElementById('form').addEventListener("submit",event=>{
    event.preventDefault();
let name= document.getElementById('naam').value;
//submit adden aan local storage.
sessionStorage.setItem("naam",name);
window.location.href= 'mainscreen.html';
})

