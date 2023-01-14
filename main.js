

let url="https://api.publicapis.org/entries"



fetch(url)
  .then(response => {
    //handle response            
    return response.json();
  })
  .then(data => {
    //handle data
    // console.log(data);
    info=data.entries
   
  })
  .then(()=>{
    info.map((elem,i)=>{
let div=document.getElementById("infocontainer");
let apiname=elem.API;
let desc=elem.Description
let link=elem.Link

let td0=document.createElement("td")
td0.innerText=i
let tr=document.createElement("tr")
let td1=document.createElement("td")
td1.innerHTML=apiname
let td2=document.createElement("td")
td2.innerHTML=desc
let td3=document.createElement("td")
let anch=document.createElement("a")
anch.href=link
anch.textContent="Show API"
anch.target="_blank"
td3.append(anch)

tr.append(td0,td1,td2,td3)
div.append(tr)
console.log(link)
    })
  })
  .catch(error => {
    //handle error
    console.log(error)
  })

