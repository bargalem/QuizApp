const QuizOB=[
    {
       Question:"1.What is JavaScript?",
         a:"JavaScript is a scripting language used to make the website interactive",
         b:"JavaScript is an assembly language used to make the website interactive",
         c:"JavaScript is a compiled language used to make the website interactive",
         d:"None of the mentioned",
         ans:"ans1",

    },
{
    Question: "2.Arrays in JavaScript are defined by which of the following statements?",
    a:"It is an ordered list of objects",
    b:"It is an ordered list of values",
    c:"It is an ordered list of string",
    d:"It is an ordered list of functions",
    ans:"ans2", 
    
},
{
    Question: "3.Which of the following is correct about JavaScript?",
    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    ans: "ans1",  

    
},{

    Question: `4.What will be the output of the following JavaScript code?

    var quiz=[1,2,3];  
    var js=[6,7,8];  
    var result=quiz.concat(js);  
    document.writeln(result);-`,
    a: "123",
    b: "1,2,3",
    c: "1, 2, 3, 6, 7, 8",
    d: "error",
    ans: "ans3", 


 

},{
Question:`5.What is the prototype represents in the following JavaScript code snippet?

function javascript() {};`,
a: " Not valid",
b: "Prototype of a function",
c: "Function javascript",
d: "A custom constructor",
ans:"ans2", 

},{

    Question:"6.Which of the following is not a framework?",
    
    a: "JavaScript .NET",
    b: "JavaScript",
    c: "Cocoa JS",
    d: "jQuery",
    ans:"ans2", 
    
},{

    Question:"7.Which of the following is the property that is triggered in response to JS errors?",
    
    a: "onclick",
    b: "onerror",
    c: "onmessage",
    d: "onexception",
    ans:"ans2", 

},
{

    Question:`8.What will be the output of the following JavaScript code?
    p id="demo"/p
    script
    var js = 10;
    js *= 5;
    document.getElementById("demo").innerHTML = js;`,
    
    a: "Error",
    b: "5",
    c: "10",
    d: "50",
    ans:"ans4", 

},
{

    Question:`9.What will be the output of the following JavaScript code snippet?

    // JavaScript Equalto Operators
    function equalto()
    {
        int num=10;
        if(num==="10")
            return true;
        else
            return false;
    }`,
    
    a: "compilation error",
    b: "true",
    c: "false",
    d: "runtime error",
    ans:"ans3", 
    
},{
    Question:`10.Will the following JavaScript code work?

    var js = (function(x) {return x*x;}(10));`,
    
    a: "Exception will be thrown",
    b: "Memory leak",
    c: "Errorp",
    d: "Yes, perfectlya",
    ans:"ans4", 

}

];
let result1={};
result1.totalques=QuizOB.length;





let question=document.querySelector("#quesid");
let option1=document.querySelector("#opt1");
 let option2=document.querySelector("#opt2");
 let option3=document.querySelector("#opt3");
 let option4=document.querySelector("#opt4");

let nextQuesBtn=document.querySelector("#nextQuesBtn");

let ansAll=document.querySelectorAll(".selectAns");
console.log(ansAll);

let markdiv=document.querySelector("#scoreDiv");

let fildsetDiv=document.querySelector("#fieldsetDiv");

let timeDiv=document.querySelector("#timeDiv");
let timeup=document.getElementById("TimeUp");



//load question..........
let QuesCount=0;
let score=0;
let time=0;


let loadQues=()=>{
    let List=QuizOB[QuesCount];
   
    question.innerHTML=List.Question;

    option1.innerHTML=List.a;
    option2.innerHTML=List.b
    option3.innerHTML=List.c;
    option4.innerHTML=List.d;

    
}

//loadQues();
//check answer is correct or not.........
let getCheckAns=()=>{ 
    let answer;
    ansAll.forEach((currentAns)=>{
     if(currentAns.checked){
        answer=currentAns.id;

     }
    })
    return answer;


    };
    let disableBtn=()=>{
        ansAll.forEach((currentAns)=>currentAns.checked=false);  
          
    }




//check answer object question and count score  
function funnm(){
{
    let checkAns=getCheckAns();
    console.log(checkAns);
if(checkAns==QuizOB[QuesCount].ans){
score++;
};
QuesCount++;
disableBtn();
if(QuesCount<QuizOB.length){
    loadQues();
}else{

    markdiv.innerHTML=`score:${score}`
    //<button class="btn"onclick="location.reload()";>refresh</button>`
    let tscore=markdiv.innerHTML;
    console.log("total score:",tscore)
     let totalascore=localStorage.setItem('Totalscore',tscore);
     let per=`${score*10}`
console.log("parentage",per);
let percentage=localStorage.setItem('avg',per); 
}
 


//set attempt question......
if(QuesCount<=QuizOB.length){
    fildsetDiv.innerHTML=`${QuesCount}/${QuizOB.length}`
    let AttemptQues=fildsetDiv.innerHTML;
console.log("attempt ques",AttemptQues)
    let totalattempt=localStorage.setItem('TolalAttempt',AttemptQues);

}




// set time.....function.......
setInterval(function(){
    time++;
if(time<5000 && QuesCount<QuizOB.length){
    
     timeDiv.innerHTML=time;
 }
 
 else{
    timeup.innerText="Opps!...TIME UP"; 
  clearInterval(time);
  disableBtn();
  markdiv.innerHTML=`score:${score}/${QuizOB.length}
    <button class="btn"onclick="location.reload()">refresh</button>`
}
},5000)
console.log("time is",time)
let gettime=localStorage.setItem('get-time',time);
}
}




////Result..................


let ques=document.getElementById("ques");

function showResult(){
    
ques.innerText=result1.totalques;


}

