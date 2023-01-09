$(function(){

$('.time-block').each(function(){
    // console.log(`div${index}: ${this.id}`)
  // console.log($(this).children(".description").text()) 
  const tb_key = this.id
  const tb_textarea = $(this).children(".description")
  const tb_time = parseInt(elementKey.replace( /^\D+/g, ''));
  const savedData = localStorage.getItem ( tb_key )  || [];
  tb_textarea.text(savedData)
  console.log(`the time of this block is ${typeof tb_time}and the current hour is ${hour}`)
  console.log(typeof hour)
})



function evaluateTime() {
    if (elementTime < hour) {
  $(this).addClass('past')
  .removeClass('future', 'present')
  //  console.log('past')
   }else if(elementTime > hour){
    $(this).addClass('future')
    .removeClass('present', 'past')
    // console.log('future')
   }else{
    $(this).addClass('present')
    .removeClass('future', 'past')
    // console.log('present')
   }
}








})