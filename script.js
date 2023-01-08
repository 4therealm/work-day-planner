


$(function () {


const rootElement = $('.container-fluid') 
let outGoingContainer = [
  {time: "8AM", content: ""},
  {time: "9AM", content: ""},
  {time: "10AM", content: ""},
  {time: "11AM", content: ""},
  {time: "12AM", content: ""},
  {time: "1PM", content: ""},
  {time: "2PM", content: ""},
  {time: "3PM", content: ""}
];

render()

function render() {
const  incomingContainer =JSON.parse ( localStorage.getItem ( "updatedSaves" ) ) || [];
for (let i = 0; i < incomingContainer.length; i++) {
  $('.time-block').eq(i).children().eq(1).val(incomingContainer[i].content); 
}
console.log(incomingContainer)

}




$('.time-block').on('click','.saveBtn', function (e) {
  e.preventDefault()
  var text =  $(this).parent().children().eq(1).val()
  var savedHour =  $(this).parent().children().eq(0).text()

  let time_block ={time: savedHour, content: text}

updateOutgoing(time_block)
console.log(savedHour)
  
  // console.log("information saved")

})

function updateOutgoing(newObj){
  const index = outGoingContainer.findIndex((obj) => obj.time === newObj.time)
outGoingContainer[index] = newObj
outGoingContainer.splice(index, 1, newObj)
  localStorage.setItem('updatedSaves', JSON.stringify(outGoingContainer))
console.log(outGoingContainer)
}



//https://inspiredwebdev.com/find-replace-in-array/
// function saveInfo(e) {
// }
//  let targetedBlockText =  $(time_block).children(1).text
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});




// maybe this for targeting the text $('input[type="text"]').value;

