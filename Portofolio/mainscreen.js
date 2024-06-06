const url= 'https://the-one-api.dev/v2'
const api= 'zY4rLuvWizvWKF6bCOXc'
let goodname=sessionStorage.getItem("naam");
document.getElementById('welkom').innerHTML=`About: ${goodname}`

   //code

    haaldataop(`/character?name=${goodname}`).then(data=>{
        let Char = data.docs[0];
        Displayinfo(Char);
    });
    


    //functies

    function Displayinfo(Char){
        const info=['birth', 'death', 'gender', 'hair', 'height', 'race', 'realm', 'spouse']
        const lijst= document.getElementById('lijst');
        lijst.textContent=null;
        let counter= 0;
        info.forEach(element=>{
        const value= Char[element] !==null ?Char[element] :"unknown" ;
        const listitem=document.createElement('li');
        listitem.textContent= info[counter] + ":"+" "+value;
        lijst.appendChild(listitem);
        counter++

        });
    }
    async function haaldataop(ext){
        const resp= await fetch(`${url}/${ext}`,{
            headers:{
            'Authorization': `Bearer ${api}`
            }
        });
        const data=await resp.json();
        return data;
    }
    
