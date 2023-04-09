let Entername=document.getElementById("EnterName");
let form=document.getElementById("inputfield");


 form.addEventListener('submit',function(e){
 //e.preventDefault();
 let nmvalue=Entername.value;
 localStorage.setItem('first-name',nmvalue);
 window.location.href='../Quies App/result/result.html';

 }) 