todoCounter = 0;
index=0;
var myNoticeArray=[];
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
    var notice = "<li id='realListElement'><p>"+new Date()+"</br></p><p>"+title+"<br>"+description+"</p></li>";
    realList.innerHTML += notice;
    window.scrollTo(0,document.body.scrollHeight/2);
    myNoticeArray.push(notice); 
    for(var i = 0 ; i<myNoticeArray.length; i++){
        if(myNoticeArray[i]!=null)
            console.log(myNoticeArray[i]);
    }
    this.todoCounter+=1;
    this.index+=1;
    
}