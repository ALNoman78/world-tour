import './Abroad.css'

const Abroad = ({props}) => {
    console.log(props);
    const {name , flags} = props
    return (
        <div className='abroad'>
            <h3>Country Name : {name?.common}</h3>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default Abroad;