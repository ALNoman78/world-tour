import { useEffect } from "react";
import { useState } from "react";
import Abroad from "../Abroad/Abroad";
import './Countries.css'

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
            <div className="country">
            {
                countries.map((country) => <Abroad key={country.ccn3} props={country}></Abroad>)
            }
            </div>
        </div>
    );
};

export default Country;