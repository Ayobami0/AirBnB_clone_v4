$(document).ready(function() {
  const statusJson = $.get("http://0.0.0.0:5001/api/v1/status/");
  htmlStatus = $("#api_status");
  if (statusJson["status"] == "OK") {
    if (!htmlStatus.hasClass("available")) {
      htmlStatus.addClass("available");
    }
  } 
  else {
    if (htmlStatus.hasClass("availble")) {
      htmlStatus.removeClass("available");
    }
  }
})
