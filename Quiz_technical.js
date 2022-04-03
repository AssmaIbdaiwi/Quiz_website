

document.getElementById('Finish').style.display = 'none';

function btnload() {

  document.getElementById('bigcont').style.display = 'block';
  document.getElementById('cont').style.display = 'none';
  document.getElementById('bobbles').style.display = 'none';
  document.getElementById('bbls').style.display = 'none';
}


//////**********************sun moon**************************** */

document.querySelector(".dark").onclick = function icon( ) {
  let moon = document.querySelector('#moon');
  let sun = document.querySelector('#sun');
  let b1 = document.querySelector('.border1');
  let b2 = document.querySelector('.cir1')
  b2.classList.toggle('active');
  b1.classList.toggle('active');
  moon.classList.toggle('active');
  sun.classList.toggle('active');

}




// *********************array of object********

const Quiz = [{
  "Q": "What is the correct syntax for referring to an external script called 'xxx.js'?",
  "A1": "< script src='xxx.js'>", //correct
  "A2": "< script href='xxx.js'>",
  "A3": "< script name='xxx.js'>",
  "A4": "< script value='xxx.js'>",
  "Yes": " Correct answer",
  "No": " Wrong answer "
},


{
  "Q": "How do you write 'Hello World' in an alert box?",
  "A1": "msg('Hello World');",
  "A2": "msgBox('Hello World');",
  "A3": "alertBox('Hello World');",
  "A4": "alert('Hello World');",  //correct
  "Yes": " Correct answer",
  "No": " Wrong answer "

},

{
  "Q": "How do you create a function in JavaScript?",
  "A1": "function myFunction()",  //correct
  "A2": "function: myFunction()",
  "A3": "function= myFunction()",
  "A4": "function myFunction{}",
  "Yes": " Correct answer",
  "No": " Wrong answer "
},
{
  "Q": " How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
  "A1": "if(i < > 5)",
  "A2": "if i=! 5 then",
  "A3": "if i <> 5",
  "A4": "if(i!=5)",  //correct
  "Yes": " Correct answer",
  "No": " Wrong answer "
},
{
  "Q": "What is the correct HTML for adding a background color?",
  "A1": "< cody bg='yellow' >",
  "A2": "< background>; yellow </background >", 
  "A3": "< body style ='background-color:yeloow;' >",  //correct
  "A4": "< background:yellow >",
  "Yes": " Correct answer",
  "No": " Wrong answer "
},
{
  "Q": "How can you make a numbered list?",
  "A1": "< ul >",
  "A2": "< dl >",
  "A3": "< ol >", ////correct
  "A4": "< list >",
  "Yes": " Correct answer",
  "No": " Wrong answer "
},
{
  "Q": "What is the correct HTML for making a checkbox?",
  "A1": "< input type='checkbox' >",  //correct
  "A2": "< checkbox >",
  "A3": "< input type='check'>",
  "A4": "< check >",
  "Yes": " Correct answer",
  "No": " Wrong answer "
},

{
  "Q": "Where in an HTML document is the correct place to refer to an external style sheet?",
  "A1": "In the body",
  "A2": "At the end of the document",
  "A3": "In the < head > section", //correct
  "A4": "In the style tag",
  "Yes": " Correct answer",
  "No": " Wrong answer "
},
{
  "Q": "How do you select elements with class name 'test'?",
  "A1": "#test",
  "A2": ".test",   //correct
  "A3": "test",
  "A4": "*test",
  " Yes": " Correct answer",
  "No": " Wrong answer "
},
{
  "Q": "What does CSS stand for?",
  "A1": "Cascading Style Sheet",  //correct
  "A2": "Creative Style Sheets",
  "A3": "Colorful Style Sheets",
  "A4": "Computer Style Sheets",
  "Yes": "Correct answer",
  "No": " Wrong answer "
}
]




// ************************   end arrey of obj*********************************




// ****************************stsrt btn********************************
function btnload() {

  document.getElementById('bigcont').style.display = 'block';
  document.getElementById('cont').style.display = 'none';
  document.getElementById('bbls').style.display = 'none';
}


///////////////////////////////next button//////////////////////////////////////////////



let val = 0;
document.getElementById("nxt").onclick = function nxt() {
  val++;
  let m=val+1
if(val<Quiz.length){




  document.getElementById('Q').innerHTML = 'Q ' + m + '/10';
  document.getElementById('Question').innerHTML = Quiz[val].Q
  document.getElementById('btn1').innerHTML = Quiz[val].A1
  document.getElementById('btn2').innerHTML = Quiz[val].A2
  document.getElementById('btn3').innerHTML = Quiz[val].A3
  document.getElementById('btn4').innerHTML=Quiz[val].A4
} else{
document.getElementById('Finish').style.display = 'block';
document.getElementById('nxt').style.display = 'none';

}


}
//*******************previus btn********************************* */

document.getElementById("pre").onclick = function nxt() {
  val--;
  let m=val+1
if(val<Quiz.length && val >=0){

  document.getElementById('Q').innerHTML = 'Q ' + m + '/10';
  document.getElementById('Question').innerHTML = Quiz[val].Q
  document.getElementById('btn1').innerHTML = Quiz[val].A1
  document.getElementById('btn2').innerHTML = Quiz[val].A2
  document.getElementById('btn3').innerHTML = Quiz[val].A3
  document.getElementById('btn4').innerHTML=Quiz[val].A4
}else{
  document.getElementById('Finish').style.display = 'none';
  document.getElementById('nxt').style.display = 'block';
  }
  
  }



//******************************buttons*****************

