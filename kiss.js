$(function (){
const rootElement = $('.container-fluid') 
const timeBlockElements = Array.from(rootElement.children()) 







let today = dayjs()
let hour = dayjs().hour()
var time = dayjs().format('h:mm:ss');

$('#currentDay').text(today)

timeBlockElements.forEach(element => {
  const elementKey = element.id
  const elementText = $(element).children().eq(1)
  const elementTime = elementKey.replace( /^\D+/g, '');
  const savedData = localStorage.getItem ( elementKey )  || []; 
  elementText.text(savedData)
if (elementTime < hour) {
  $(this).attr('class', 'past').removeClass('future', 'present')
 
  console.log('past')
  
  }else if(elementTime > hour){
    $(this).attr('class', 'future').removeClass('present', "past")
    console.log('future')
  
  }else{
    $(this).attr('class', 'present').removeClass('future', 'past')
    console.log('present')
   

  }
})


$('.time-block').on('click', ".saveBtn", function (e) {
  const blockId = $(this).parent().attr('id')
  const blockText = $(this).prev().val()
  localStorage.setItem(blockId, (blockText))
  e.preventDefault();
})
























})