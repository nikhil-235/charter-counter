let input = document.querySelector("input");
let count = document.querySelector(".count");
let remaning = document.querySelector(".rest");

input.addEventListener("keyup",()=>{
    counter();

})
function counter(){
    count.innerHTML = input.value.length;
    remaning .innerHTML = input.getAttribute("maxLength")-input.value.length;
  
}