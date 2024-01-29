localStorage.setItem('name', 'NATIONAL MUSEUM OF QATAR PLUS SPECIAL EXHIBITIONS')

var nameGet = localStorage.getItem('name')
if (nameGet) {
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML=nameGet
    }
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
  if(id==1){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="NATIONAL MUSEUM OF QATAR PLUS SPECIAL EXHIBITIONS"
    }
    localStorage.setItem('name',"NATIONAL MUSEUM OF QATAR PLUS SPECIAL EXHIBITIONS")
  }
  if(id==2){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="3-2-1 Qatar Olympic and Sports Museum"
    }
    localStorage.setItem('name',"3-2-1 Qatar Olympic and Sports Museum")
  }
  if(id==3){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="Museum of Islamic Art"
    }
    localStorage.setItem('name',"Museum of Islamic Art")
  }
  if(id==4){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="Mathaf: Arab Museum of Modern Art"
    }
    localStorage.setItem('name',"Mathaf: Arab Museum of Modern Art")
  }
  if(id==5){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="Al Zubarah UNESCO World Heritage Site"
    }
    localStorage.setItem('name',"Al Zubarah UNESCO World Heritage Site")
  }
  if(id==6){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="Dan Flavin / Donald Judd: Doha"
    }
    localStorage.setItem('name',"Dan Flavin / Donald Judd: Doha")
  }
  if(id==7){
    for (let i = 0; i < document.querySelectorAll('#nameGet').length; i++) {
      document.querySelectorAll('#nameGet')[i].innerHTML="Dadu at EXPO 2023"
    }
    localStorage.setItem('name',"Dadu at EXPO 2023")
  }


}

var JSONdata=[]
var ID=1
var JSONprice=0

function DataPlus(key,price,name){
  if(document.querySelectorAll(".pilusminus")[key].value>0){
    for (let i = 0; i < document.querySelectorAll("#total_price_number").length; i++) {
      if(key==document.querySelectorAll("#total_price_number")[i].getAttribute("class")){
        document.querySelectorAll("#total_price_number")[i].innerHTML=document.querySelectorAll(".pilusminus")[key].value*1+1
      }
    }
    for (let i = 0; i < document.querySelectorAll("#total_price_number1").length; i++) {
      if(key==document.querySelectorAll("#total_price_number1")[i].getAttribute("class")){
        document.querySelectorAll("#total_price_number1")[i].innerHTML=document.querySelectorAll(".pilusminus")[key].value*1+1
      }
    }
  }else{
    document.querySelector("#total_price_text").innerHTML+=`<div id="total_big_text_div"><span class=${key} id="total_price_number">${document.querySelectorAll(".pilusminus")[key].value*1+1}</span> x <span id="total_price_text_name">${name}</span></div>`
    document.querySelector("#total_price_text1").innerHTML+=`<div id="total_big_text_div1"><span class=${key} id="total_price_number1">${document.querySelectorAll(".pilusminus")[key].value*1+1}</span> x <span id="total_price_text_name1">${name}</span></div>`
  
  }


  document.querySelectorAll("#price")[key].innerHTML="QAR "+(document.querySelectorAll(".pilusminus")[key].value*1+1)*price
  document.querySelectorAll(".pilusminus")[key].value=document.querySelectorAll(".pilusminus")[key].value*1+1
  var a=0
  for (let i = 0; i < document.querySelectorAll("#price").length; i++) {
    a+=document.querySelectorAll("#price")[i].innerHTML.slice(4)*1
  }
  JSONprice=a
  document.querySelector("#price_map").innerHTML="QAR "+a
  for (let i = 0; i < document.querySelectorAll("#totalprice").length; i++) {
    document.querySelectorAll("#totalprice")[i].innerHTML=`Total: QAR ${a}`
  }
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
          if(document.querySelectorAll(".pilusminus")[key].value==0){
            document.querySelectorAll("#total_big_text_div")[i].style="display:none;"   
          }
        }
    }
    for (let i = 0; i < document.querySelectorAll("#total_price_number1").length; i++) {
      if(key==document.querySelectorAll("#total_price_number1")[i].getAttribute("class")){
        document.querySelectorAll("#total_price_number1")[i].innerHTML=document.querySelectorAll(".pilusminus")[key].value
        if(document.querySelectorAll(".pilusminus")[key].value==0){
          document.querySelectorAll("#total_big_text_div1")[i].style="display:none;"   
        }
      }
  }
  }
  var a=0
  for (let i = 0; i < document.querySelectorAll("#price").length; i++) {
    a+=document.querySelectorAll("#price")[i].innerHTML.slice(4)*1
  }
  document.querySelector("#price_map").innerHTML="QAR "+a
  JSONprice=a
  for (let i = 0; i < document.querySelectorAll("#totalprice").length; i++) {
    document.querySelectorAll("#totalprice")[i].innerHTML=`Total: QAR ${a}`
  }
  if(a==0){
    document.querySelector("#price_map").innerHTML=a
    for (let i = 0; i < document.querySelectorAll("#totalprice").length; i++) {
      document.querySelectorAll("#totalprice")[i].innerHTML=""
    }
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
    sessionStorage.setItem("data",JSON.stringify(document.querySelector("#total_price_text").innerHTML))
    sessionStorage.setItem("data",JSON.stringify(document.querySelector("#total_price_text1").innerHTML))
    sessionStorage.setItem("dataprice",JSONprice)
    window.location="./pick-a-date.html"
  }
}


