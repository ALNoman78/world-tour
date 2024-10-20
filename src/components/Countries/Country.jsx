import { useEffect } from "react";
import { useState } from "react";
import Abroad from "../Abroad/Abroad";
import './Countries.css'

const Country = () => {

    const [countries, setCountries] = useState([]);
    // 1 . create a state if you want to access this other component
    const [markVisitedCountry, setMarkVisitedCountry] = useState([])

    const visitedHandler = (country) => {
        const newVisitedCountry = [...markVisitedCountry , country]
        setMarkVisitedCountry(newVisitedCountry);
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
                <h4>Visited Country list : {markVisitedCountry.length}</h4>
                <ul>
                    {
                        markVisitedCountry.map((country) => {
                            <li key={country.ccn3}>{country.name.common}</li>
                        })
                    }
                </ul>
            </div>
            <div className="country">
                {
                    countries.map((country , i) =>
                        <Abroad key={i}
                            props={country}
                            visitedHandler={visitedHandler}></Abroad>)
                }
            </div>
        </div>
    );
};

export default Country;