function btn1() {


  document.getElementById('btn1').style.background = '#ec8657b9';
  document.getElementById('btn2').style.background = '#0d83ae4d';
  document.getElementById('btn3').style.background = '#0d83ae4d';
  document.getElementById('btn4').style.background = '#0d83ae4d';
  

}

 function btn2() {
  document.getElementById('btn2').style.background = '#ec8657b9';
  document.getElementById('btn1').style.background = '#0d83ae4d';
  document.getElementById('btn3').style.background = '#0d83ae4d';
  document.getElementById('btn4').style.background = '#0d83ae4d';
}
function btn3() {
  document.getElementById('btn3').style.background = '#ec8657b9';
  document.getElementById('btn1').style.background = '#0d83ae4d';
  document.getElementById('btn2').style.background = '#0d83ae4d';
  document.getElementById('btn4').style.background = '#0d83ae4d';

}
function btn4() {
  document.getElementById('btn4').style.background = '#ec8657b9';
  document.getElementById('btn1').style.background = '#0d83ae4d';
  document.getElementById('btn2').style.background = '#0d83ae4d';
  document.getElementById('btn3').style.background = '#0d83ae4d';

  }
  ///////////////////local storage////////////////////////


  localStorage.setItem ('Question1',Quiz[0].Q) ;
  localStorage.setItem ('Q1 Answer1',Quiz[0].A1);
  localStorage.setItem ('Q1 Answer2',Quiz[0].A2);
  localStorage.setItem ('Q1 Answer3', Quiz[0].A3);
  localStorage.setItem ('Q1 Answer4',Quiz[0].A4);
  localStorage.setItem ('Q1 Correct answer', Quiz[0].A1);
  //
  localStorage.setItem ('Question2',Quiz[1].Q) ;
  localStorage.setItem ('Q2 Answer1',Quiz[1].A1);
  localStorage.setItem ('Q2 Answer2',Quiz[1].A2);
  localStorage.setItem ('Q2 Answer3', Quiz[1].A3);
  localStorage.setItem ('Q2 Answer4',Quiz[1].A4);
  localStorage.setItem ('Q2 Correct answer', Quiz[1].A4);
//
localStorage.setItem ('Question3',Quiz[2].Q) ;
localStorage.setItem ('Q3 Answer1',Quiz[2].A1);
localStorage.setItem ('Q3 Answer2',Quiz[2].A2);
localStorage.setItem ('Q3 Answer3', Quiz[2].A3);
localStorage.setItem ('Q3 Answer4',Quiz[2].A4);
localStorage.setItem ('Q3 Correct answer', Quiz[2].A1);
//
localStorage.setItem ('Question4',Quiz[3].Q) ;
localStorage.setItem ('Q4 Answer1',Quiz[3].A1);
localStorage.setItem ('Q4 Answer2',Quiz[3].A2);
localStorage.setItem ('Q4 Answer3', Quiz[3].A3);
localStorage.setItem ('Q4 Answer4',Quiz[3].A4); 
localStorage.setItem ('Q4 Correct answer', Quiz[3].A4);
//
localStorage.setItem ('Question5',Quiz[4].Q) ;
localStorage.setItem ('Q5 Answer1',Quiz[4].A1);
localStorage.setItem ('Q5 Answer2',Quiz[4].A2);
localStorage.setItem ('Q5 Answer3', Quiz[4].A3);
localStorage.setItem ('Q5 Answer4',Quiz[4].A4);
localStorage.setItem ('Q5 Correct answer', Quiz[4].A3);
//
localStorage.setItem ('Question6',Quiz[5].Q) ;
localStorage.setItem ('Q6 Answer1',Quiz[5].A1);
localStorage.setItem ('Q6 Answer2',Quiz[5].A2);
localStorage.setItem ('Q6 Answer3', Quiz[5].A3);
localStorage.setItem ('Q6 Answer4',Quiz[5].A4);
localStorage.setItem ('Q6 Correct answer', Quiz[5].A3);
//
localStorage.setItem ('Question7',Quiz[6].Q) ;
localStorage.setItem ('Q7 Answer1',Quiz[6].A1);
localStorage.setItem ('Q7 Answer2',Quiz[6].A2);
localStorage.setItem ('Q7 Answer3', Quiz[6].A3);
localStorage.setItem ('Q7 Answer4',Quiz[6].A4);
localStorage.setItem ('Q7 Correct answer', Quiz[6].A1);
//
localStorage.setItem ('Question8',Quiz[7].Q) ;
localStorage.setItem ('Q8 Answer1',Quiz[7].A1);
localStorage.setItem ('Q8 Answer2',Quiz[7].A2);
localStorage.setItem ('Q8 Answer3', Quiz[7].A3);
localStorage.setItem ('Q8 Answer4',Quiz[7].A4);
localStorage.setItem ('Q8 Correct answer', Quiz[7].A3);
//
localStorage.setItem ('Question9',Quiz[8].Q) ;
localStorage.setItem ('Q9 Answer1',Quiz[8].A1);
localStorage.setItem ('Q9 Answer2',Quiz[8].A2);
localStorage.setItem ('Q9 Answer3', Quiz[8].A3);
localStorage.setItem ('Q9 Answer4',Quiz[8].A4);
localStorage.setItem ('Q9 Correct answer', Quiz[8].A2);
//
localStorage.setItem ('Question10',Quiz[9].Q) ;
localStorage.setItem ('Q10 Answer1',Quiz[9].A1);
localStorage.setItem ('Q10 Answer2',Quiz[9].A2);
localStorage.setItem ('Q10 Answer3', Quiz[9].A3);
localStorage.setItem ('Q10 Answer4',Quiz[9].A4);
localStorage.setItem ('Q10 Correct answer', Quiz[9].A1);