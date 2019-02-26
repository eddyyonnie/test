//Business Logic
$(document).ready(function(){
  $(".choose").submit(function(event){
    event.preventDefault();
    var I= parseInt($("input:radio[name=1]:checked").val());
    var II= parseInt($("input:radio[name=2]:checked").val());
    var III= parseInt($("input:radio[name=3]:checked").val());
    var IV= parseInt($("input:radio[name=4]:checked").val());
    var V= parseInt($("input:radio[name=5]:checked").val());
    var add= I+II+III+IV+V;
 if(add>=60){
   document.getElementById("return").innerHTML="Perfect score Mind star.You might just be the next BILL GATES."
   alert("scroll down to get feedback")
   prompt("What's the name of our champion today.")
 }
 else if(add<60 && add>=40){
   document.getElementById("return").innerHTML="Averagely done.You qualify to move to the next step."
   confirm("your feedback is at the bottom of the page")
 }
 else{
   document.getElementById("return").innerHTML="Sorry!Your perfomance does not allow you to move to the next step.You will have to re-do the test."
   alert("scroll down to see what next")
 }
//User Interface
$("#place").text("You've got"+" "+ add +"%")
  });
});
