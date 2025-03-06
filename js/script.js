
let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp)
// console.log(arr);

arr.map(item=>{
  // console.log(item);
  let counter = 0;


 function count(){
   counter++;

   item.innerHTML = counter;
   if (counter == item.dataset.number) {
     clearInterval(stop);

   }
 }
 let stop = setInterval(function(){
   count();
 },500/item.dataset.number);
});
 