<<<<<<< HEAD
$(document).ready(function() {
  htmlStatus = $("#api_status");
  $.get("http://0.0.0.0:5001/api/v1/status/", function(data, textStatus) {
  if (data["status"] == "OK") {
    htmlStatus.addClass("available");
  } else if (data["error"]{
    htmlStatus.removeClass("available");
=======
window.addEventListener('load',
  () => {
    console.log('Ready');
    const htmlStatus = $('#api_status');
    $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
      console.log(data)
      if (data.status === 'OK') {
        htmlStatus.addClass('available');
      } else {
        htmlStatus.removeClass('available');
      }
    });
>>>>>>> master
  }
);
