todoCounter = 0;
function addIntoList(){
    if(this.todoCounter<=10){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    addCredentialsToList(title,description);
    }else{
        alert("reset");
        var realList = document.getElementById("realList");
        realList.innerHTML="";
        this.todoCounter = 0;
    }
}

function addCredentialsToList(title, description){
    var realList = document.getElementById("realList");
    realList.innerHTML += "<li id='realListElement'><p>"+new Date()+"</br></p><p>"+title+"<br>"+description+"</p></li>";
    window.scrollTo(0,document.body.scrollHeight/2);
    this.todoCounter+=1;
}