function menuToggle(){
    let toggle = document.querySelector(".toggle");
    let menu = document.querySelector("nav");

    if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                toggle.removeChild();
            } else {
                menu.classList.add("active");
  }
}
//nav humburger

function burger(x) {
    x.classList.toggle("change");
  }
  
//slick slider
$(document).ready(function(){
    $('.your-class').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1
});
  });

//form processing

let formDB = {};
let formDB2 = {};


let form =document.querySelector("#header-form");
let inputName =document.querySelector("input#fname");

let form2 = document.querySelector("#join-form");
let fullName2 = document.querySelector("#fFullName");
let phone2 = document.querySelector("#fPhone");
let email2 = document.querySelector("#fEmail");



form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const nameValue = inputName.value;
   
    if(nameValue){
        formDB.tel = nameValue;
    }


    console.log(formDB);


    e.target.reset();
    document.location.href="thanks.html"

});


form2.addEventListener('submit',(e)=>{
    e.preventDefault();

    const fullName2Value = fullName2.value;
    const phone2Value = phone2.value;
    const email2Value = email2.value;
   
    if(fullName2Value){
        formDB2.fullName = fullName2Value;
    }

    if(phone2Value){
        formDB2.phone = phone2Value;
    }

    if(email2Value){
        formDB2.email  = email2Value;
    }

    document.location.href="thanks.html";
   
    e.target.reset();

    // console.log(JSON.stringify(formDB));
    // console.log(JSON.parse(JSON.stringify(formDB)));
});


function inputNumber(){
    inputName.value = "+380";
}
function clearValue(){
    inputName.value = " ";
}

window.addEventListener("load",(e)=>{
    inputName.value = '';
    e.target.reset();
  });