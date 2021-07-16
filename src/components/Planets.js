import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'

const fetchPlanets = async () => {
    const res = await axios.get('http://swapi.dev/api/planets/');
    return res;
}


const Planets = () => {
    const {data, status} = useQuery('planets', fetchPlanets);
    console.log(data);
    return (
        <div>
           <h2>Planets</h2>
           <p>{status}</p>
           <p>{data?.results}</p>
        </div>
    )
}

export default Planets
