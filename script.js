var a=document.createElement("input")
a.setAttribute("type","text")
a.setAttribute("id","inp")
a.placeholder=("search name")


butt=document.createElement("button")
butt.setAttribute("id","but")
butt.innerHTML=("get")
butt.addEventListener("click",man)

lis=document.createElement("ol")
lis.setAttribute("id","order")

i=document.createElement("input")
i.setAttribute("type","text")
i.setAttribute("id","i")
i.addEventListener("keyup",fi)
i.placeholder=("find")

/*fil=document.createElement("button")
fil.setAttribute("id","fil")
fil.innerHTML=("filter")*/




document.body.append(a,butt,lis,i)


async function man()
{
    ent=document.getElementById("inp").value;
   // console.log(ent)
let m=await fetch(`https://api.nationalize.io/?name=${ent}`)
m1=await m.json();
//console.log(m1.country.length)

try{
    if(!m1.name ) throw e=("!PLEASE ENTER NAME")


    if(m1.name){
        m2=m1.country;
        for(let i=0;i<m2.length;i++)
        if(m2.length>=1)
        {
            var fin=document.createElement("li")
            //fin.innerHTML=(`Nationalize: ${(m2[i]["country_id"])} ` `Probability: ${m2[i]["probability"]//} `)
            fin.innerText=(`${(m2[i]["country_id"])} ${(m2[i]["probability"])}`)
            order.append(fin)
          //  iop=(`${(m2[i]["country_id"])} ${(m2[i]["probability"])}`)
           //po=(fin.innerText)
          // console.log(typeof(po))
           //console.log(typeofpo)
            //console.log(iop.split(" "))
        }
        if(m2.length==0){
            var fin=document.createElement("li")
           fin.innerHTML=(`No Nationalize & propability of name ${ent}`)
           fin.style.color=("red")
           fin.style.fontSize=("20px")
            order.append(fin)
        }  
}
}
catch (e){(order).append(e)}
}


io=document.getElementById("i")
function fi(){
    amm=document.querySelectorAll("li");
    //console.log(amm[0])
    for(let j=0;j<amm.length;j++)
    {
     kol=io.value.toUpperCase();
     if(amm[j].innerText.indexOf(kol)!=-1)
     {
         amm[j].style.display="block";
     }
   else{
    amm[j].style.display="none";
   }
}
}