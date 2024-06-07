document.addEventListener('DOMContentLoaded',function(){
    console.log('loaded')
});

(function(){
    const citizens= ['Humans','Dwarves','Elves','Hobbits'];
    const[Gondor,Moria,Mirkwood,Hobbiton]=citizens;
    console.log(Gondor,Moria,Mirkwood,Hobbiton);
    console.log('Message'); 
})();
document.getElementById('ring').addEventListener("mouseover",event=>{
    event.preventDefault();
    document.getElementById('1').innerText="One ring to rule them all";
    document.getElementById('2').innerText="One ring to find them..";
    document.getElementById('3').innerText="One ring to bring them all..";
    document.getElementById('4').innerText="And in the darkness bind them";
    
    
})

document.getElementById('ring').addEventListener("mouseleave",event=>{
    event.preventDefault();
    document.getElementById('1').innerText="";
    document.getElementById('2').innerText="";
    document.getElementById('3').innerText="";
    document.getElementById('4').innerText="";
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



