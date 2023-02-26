// import css
import "./style.css"
// console log abbr
const LOG=console.log





// function onload(){
  
//   const input= document.querySelector(".input-saerch");
//   input.addEventListener("input",function(){
//     let value=this.value.trim()
    
//     const listItems= document.querySelectorAll(".list li");

//   if(value){
//     listItems.forEach((elem)=>{
//       if(elem.innerText.search(value)==-1){
//         elem.classList.add("hide")
//       }
//     })
//   }else listItems.forEach((elem)=>{
//     elem.classList.remove("hide")
//   })
// })
// }




// onload()

const inputSaerch=document.querySelector(".input-saerch")
const list=document.querySelectorAll(".search-list li")
function searchList(){
  inputSaerch.addEventListener("input",search)
  function search(){
    let inputValue=this.value.trim();
    list.forEach((elem)=>{
      if(inputValue){
       if(elem.innerText.search(inputValue)==-1){
        elem.classList.add("hide")
       }
        
      }else elem.classList.remove("hide")
    })
    
  }
}

searchList()