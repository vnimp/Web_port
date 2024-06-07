document.addEventListener('DOMContentLoaded',function(){
    console.log('loaded')
});
let som=0;
const citizens= ['Humans','Dwarves','Elves','Hobbits'];
    const[Gondor,Moria,Mirkwood,Hobbiton]=citizens;

function rekenen(...getallen){  
    let uitkomst=0;
    getallen.forEach(element => {
        uitkomst+=(element);
    });
    som+=uitkomst;
    console.log(som);
    

}

(function(){    
     
    rekenen(1,2,3);
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

let thefellowship=['Samwise Gamgee','Frodo Baggins','Gandalf','Legolas','Gimli','Boromir'];
let characters=[...thefellowship,'Sauron','Saruman'];
if(name=== "city info"){
    document.getElementById('intro').innerText=(`Gondor: ${Gondor},Moria: ${Moria},Mirkwood,Hobbiton${Hobbiton}`);
    return;
}
if(name==="uitkomst"){
    document.getElementById('intro').innerText=som.toString();
    return;
}
if(!characters.includes(name)){
  
alert('gelieve enkel namen uit "the fellowship" te gebruiken(of de 2 bad guys)')
return
}



//submit adden aan local storage.
sessionStorage.setItem("naam",name);
window.location.href= 'mainscreen.html';
})



