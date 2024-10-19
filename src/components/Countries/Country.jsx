import { useEffect } from "react";
import { useState } from "react";
import Abroad from "../Abroad/Abroad";
import './Countries.css'

const Country = () => {
    
    const [countries , setCountries] = useState([]);
    const [markVisited , setMarkVisited] = useState([])

    const handlerCountry = (country) =>  {
        const newVisitedCountries = [...markVisited,country]
        setMarkVisited(newVisitedCountries)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div>
                <h3>Visited Country list : {markVisited.length} </h3>
                <ul>
                    {
                        markVisited.map((li) => <li key={markVisited.ccn3}>{li.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country">
            {
                countries.map((country) => 
                <Abroad key={country.ccn3} 
                handlerCountry = {handlerCountry}
                props={country}></Abroad>)
            }
            </div>
        </div>
    );
};

export default Country;