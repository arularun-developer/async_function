const loadCountryAPI = () => {
    // fetch url of rest country from website
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

// displaying all countries
const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    // displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// get data and set it to html
const getCountry = (country) => {
    console.log(country)
    return `
 <div class="country-div">
  <div class="card">
    <img src="${country.flags.png}" class="card-img-top" alt=flags">
    <div class="card-body">
      <h5 class="card-title">${country.name.common}</h5>
     <h4>Population: ${country.population}</h4>
        <h4>Regoin: ${country.region}</h4>
        <h5>Capital: ${country.capital}</h5>
        <h5>lating: ${country.latlng}</h5>
        </div>
    </div>
  </div>
  
    `
}
// // call the funtion to get output in console
loadCountryAPI()

