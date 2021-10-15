import React from 'react';
import './CardList.css';
import { Card } from '../Card/index';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.cats.map(cat => (
                <Card key={cat.id} cat={cat}/>
                ))
            }    
        </div>
    )
}