import React from 'react';
import './Product.css';

export default function Product(props){
    return(
        <div>
            <div className="Product">
                <img src={props.URL} width='100'/>
                <div>
                    <h3>{props.name}</h3>
                    <h3>{props.price}</h3>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}