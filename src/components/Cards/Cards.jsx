import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Films from "../Category/Films";
import People from "../Category/People";
import Planets from "../Category/Planets";
import Species from "../Category/Species";
import Starships from "../Category/Starships";
import Vehicles from "../Category/Vehicles";

function Cards() {
  const { label } = useParams();
  const data = useSelector((state) => state.starWarsReducers.data);

  switch (label) {
      case 'films': return data.results?.map(el => <Films el={el}/>)
      case 'people': return data.results?.map(el => <People el={el}/>)
      case 'planets': return data.results?.map(el => <Planets el={el}/>)
      case 'species': return data.results?.map(el => <Species el={el}/>)
      case 'starships': return data.results?.map(el => <Starships el={el}/>)
      case 'vehicles': return data.results?.map(el => <Vehicles el={el}/>)
  }
}

export default Cards;
