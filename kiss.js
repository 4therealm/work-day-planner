$(function (){
  const rootElement = $('.container-fluid') 
  console.log(rootElement.children().attr('id'))
var timeBlockArray = Array.from(rootElement.children())
// console.log(timeBlockArray.length) 


timeBlockArray.forEach(element => {
  let elementKey = element.id
  let elementText = $(element).children().eq(1).text()
  console.log(elementKey)
  console.log(elementText)
})


$('.time-block').on('click', ".saveBtn", function (e) {
  let blockId = $(this).parent().attr('id')
  let blockText = $(this).prev().val()
  localStorage.setItem(blockId, (blockText))
  console.log(`id: ${blockId}
  text: ${blockText}`)
})



function targetBlock(params) {
  
}




















})