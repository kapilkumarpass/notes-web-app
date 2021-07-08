console.log("i am here");
shownote();
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",(e)=>{

    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    if(addtxt.value!=""){
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
   
    shownote();
    addtxt.value="";
    console.log(notesObj);
    }
    
})

function shownote()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach((element,index )=> {
        html+=
        `<div class=" notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="delete${index+1}" onClick="deletenote(this.id)" class="btn btn-primary">delete note</button>
        </div>
      </div>`;

    });
    let noteselm=document.getElementById("notes");
    if(notesObj.length!=0)
      noteselm.innerHTML=html;
      else
      {
          noteselm.innerHTML="nothing to show";
      }
}
function deletenote(index)
{
    let noteobj=JSON.parse(localStorage.getItem("notes"));
    
    noteobj.splice(index-1,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    console.log(noteobj);
    shownote();
}
let search=document.getElementById("searchtxt");
search.addEventListener("input",()=>{

    let notecards=document.getElementsByClassName("notecard");
    Array.from(notecards).forEach((element)=>{
        let text=element.getElementsByTagName("p")[0].innerText;
        if(text.includes(search.value.toLowerCase()))
        {
                element.style.display="block";
        }
        else
        element.style.display="none";
    })
   

})
