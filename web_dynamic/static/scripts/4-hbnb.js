/*const apiBaseURL = 'http://0.0.0.0:5001/api/v1';
const button = $("button");
let amenities = [];*/
window.addEventListener('load', () => {
  const apiBaseURL = 'http://0.0.0.0:5001/api/v1';
  const button = $("button");
  let amenities = [];
  $('div.amenities input:checkbox ').on('click', (event) => {
    const target = event.target;
    if (!target.checked) {
      amenities = amenities.filter(item => item.id !== target.dataset.id);
    } else {
      amenities.push({ id: target.dataset.id, name: target.dataset.name });
    }
    const nameList = [];
    amenities.forEach((val) => { nameList.push(val.name); });
    $('div.amenities h4').text(nameList.join(', '));
  });
  let listAmenityId = []
  button.on("click", function (event) {
    amenities.forEach((amenity) => {
      listAmenityId.push(amenity.id);
    });
  });
  $.ajax({
    url: `${apiBaseURL}/places_search`,
    method: 'POST',
    data: JSON.stringify(listAmenityId),
    headers: {
      'Content-Type': 'application/json'
    },
    success: (data) => {
      data.forEach(place => {
        $.ajax({
          url: `${apiBaseURL}/users/${place.user_id}`,
          success: (data) => {
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
