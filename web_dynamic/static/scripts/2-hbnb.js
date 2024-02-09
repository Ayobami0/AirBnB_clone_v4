$(document).ready(function() {
  htmlStatus = $("#api_status");
  $.get("http://0.0.0.0:5001/api/v1/status/", function(data, textStatus) {
  if (data["status"] == "OK")
    htmlStatus.addClass("available");
  } else {
    htmlStatus.removeClass("available");
  });
});
