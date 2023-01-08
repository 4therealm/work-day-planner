$(function (){
  const rootElement = $('.container-fluid') 
var timeBlockElements = Array.from(rootElement.children()) 







let today = dayjs()
let hour = dayjs().hour()
var time = dayjs().format('h:mm:ss');
// console.log(hour)

$('#currentDay').text(hour)

timeBlockElements.forEach(element => {
  const elementKey = element.id
  const elementText = $(element).children().eq(1)
  const elementTime = elementKey.replace( /^\D+/g, '');
  
  const savedData = localStorage.getItem ( elementKey )  || []; 
  elementText.text(savedData)

  console.log(elementTime == hour)
  // console.log(elementText)
  // console.log(savedData)
})


$('.time-block').on('click', ".saveBtn", function (e) {
  const blockId = $(this).parent().attr('id')
  const blockText = $(this).prev().val()
  localStorage.setItem(blockId, (blockText))
  // console.log(`id: ${blockId}
  // text: ${blockText}`)
})
























})