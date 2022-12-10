import React from "react";
import { Link } from "react-router-dom";
import { useEstadosGlobales } from "./utils/global.context";

const Card = ({ id, name, username }) => {
  const { providerValue } = useEstadosGlobales();
  const { dispatchFavs } = providerValue;
  
  const addFav = ()=>{
    dispatchFavs({type: 'ADD_FAV', payload: { id, name, username }})
    alert(`Añadido a ${name} a favoritos`)
  }

  return (
    <div className="card">
       <Link key={id} to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="dentist" />
        <h4>{username}</h4>
        <h3>{name}</h3>
      </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;