const SearchForm = document.getElementById('SearchForm')
const Temp = document.getElementById('Temp')
const Max = document.getElementById('Max')
const Min = document.getElementById('Min')
const Hum = document.getElementById('Hum')
const ciudad = document.querySelector('h1') 
const TipoClima = document.getElementById('TipoClima')
const SearchInput = document.getElementById('SearchInput')
const ContainerCity = document.querySelector('.ContainerCity')
const centerSvg = document.querySelector('centerSvg')

SearchForm.addEventListener('submit', e =>{
    e.preventDefault()

const getCityWeather = async(city) =>{
    const APIkey = '529661356cf89c310be69aa76e3a210f'

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${APIkey}`

    const response = await fetch(api)
    const data = await response.json()
    const icon = data.weather[0].main
    ciudad.innerHTML = data.name
    Min.innerHTML = `${data.main.temp_min}º`;
    Max.innerHTML = `${data.main.temp_max}º`;
    Hum.innerHTML = `${data.main.humidity}%`;
    Temp.innerHTML = `${data.main.temp}º`;
    TipoClima.innerHTML = data.weather[0].description
    
    console.log(icon);
    switch (icon) {
        case 'Clear':
            svgIcon.src='/assets/Sol.svg'
            break;
        case 'Clouds':
            svgIcon.src='/assets/pocasnubes.svg' 
        break;
        case 'Snow':
            svgIcon.src='/assets/nieve.svg'
            break;
        case 'Thunderstorm':
            svgIcon.src='/assets/tormenta.svg'
            break;
        case 'Rain':
            svgIcon.src='/assets/lluvia.svg';
        case 'Drizzle':
            svgIcon.src='/assets/lluviacalmada.svg'
        default:
            break;
    }
    if(SearchInput.value){
        ContainerCity.classList.add('ContainerCityView')
    }
 }
 getCityWeather(SearchInput.value)
})