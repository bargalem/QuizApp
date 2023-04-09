const QuizOB2=[
    {
       Question:"1.The full form of CSS :-",
         a:"CSS is a style sheet language",
         b:"CSS is designed to separate the presentation and content, including layout, colors, and fonts",
         c:"CSS is the language used to style the HTML documents",
         d:"All of the mentioned",
         ans:"ans4"

},
{
    Question: "2.Which of the following CSS selectors are used to specify a group of elements?",
    a:"tag",
    b:"id",
    c:"class",
    d:"both class and tag",
    ans:"ans3"  


},
{
    Question: "3.Which of the following has introduced text, list, box, margin, border, color, and background properties?",
    a: "HTML",
    b: "PHP",
    c: "CSS",
    d: "Ajax",
    ans: "ans3",  

},{

    Question: "4.Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    a: "id",
    b: "class",
    c: "tag",
    d: "both class and tag",
    ans: "ans1", 

},{
Question:"5.Which of the following CSS property is used to make the text bold?",
a: "text-decoration: bold",
b: "font-weight: bold",
c: "font-style: bold",
d: "text-align: bold",
ans:"ans3", 

},{

    Question:"6.Which of the following CSS style property is used to specify an italic text?",
    
    a: "style",
    b: "font",
    c: "font-style",
    d: "@font-face",
    ans:"ans3", 

},{

    Question:"7.Which of the following CSS property sets the font size of text?",
    
    a: "font-size",
    b: "text-size",
    c: "text",
    d: "size",
    ans:"ans1", 

},
{

    Question:"8.Which of the following CSS property is used to set the color of the text?",
    
    a: "text-decoration",
    b: "pallet",
    c: "color",
    d: "colour",
    ans:"ans3", 
},
{

    Question:"9.Which of the following CSS Property controls how an element is positioned?",
    
    a: "static",
    b: "position",
    c: "fix",
    d: "set",
    ans:"ans2", 

    
},{
    Question:"10.Which of the following property is used to align the text in a table?",
    
    a: "text=align",
    b: "align",
    c: "text",
    d: "none of the mentioneda",
    ans:"ans1", 
}

];
let result2={};
result2.totalques=QuizOB2.length;





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
    let List=QuizOB2[QuesCount];
   
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
function funnm2(){
{
    let checkAns=getCheckAns();
    console.log(checkAns);
if(checkAns==QuizOB2[QuesCount].ans){
score++;
};
QuesCount++;
disableBtn();
if(QuesCount<QuizOB2.length){
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
if(QuesCount<=QuizOB2.length){
    fildsetDiv.innerHTML=`${QuesCount}/${QuizOB2.length}`
    let AttemptQues=fildsetDiv.innerHTML;
console.log("attempt ques",AttemptQues)
    let totalattempt=localStorage.setItem('TolalAttempt',AttemptQues);

}




// set time.....function.......
setInterval(function(){
    time++;
if(time<5000 && QuesCount<QuizOB2.length){
    
     timeDiv.innerHTML=time;
 }
 
 else{
    timeup.innerText="Opps!...TIME UP"; 
  clearInterval(time);
  disableBtn();
  markdiv.innerHTML=`score:${score}/${QuizOB2.length}
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
    
ques.innerText=result2.totalques;


}

