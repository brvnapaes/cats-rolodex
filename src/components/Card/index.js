import React from 'react';
import './Card.css';

 export const Card = (props) => {
     return (
        <div className='card-container'>
            <img alt='cat' src={`https://robohash.org/${props.cat.id}?set=set4`} />
            <h2> Nome: {props.cat.username} </h2>
            <h3>Humano(a): {props.cat.name}</h3>
        </div>
     )
 }