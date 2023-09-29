const regi=document.querySelector("#regi");
const bir=document.querySelector(".bir");
const ikki=document.querySelector("#ikki");
const is=document.querySelector("#ister");  
const login=document.querySelector("#login");
const input1=document.getElementsByName("input1")
const input2=document.getElementsByName("input2")
console.log(input1);
console.log(input2);
const logi=document.querySelector(".logii")
regi.addEventListener("click",()=>{
    confirm("sizga ogohlantirish yuborildi");
    
});
is.addEventListener("click",()=>{
    is.style.borderBottom="3px solid blue";
    login.style.borderBottom="0px solid red";
    ikki.style.display="none";
     bir.style.display="block";
})
login.addEventListener("click",()=>{
    login.style.borderBottom="3px solid blue";
    is.style.borderBottom="0px solid red";
    bir.style.display="none";
    ikki.style.display="block";
})

function sayHello() {
    var matn = document.querySelector("#input1").value;
    var matn2 = document.querySelector("#input2").value;
    if (matn === "John" && matn2 === "John_smit") {
       console.log(true);
    } else {
       console.log(false);
    }
  }



