import React from 'react'

const Travel = ({destination,country, photo, distance}) => (

<div> <p className="destination">{destination}</p> <p className="country">{country}</p> 

<img className="photodeville" src={photo}/>
<p>{distance}</p>
</div>
);
export default Travel