$(function (){


$('.time-block').on('click', ".saveBtn", function (e) {
  let blockId = $(this).parent().attr('id')
  let blockText = $(this).prev().val()
  localStorage.setItem(blockId, (blockText))
console.log(blockId)
console.log(blockText)
})
























})