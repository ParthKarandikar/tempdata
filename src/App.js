import { React ,useState,useEffect} from 'react';
import 'animate.css';

function App() {


    const [Search, setSearch] = useState('pune');
    const [cityData, setcityData] = useState(null);

    useEffect(()=>{
      const fetchApi = async() => {
        const url='https://api.openweathermap.org/data/2.5/weather?q='+Search+'&units=metric&appid=f95cbbcce736c7a735f789445de7d2e1';
        const response= await fetch(url);
        const resJson= await response.json(url);
        setcityData(resJson.main);
      };
          fetchApi();
    },[Search])


 return(
<div> 
{/* DATA-SEARCH */}
  <input placeholder='🔍 Search' className='Search' type='Search' onChange={(event)=>{setSearch(event.target.value)}}/> 
        


{/* DATA-VALIDATION */}
{!cityData ? 
(
  <p>Enter city name</p>
):(
  <div className='props'>
        <h1>{Search.toUpperCase()} {cityData.temp}</h1><br/>
        <h3>Feels like: {cityData.feels_like}</h3><br/>
        <h3>Max: {cityData.temp_max}</h3><br/>
        <h3>Humidity: {cityData.humidity}</h3><br/>
        <h3>Pressure: {cityData.pressure}</h3>

</div>
)
}

   <button><a href='https://bit.ly/38GqvnO'>✨ About ME</a></button> 
</div> 
  );
}

export default App;
