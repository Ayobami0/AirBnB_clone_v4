const apiBaseURL = 'http://0.0.0.0:5001/api/v1';
window.addEventListener('load', () => {
  $.ajax({
    url: `${apiBaseURL}/places_search`,
    method: 'POST',
    data: JSON.stringify({}),
    headers: {
      'Content-Type': 'application/json'
    },
    success: (data) => {
      console.log(data);
      data.forEach(place => {
        $.ajax({
          url: `${apiBaseURL}/users/${place.user_id}`,
          success: (data) => {
            console.log(data);
            $('section.places').append(`
    <article>
      <div class= "title_box" >
        <h2>${place.name}</h2>
        <div class="price_by_night">$${place.price_by_night}</div>
      </div >
      <div class="information">
        <div class="max_guest">${place.max_guest} Guest${place.max_guest > 1 ? 's' : ''}</div>
        <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms > 1 ? 's' : ''}</div>
        <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms > 1 ? 's' : ''}</div>
      </div>
      <div class="user">
        <b>Owner:</b> ${data.first_name} ${data.last_name}
      </div>
      <div class="description">
        ${place.description}
      </div>
    </article >
              `
            );
          }
        });
      });
    }
  });
});
