let API = "https://restcountries.com/v3.1/all";


let fet = fetch(API)
    .then((response) => response.json())
    .then((data) => {

        data.map((value) => {
            let countrydata = {
                ...value,
                name: value.name.common,
                flag: value.flags.png,
                code: value.cioc,
                capital: value.capital,
                region: value.region,
                population: value.population,
                latitude: value.latlng[0],
                longitude: value.latlng[1]

            };
            createcountry(countrydata);
            // console.log(value)
        })
    })

function createcountry({ name, flag, code, capital, region, population, latitude, longitude }) {

    document.body.innerHTML +=

   `
   <div class="container">
    <div class="card bg-white"  >
          <img src="${flag}" class="flag" alt="${name}'Flag image">
          <h2 id="title" class="text-center">${name}</h2>
             <div class="card-body car" >
            <p><span>Population :</span>${population}</p>
             <p><span>Captial :</span> ${capital}</p>
             <p><span>Region :</span> ${region}</p>
             <p><span>Country Code :</span>${code}</p>
        <a href="#" class="btn btn-success" onclick=(block(${latitude},${longitude},${name})) >Weather Report</a>
          <div id=${name}></div>
  </div>
</div>
</div>
`
}



function block(lat, lng, name) {

    var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`

    console.log(name)

    fetch(WAPI)
        .then((response) => response.json())
        .then((data) => {

            alert(`
    Country name: ${name.id}  
    Humidity: ${data.main.humidity}
    Pressure :${data.main.pressure}
    Temperature : ${data.main.temp}`)
        })
}

document.addEventListener("click", (event) => event.preventDefault())

