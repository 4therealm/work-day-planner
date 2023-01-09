$(function (){
const rootElement = $('.container-fluid') 
const timeBlockElements = Array.from(rootElement.children()) 

let today = dayjs()
let hour = parseInt(dayjs().hour())


$('#currentDay').text(today)

timeBlockElements.forEach(element => {
  const elementKey = element.id
  const elementText = $(element).children().eq(1)// check here
  const elementTime = parseInt(elementKey.replace( /^\D+/g, ''));
  console.log(`the time of this block is ${elementTime}and the current hour is ${hour}, is this block the current block? ${elementTime === hour}`)
  const savedData = localStorage.getItem ( elementKey ); 
  elementText.text(savedData)
if (elementTime < hour) {
  $(element).addClass('past')
  // .removeClass('future', 'present')
  //  console.log('past')
   }else if(elementTime > hour){
    $(element).addClass('future')
    // .removeClass('present', "past")
    // console.log('future')
   }else{
    $(element).addClass('present')
    // .removeClass('future', 'past')
    // console.log('present')
   }})


$('.time-block').on('click', ".saveBtn", function (e) {
  const blockId = $(this).parent().attr('id')
  const blockText = $(this).prev().val()
  localStorage.setItem(blockId, (blockText))
  e.preventDefault();
})
























})