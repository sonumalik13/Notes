const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
 let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML =localStorage.getItem("notes");
}
showNotes();

//  ---> Save Record or data In Browser Page <---
 function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);


 }
//              ---> Add Text Page <---

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="notesdelete.webp"
    notesContainer.appendChild(inputBox).appendChild(img);
    
 })

//                  --->Delete Notes Page<---

 notesContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();  //call storage saved
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
 })


//  --->Press Enter Next Line<---

document.addEventListener("keydown",event =>{
if(event.key ==="Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
}

})
