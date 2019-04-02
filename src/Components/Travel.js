import React from 'react';

const Travel = ({destination,country, image, distance}) => (

<div> <p className="destination">{destination}</p> <p className="country">{country}</p> 

<img className="photodeville" src={image}/>
<p>{distance}</p>
</div>
);



  
  export default Travel;
