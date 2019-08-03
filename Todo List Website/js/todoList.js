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
    //rufe Methode in 4 sekunden.
    setTimeout(learnMethod,4000);
}
function learnMethod(){
    
    //verlässt nicht das innerste, sondern das ganze:
    schleife:
        for(var i=0;i<5;i++){
            for(var j= 0; j<5;j++){
                console.log(i*j);
                if(i*j == 8)
                    break schleife;
            }
        }
}