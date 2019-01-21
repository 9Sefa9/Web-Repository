function isName(){
return prompt("Command: ");
}

lookForCommand();

function lookForCommand(){
switch(isName()){
  case "Mathematical Operations":{
    showMathematicalOperations();
    break;
  }
  case "String Operations":{
    showStringOperations();
    break;
  }
  default:{
    alert("COMMAND NOT FOUND! TRY AGAIN!");
    location.reload();
  }
}
}
function showMathematicalOperations(){
  document.write("operatoren mit bindungstärke klammer: <br />");
  document.write("5+5 = "+(5+5)+"<br />");
  document.write("5-5 = "+(5-5)+"<br />");
  document.write("5/4 = "+(5/5)+"<br />");

  document.write("operatorn ohne bindungstärke mit kommata: <br />");
  document.write("5+5 = ", 5+5,"<br />");
  document.write("5-5 = ", 5-5,"<br />");
  document.write("5/4 = ", 5/5,"<br />");

  document.write("operatorn mit Math.: <br />");
  document.write("Math.abs(-8) = "+Math.abs(-8)+"<br />");

  document.write("Konvertierung von Strings: <br />");
  document.write("Converted String: ",Number("3.1415"),"<br/>");
  document.write("Converted int: ",parseInt("3.1415"),"<br/>");
  document.write("Converted float: ",parseFloat("3.1415"),"<br/>");


}
function showStringOperations(){

}
function newSearch(){
location.reload();
}
