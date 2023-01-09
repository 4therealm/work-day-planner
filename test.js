$(function(){

$('.time-block').each(function(){
    // console.log(`div${index}: ${this.id}`)
  // console.log($(this).children(".description").text()) 
  const elementKey = this.id
  const elementText = $(this).children(".description")
  const elementTime = parseInt(elementKey.replace( /^\D+/g, ''));
  const savedData = localStorage.getItem ( elementKey );
  tb_textarea.text(savedData)
  console.log(`the time of this block is ${elementTime}and the current hour is ${hour}. this is the active time block for this hour ${elementTime===hour}`)
})



function evaluateTime() {
  $('#currentDay').text(today)
    if (elementTime < hour) {
  $(this).addClass('past')
   }else if(elementTime > hour){
    $(this).addClass('future')
   }else{
    $(this).addClass('present')
   }
}








})