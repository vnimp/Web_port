(function(){
    const message= 'Mellon';
    console.log('Message');
})
document.getElementById('form').addEventListener("submit",event=>{
    event.preventDefault();
    
let name= document.getElementById('naam').value;
let thefellowship=['Samwise Gamgee','Frodo Baggins','Gandalf','Legolas','Gimli','Boromir','Galadriel','Elrond'];
if(!thefellowship.includes(name)){
alert('gelieve enkel namen uit "the fellowship" te gebruiken')
return
}


//submit adden aan local storage.
sessionStorage.setItem("naam",name);
window.location.href= 'mainscreen.html';
})