setTimeout(()=>{
  if(JSON.parse(sessionStorage.getItem("data"))){
    var a=JSON.parse(sessionStorage.getItem("data"))
    for (let i = 0; i < document.querySelectorAll("#data_amout").length; i++) {
      document.querySelectorAll("#data_amout")[i].innerHTML="Total: QAR "+sessionStorage.getItem("dataprice")      
    }
    for (let i = 0; i < document.querySelectorAll("#data_item_div").length; i++) {
      document.querySelectorAll("#data_item_div")[i].innerHTML=a
    }
  }
},1000)


$(document).ready(function() {
  var today = new Date();
  var oneMonthLater = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

  $('#datepicker').datepicker({
    minDate: today,
    maxDate: oneMonthLater,
    onSelect: function(dateText, inst) {
      var selectedDate = new Date(dateText);
      // Tanlangan kunni olish uchun
      var selectedDay = selectedDate.getDay();
      // Boshqa ishlar bilan tanlangan kun va sana bilan ishlash
      DataTime(selectedDay, selectedDate);
      $('#selected-date').text(selectedDate.toDateString());
    }
  });
});

const now = new Date();
const hours = now.getHours();


var datatime=[
  {
    time:9,
    timedate:"01/01/2024"
  },
  {
    time:10,
    timedate:"01/01/2024"
  },
  {
    time:11,
    timedate:"01/01/2024"
  },
  {
    time:12,
    timedate:"01/01/2024"
  },
  {
    time:13,
    timedate:"01/01/2024"
  },
  {
    time:14,
    timedate:"01/01/2024"
  },
  {
    time:15,
    timedate:"01/01/2024"
  },
  {
    time:16,
    timedate:"01/01/2024"
  },
  {
    time:17,
    timedate:"01/01/2024"
  },
  {
    time:18,
    timedate:"01/01/2024"
  },
  {
    time:13,
    timedate:"01/26/2024"
  },
  {
    time:14,
    timedate:"01/26/2024"
  },
  {
    time:15,
    timedate:"01/26/2024"
  },
  {
    time:16,
    timedate:"01/26/2024"
  },
  {
    time:17,
    timedate:"01/26/2024"
  },
  {
    time:18,
    timedate:"01/26/2024"
  },
]

var dataData = []
// var asd = datatime.map(item => dataData=item)



var dateEshik=false

function DataTime(date,vaqt){
  dateEshik=true
  sessionStorage.setItem("date",vaqt)
  document.querySelector("#data_time_div").innerHTML=""
  if(date==5){
    const Filter=datatime.filter(item=>item.time > hours)
    datatime.map((item,key)=>{
      document.querySelector("#data_time_big_div").style="display:block"
      document.querySelector("#data_time_div").innerHTML+=` <li onclick='OrqaFon(${key},"${vaqt}","${item.time}")' class="tickets-datetime-picker__time-item">
      <label
        id="data_time_soat"
        class="tickets-datetime-picker__time-item-label"
        >${item.time}.00${
          item.time > 12 ? 'am' : 'pm'
        }</label
      >
    </li>`
    })
    console.log(item.time);
    
  }
  if(date!=5){
    const Filter=datatime.filter(item=>item.time > hours)
    datatime.map((item,key)=>{
      document.querySelector("#data_time_big_div").style="display:block"
      document.querySelector("#data_time_div").innerHTML+=` <li onclick='OrqaFon(${key},"${vaqt}","${item.time}")' class="tickets-datetime-picker__time-item">
      <label
        id="data_time_soat"
        class="tickets-datetime-picker__time-item-label"
        >${item.time}.00${
          item.time > 12 ? 'am' : 'pm'
        }</label
      >
    </li>`

    })
  }
}


