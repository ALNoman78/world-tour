import { useEffect } from "react";
import { useState } from "react";
import Abroad from "../Abroad/Abroad";
import './Countries.css'

const Country = () => {

    const [countries, setCountries] = useState([]);
    const [markVisitedCountry, setMarkVisitedCountry] = useState([])
    const [visitedFlags, setFlags] = useState([])

    const flagHandler = (flags) => {
        console.log('maisa monara moule');
        const newFlags = [...visitedFlags, flags]
        setFlags(newFlags);
    }

    const visitedHandler = (country) => {
        const newVisitedCountry = [...markVisitedCountry, country]
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
            {/* visited countries */}
            <div>
                <h4>Visited Country list : {markVisitedCountry.length}</h4>
                <ul>
                    {
                        markVisitedCountry.map((country) => {
                            <li style={{color : 'black' , border : '2px solid red'}} key={country.ccn3}> {country.name.common} </li>
                        })
                    }
                </ul>
                {/* image container */}
                <div className="flag-container">
                    {
                        visitedFlags.map((flag , idx) => <img key={idx} className="flag-image" src={flag} />)
                    }
                </div>
            </div>
            {/* display flags */}
            <div className="country">
                {
                    countries.map((country, i) =>
                        <Abroad key={i}
                            props={country}
                            visitedHandler={visitedHandler}
                            flagHandler={flagHandler}></Abroad>)
                }
            </div>
        </div>
    );
};

export default Country;


// 1 . create a state if you want to access this other component
// 2 . the add click handler