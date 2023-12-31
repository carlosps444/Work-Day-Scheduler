// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should

  $('.saveBtn').on('click', function () {

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    var timeBlockId = $(this).parent('.time-block').attr('id');
    var userDescription = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId), userDescription;
  });



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

    var currentHour = day.js().format('H');
    $('time-block').each(function () {
      var blockId = parseInt($(this).attr('id').split('-')[1]);
      if (blockId < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockId == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    $('.time-block').each(function () {
      var blockId = $(this).attr('id');
      var storedDescription = localStorage.getItem(blockId);
      if (storedDescription) {
        $(this).find('.description').val(storedDescription);
      }
    });



  // TODO: Add code to display the current date in the header of the page.


  var currentDate = day.js().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});
