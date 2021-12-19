let city = document.getElementById('values');

let btn = document.getElementById('getInfo');

let country = document.getElementById('country');
let city1 = document.getElementById('city');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');
let info = document.getElementById('info');

function getInfo(){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value.trim()}&appid=6508c80d1115b29a5bb0e65c0009916d`
  fetch(url)
      .then(response => response.json())
      .then(data => {
      	console.log(data)
      	let c = data['sys']['country'];
        let ci = city.value.trim();
        let t = data['main']['temp']
        let d = data['weather'][0]['description']
        let i = data['weather'][0]['main']
        t = Math.round(t - 273.15)
 		country.innerHTML = `<i class="fas fa-globe"></i> ${c}`;
        city1.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${ci}`;
        temp.innerHTML = `<i class="fas fa-thermometer-quarter"></i> ${t}`;
        if(i.toLowerCase() === 'rain'){
          info.innerHTML = `<i class="fas fa-cloud-rain"></i> ${i}`;
        }
        if(i.toLowerCase() === 'clouds'){
          info.innerHTML = `<i class="fas fa-cloud"></i> ${i}`;
        }
        if(i.toLowerCase() === 'clear'){
          info.innerHTML = `<i class="fas fa-sun"></i> ${i}`;
        }
        if(i.toLowerCase() === 'snow'){
          info.innerHTML = `<i class="fas fa-snowflake"></i> ${i}`;
        }
        if(i.toLowerCase() === 'fog'){
          info.innerHTML = `<i class="fas fa-smog"></i> ${i}`;
        }

        desc.innerHTML = `<i class="fas fa-info"></i> ${d}`;
        city.value = '';
      })
}
btn.addEventListener('click', getInfo);
window.addEventListener('keydown', (e) => {
	if (e.which === 13) {
		getInfo()
	}
})