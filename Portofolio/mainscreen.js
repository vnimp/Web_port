const url= 'https://the-one-api.dev/v2'
const api= 'zY4rLuvWizvWKF6bCOXc'

window.onload=function() {
    
    alert('welkom');
    
    };
    let goodname=sessionStorage.getItem("naam");
    document.getElementById('welkom').innerHTML=`About: ${goodname}`

    async function haaldataop(ext){
        const resp= await fetch(`${url}/${ext}`,{
            headers:{
            'Authorization': `Bearer ${api}`
            }
        });
        const data=await resp.json();
        return data;
    }


    /*async function fetchdata(){
        try{
            const responsedata= await haaldataop('book');
            console.log(responsedata);
        }catch(error){
            console.error('er is een fout opgetreden');
        }
    }*/
    
    /*haaldataop('book').then(data=>{
    console.log(data);
     data.docs.forEach(element => {
        let extra=document.getElementById('test').appendChild('li');
        extra.innerHTML(element);
     });
        console.log(data);
    })*/
   // "/character"
       haaldataop(`/character?name=${goodname}`).then(data=>{
    console.log(data);
     data.docs.forEach(({birth,death,gender,hair,height,race,realm,spouse})=> {
        
        //naam
        let extra= document.getElementById('test')
        extra.textContent= null;
        //Date_Of_Birth
        let birthdate=document.createElement('li');
        //* bij for each ipv al die dingen element nemen en dan op basis van identifier naam maken en element gebruiken in literals;
        birthdate.textContent= `Birthday: ${birth}.`;
        document.getElementById('test').appendChild(birthdate);
        
        //death
        let deatha=document.createElement('li');
        deatha.textContent= `Date of Death: ${death}.`
        document.getElementById('test').appendChild(deatha);
        //gender
        let gendera=document.createElement('li');
        gendera.textContent= `Gender: ${gender}.`
        document.getElementById('test').appendChild(gendera);
        //hair
        let haira=document.createElement('li');
        haira.textContent= `Hair: ${hair}.`
        document.getElementById('test').appendChild(haira);
        //height
        let heighta=document.createElement('li');
        if(height){
        heighta.textContent= `Height: ${height}.`
        document.getElementById('test').appendChild(heighta);
        }else {heighta.textContent="unknown";document.getElementById('test').appendChild(heighta);}
        //race
        let racea=document.createElement('li');
        racea.textContent= `Race: ${race}.`
        document.getElementById('test').appendChild(racea);
        //realm
        let realma=document.createElement('li');
        if(realm){
            realma.textContent= `Origin: ${realm}.`
            document.getElementById('test').appendChild(realma);
            }else {realma.textContent="unknown";document.getElementById('test').appendChild(realma);}
        //spouse
        let spousea=document.createElement('li');
        if(spouse){
            spousea.textContent= `Spouse: ${spouse}.`
            document.getElementById('test').appendChild(spousea);
            }else {spouse.textContent="unknown";document.getElementById('test').appendChild(spousea);}  
        //wiki  
       /* let wiki=document.createElement('button');
        if(element.wiki){
            wiki.textContent= element.;
            document.getElementById('test').appendChild(spouse);
            }else {spouse.textContent="unknown";document.getElementById('test').appendChild(spouse);} */

        

     });
        console.log(data);
    })
    

  /* fetchdata().then(results=>{
        
array.forEach(element => {
    document.getElementById('test').appendChild('li');
});


    });*/