function OrqaFon(key,date,time){
if(time>hours){
  for (let i = 0; i < document.querySelectorAll("#data_time_soat").length; i++) {
    if(i==key){
        document.querySelectorAll("#data_time_soat")[i].style="background: #464646;color:white;"
    }else{
        document.querySelectorAll("#data_time_soat")[i].style="background: none;color:black;"
    }
  }
  sessionStorage.setItem("date",date)
  sessionStorage.setItem("datetime",time)
}
}


function NextStepTwo(){
  if(dateEshik){
    window.location = "./information.html"
  }
}


function NextStepThree(){
  if(document.querySelector("#id_first_name").value==""){
    document.querySelector("#id_first_name").style="border:1px solid red;"
    document.querySelector("#id_first_name_title").style="color:red;"
    document.querySelectorAll("#input_error")[0].innerHTML="Please enter your first name."
  }else{
    document.querySelector("#id_first_name_title").style="color:black;"
    document.querySelector("#id_first_name").style="border:1px solid black;"
    document.querySelectorAll("#input_error")[0].innerHTML=""
  }
  if(document.querySelector("#id_last_name").value==""){
    document.querySelector("#id_last_name").style="border:1px solid red;"
    document.querySelector("#id_last_name_title").style="color:red;"
    document.querySelectorAll("#input_error")[1].innerHTML="Please enter your last name."
  }else{
    document.querySelector("#id_last_name_title").style="color:black;"
    document.querySelector("#id_last_name").style="border:1px solid black;"
    document.querySelectorAll("#input_error")[1].innerHTML=""   
  }
  if(document.querySelector("#id_email").value==""){
    document.querySelector("#id_email").style="border:1px solid red;"
    document.querySelector("#id_email_title").style="color:red;"
    document.querySelectorAll("#input_error")[2].innerHTML="Please enter your email address."   
  }else{
    document.querySelector("#id_email").style="border:1px solid black;"
    document.querySelector("#id_email_title").style="color:black;"
    document.querySelectorAll("#input_error")[2].innerHTML=""   
  }
  if(!document.querySelector("#id_email").value.includes("@")){
    document.querySelector("#id_email").style="border:1px solid red;"
    document.querySelector("#id_email_title").style="color:red;"
    document.querySelectorAll("#input_error")[2].innerHTML="Please check your email address is correct. It must contain an @, a period (.) and have no spaces."   
  }else{
    document.querySelector("#id_email").style="border:1px solid black;"
    document.querySelector("#id_email_title").style="color:black;"
    document.querySelectorAll("#input_error")[2].innerHTML=""   
  }
  if(!document.querySelector("#id_accept_terms_accept_terms").checked){
    document.querySelectorAll(".option-field .option-field__icon")[2].style="color:red;"
    document.querySelector("#input_checked_text").style="color:red;"
    document.querySelectorAll("#input_error")[3].innerHTML="Please accept our Terms and Conditions."   
  }else{
    document.querySelectorAll(".option-field .option-field__icon")[2].style="color:black;"
    document.querySelector("#input_checked_text").style="color:black;"
    document.querySelectorAll("#input_error")[3].innerHTML=""   

  }

  
  if(document.querySelector("#id_first_name").value!="" && document.querySelector("#id_last_name").value!="" && document.querySelector("#id_email").value!="" && document.querySelector("#id_accept_terms_accept_terms").checked && document.querySelector("#id_email").value.includes("@")){
    sessionStorage.setItem("firstname",document.querySelector("#id_first_name").value)
    sessionStorage.setItem("lastname",document.querySelector("#id_last_name").value)
    sessionStorage.setItem("email",document.querySelector("#id_email").value)
    sessionStorage.setItem("phone",document.querySelector("#id_national_number").value+" "+document.querySelector("#id_phone").value)

    window.location="./reviews.html"
  }
}

function NextStepFour(){
  if(document.querySelector("#payment-methods-creditcard-").checked){
    window.location="/securitypayment.html"
  }
}




