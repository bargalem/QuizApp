
let passnm=localStorage.getItem('first-name');

console.log(passnm);
  document.getElementById("namespn").textContent=passnm;


 

  
  let gettime1=localStorage.getItem('get-time');
console.log(gettime1)

  document.getElementById("time").textContent=gettime1;





  let totalattempt=localStorage.getItem('TolalAttempt');
  console.log(totalattempt);
  document.getElementById("quesAttempt").textContent=totalattempt;




  let totalascore1=localStorage.getItem('Totalscore');
  console.log(totalascore1);
  document.getElementById("correctans").textContent=totalascore1;

  
  let percentage1=localStorage.getItem('avg');
  console.log(percentage1);
  document.getElementById("percentge").textContent=percentage1;