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
  }
);
