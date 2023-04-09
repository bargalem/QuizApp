const QuizOB=[
    {
       Question:"1.Who invented C++?",
         a:"Dennis Ritchie",
         b:"Ken Thompson",
         c:"Brian Kernighan",
         d:"Bjarne Stroustrup",
         ans:"ans4",

},
{
    Question: "2.What is C++?",
    a:"C++ is an object oriented programming language",
    b:"C++ is a procedural programming language",
    c:"C++ supports both procedural and object oriented programming language",
    d:"C++ is a functional programming language",
    ans:"ans3", 

},
{
    Question: "3.Which of the following is the correct syntax of including a user defined header files in C++?",
    a: "#include [userdefined]",
    b: "#include “userdefined”",
    c: "#include <userdefined.h>",
    d: "#include <userdefined>",
    ans: "ans2",  

},{

    Question: "4.Which of the following is used for comments in C++?",
    a: "/* comment */",
    b: "// comment */",
    c: "// comment",
    d: "both // comment or /* comment */",
    ans: "ans4", 

},{
Question:"5.Which of the following user-defined header file extension used in c++?",
a: "hg",
b: "cpp",
c: "h",
d: "hf",
ans:"ans3", 

},{

    Question:"6. Which of the following is a correct identifier in C++?",
    
    a: "VAR_1234",
    b: "$var_name",
    c: "7VARNAME",
    d: "7var_name",
    ans:"ans1", 

},{

    Question:"7. Which of the following is not a type of Constructor in C++?",
    
    a: "Default constructor",
    b: "Parameterized constructor",
    c: "Copy constructor",
    d: "Friend constructor",
    ans:"ans4", 
},
{

    Question:"8.Which of the following approach is used by C++?",
    
    a: "Left-right",
    b: "Right-left",
    c: "Bottom-up",
    d: "Top-down",
    ans:"ans3", 
},
{

    Question:"9.What is virtual inheritance in C++?",
    
    a: "C++ technique to enhance multiple inheritance",
    b: "C++ technique to ensure that a private member of the base class can be accessed somehow",
    c: "C++ technique to avoid multiple inheritances of classes",
    d: "C++ technique to avoid multiple copies of the base class into children/derived class",
    ans:"ans2", 
    
},{
    Question:`What happens if the following C++ statement is compiled and executed?

    int *ptr = NULL
    delete ptr`,
    
    a: "The program is not semantically correct",
    b: "The program is compiled and executed successfully",
    c: "The program gives a compile-time error",
    d: "The program compiled successfully but throws an error during run-time",
    ans:"ans2", 
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



