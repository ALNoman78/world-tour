import { useState } from 'react';
import './Abroad.css'

const Abroad = ({ props , visitedHandler , flagHandler}) => {
    // console.log(props);
    // const [isVisit , setVisited] = useState(false) // initial value false nite hbe

    // const handler = () => {
    //     // setVisited(true) value update kore true kore dite hbe
    //     setVisited(!isVisit) // if i want to toggle this button simply use bang sign / not sign [!] like this
    // }
    
    const [isVisited, setVisited] = useState(false)

    const handler = () => {
        setVisited(!isVisited)
    }
    const { name, flags, demonyms, population, area, cca3 } = props
    return (
        <div className={`abroad ${isVisited ? 'visited' : 'not-visited'}`}>
            <h3 style={{ color: isVisited ? 'red' : 'green' }}>Country Name : {name?.common}</h3>
            <img style={{width : '300px' , height : '200px' , objectFit : 'cover'}} src={flags?.png} alt="" />
            <p>Language : {demonyms?.eng?.f}</p>
            <p>Population  : {population}</p>
            <p>Area : {area}</p>
            <p><small>CCA3 : {cca3}</small></p>
            {/* <button onClick={handler}>{isVisit ? 'Visited' : 'Not Visited'} </button>  */}
            {/* 21 number line button text change dynamically */}
            {/* {
                isVisit ? 'I visited this country' : 'I want to visit this country'
            } */}
            <button onClick={() => visitedHandler(props)}>Mark as visited Country</button>
            <br /><br />
            <button onClick={() => flagHandler(props.flags.png)}>Add Flag</button>
            <button onClick={handler}>{isVisited ? 'Visited' : 'On planning'}</button>
            <br />
            {
                isVisited ? 'Visited this country' : 'Planning on to visited this country'
            }
        </div>
    );
};

export default Abroad;