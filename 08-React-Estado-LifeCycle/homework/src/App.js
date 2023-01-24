import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';


const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {

  const [cities,setCities]= useState([]);
  

  function handleRemoveCity(cityId) {
    setCities((prevCities)=>{
      return prevCities.filter((city)=>{return cityId !== city.id;});
    });
  }

  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  return (
    <div className="App">
       <Nav onSearch = {onSearch}/>
        <Cards cities={cities} onRemove={handleRemoveCity} />
    </div>
  );
}
