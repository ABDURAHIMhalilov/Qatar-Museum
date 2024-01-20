var nameGet = localStorage.getItem('name')
if (nameGet) {
    document.querySelector('#nameGet').innerHTML=nameGet
    console.log(nameGet);
}else {
    console.log('no');
}


var data=[
  {
    category:1,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:1,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:1,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:1,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
  {
    category:1,
    title:"Student Resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:1,
    title:"Student Non-resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:2,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:2,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:2,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
  {
    category:2,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:2,
    title:"Student Resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:2,
    title:"Student Non-resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:3,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:3,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:3,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:3,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
  {
    category:3,
    title:"Student Resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:3,
    title:"Student Non-resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:4,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:4,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:4,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:4,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
  {
    category:4,
    title:"Student Resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:4,
    title:"Student Non-resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:5,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:5,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:5,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:5,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
  {
    category:5,
    title:"Student Resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:5,
    title:"Student Non-resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:6,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:6,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:6,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:6,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
  {
    category:6,
    title:"Student Resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:6,
    title:"Student Non-resident of Qatar",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:7,
    title:"Adult Resident of Qatar",
    text:"Ticket holders must present an accepted and valid ID for entry.",
    sale:50,
    max:24,
  },
  {
    category:7,
    title:"Adult Non-resident of Qatar",
    text:"",
    sale:50,
    max:24,
  },
  {
    category:7,
    title:"Child (Age 16 and under)",
    text:"",
    sale:25,
    max:24,
  },
  {
    category:7,
    title:"One Pass Holder",
    text:"You will need to validate your One Pass in the next step.",
    sale:50,
    max:1,
  },
]


setTimeout(() => {
  const Filter=data.filter(item=>item.category==1)
  Filter.map((item,key)=>{
    document.querySelector("#data_map").innerHTML+=`<tr>
    <td class="tickets-table__type">
        <span id="tickets_title" class="tickets-table__title-span">${item.title}</span>
        <span class="tickets-table__description-span">${item.text}</span>
        <span class="tickets-table__price-span">QAR ${item.sale}</span>
    </td>
    <td class="tickets-table__quantity">
        <input  class="pilusminus" value="0" disabled>
    </td>
    <td class="tickets-table__buttons">
        <div class="tickets-table__buttons-wrapper">
            <button onclick='DataPlus(${key},${item.sale},"${item.title}")' class="tickets-table__button tickets-table__button--plus"></button>
            <button onclick='DataMinus(${key},${item.sale},"${item.title}")' class="tickets-table__button tickets-table__button--minus"></button>
        </div>
    </td>
    <td id="price" class="tickets-table__subtotal">0</td>
</tr>`
  })
}, 1000);

function CategoryPush(id){
  document.querySelector("#data_map").innerHTML=""
  const Filter=data.filter(item=>item.category==id)
  Filter.map((item,key)=>{
    document.querySelector("#data_map").innerHTML+=`<tr>
    <td class="tickets-table__type">
        <span id="tickets_title" class="tickets-table__title-span">${item.title}</span>
        <span class="tickets-table__description-span">${item.text}</span>
        <span class="tickets-table__price-span">QAR ${item.sale}</span>
    </td>
    <td class="tickets-table__quantity">
        <input class="pilusminus" value="0" disabled>
    </td>
    <td class="tickets-table__buttons">
        <div class="tickets-table__buttons-wrapper">
            <button onclick='DataPlus(${key},${item.sale},"${item.title}")' class="tickets-table__button tickets-table__button--plus"></button>
            <button onclick='DataMinus(${key},${item.sale},"${item.title}")' class="tickets-table__button tickets-table__button--minus"></button>
        </div>
    </td>
    <td id="price" class="tickets-table__subtotal">0</td>
    </tr>`
  })
  document.querySelector("#total_price_text").innerHTML=""
  document.querySelector("#totalprice").innerHTML=""
  document.querySelector("#price_map").innerHTML=0


}

var JSON=[]
var ID=1

function DataPlus(key,price,name){
  if(document.querySelectorAll(".pilusminus")[key].value>0){
    for (let i = 0; i < document.querySelectorAll("#total_price_number").length; i++) {
      if(key==document.querySelectorAll("#total_price_number")[i].getAttribute("class")){
        document.querySelectorAll("#total_price_number")[i].innerHTML=document.querySelectorAll(".pilusminus")[key].value*1+1
        var a={
          id:ID,
          count:document.querySelectorAll(".pilusminus")[key].value*1+1,
          title:name,
        }
        JSON.splice(i,1,a)
        ID+=1
      }
    }
  }else{
    document.querySelector("#total_price_text").innerHTML+=`<div id="total_big_text_div"><span class=${key} id="total_price_number">${document.querySelectorAll(".pilusminus")[key].value*1+1}</span> x <span id="total_price_text">${name}</span></div>`
    var a={
      id:ID,
      count:document.querySelectorAll(".pilusminus")[key].value*1+1,
      title:name,
    }
    JSON.push(a)
    ID+=1
  }


  document.querySelectorAll("#price")[key].innerHTML="QAR "+(document.querySelectorAll(".pilusminus")[key].value*1+1)*price
  document.querySelectorAll(".pilusminus")[key].value=document.querySelectorAll(".pilusminus")[key].value*1+1
  var a=0
  for (let i = 0; i < document.querySelectorAll("#price").length; i++) {
    a+=document.querySelectorAll("#price")[i].innerHTML.slice(4)*1
  }
  document.querySelector("#price_map").innerHTML="QAR "+a
  document.querySelector("#totalprice").innerHTML=`Total: QAR ${a}`
  console.log(JSON,"helo");
}
function DataMinus(key,price,name){
  if(document.querySelectorAll(".pilusminus")[key].value>0){
    document.querySelectorAll(".pilusminus")[key].value=document.querySelectorAll(".pilusminus")[key].value*1-1
    document.querySelectorAll("#price")[key].innerHTML="QAR "+(document.querySelectorAll(".pilusminus")[key].value)*price
    if(document.querySelectorAll(".pilusminus")[key].value==0){
    document.querySelectorAll("#price")[key].innerHTML=(document.querySelectorAll(".pilusminus")[key].value)*price
    }
    for (let i = 0; i < document.querySelectorAll("#total_price_number").length; i++) {
        if(key==document.querySelectorAll("#total_price_number")[i].getAttribute("class")){
          document.querySelectorAll("#total_price_number")[i].innerHTML=document.querySelectorAll(".pilusminus")[key].value
          var a={
            id:ID,
            count:document.querySelectorAll(".pilusminus")[key].value*1,
            title:name,
          }
          JSON.splice(i,1,a)
          ID+=1
          if(document.querySelectorAll(".pilusminus")[key].value==0){
            JSON.splice(i,1)
            document.querySelectorAll("#total_big_text_div")[i].style="display:none;"   
          }
        }
    }
  }
  var a=0
  for (let i = 0; i < document.querySelectorAll("#price").length; i++) {
    a+=document.querySelectorAll("#price")[i].innerHTML.slice(4)*1
  }
  document.querySelector("#price_map").innerHTML="QAR "+a
  document.querySelector("#totalprice").innerHTML=`Total: QAR ${a}`
  if(a==0){
    document.querySelector("#price_map").innerHTML=a
    document.querySelector("#totalprice").innerHTML=""
  }
}

function NextStep(){
  var a=false
  for (let i = 0; i < document.querySelectorAll(".pilusminus").length; i++) {
    if(document.querySelectorAll(".pilusminus")[i].value!=0){
      a=true        
    }
  }
  if(a){
    window.location="./pick-a-date.html"
    localStorage.setItem("data",JSON)
  }
}



  