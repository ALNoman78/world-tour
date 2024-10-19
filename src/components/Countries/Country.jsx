import { useEffect } from "react";
import { useState } from "react";
import Abroad from "../Abroad/Abroad";

const Country = () => {
    
    const [countries , setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            {
                countries.map((country) => <Abroad key={country.ccn3} props={country}></Abroad>)
            }
        </div>
    );
};

export default Country;