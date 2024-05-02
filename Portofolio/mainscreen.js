const url= 'https://the-one-api.dev/v2'
const api= 'zY4rLuvWizvWKF6bCOXc'
window.onload=function() {
    
    alert('welkom');
    
    };
    let goodname=sessionStorage.getItem("naam");
    document.getElementById('welkom').innerHTML=`Welkom ${goodname}`

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
       haaldataop('book').then(data=>{
    console.log(data);
     data.docs.forEach(element => {
        let extra=document.createElement('li');
        extra.textContent= element.name;
        document.getElementById('test').appendChild(extra);
        
     });
        console.log(data);
    })
    

  /* fetchdata().then(results=>{
        
array.forEach(element => {
    document.getElementById('test').appendChild('li');
});


    });*/