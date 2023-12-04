$(document).ready(function () {

  $('#currentDay').text(dayjs().format('MM/DD/YYYY'));
  $('#currentTime').text(dayjs().format('h:mm:ss'));

  $('.saveBtn').on('click', function () {
    var timeBlockId = $(this).closest('.time-block').attr('id');

    var userDescription = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userDescription);
  });

  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var currentHour = dayjs().hour();

    $(this).removeClass('past present future');
    if (currentHour < parseInt(timeBlockId.split('-')[1])) {
      $(this).addClass('future');
    } else if (currentHour === parseInt(timeBlockId.split('-')[1])) {
      $(this).addClass('present');
    } else {
      $(this).addClass('past');
    }
  });

  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var userDescription = localStorage.getItem(timeBlockId);

    if (userDescription) {
      $(this).find('.description').val(userDescription);
    }
  });

});