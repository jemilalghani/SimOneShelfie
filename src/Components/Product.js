import React from 'react';
import './Product.css';

export default function Product(props){
    return(
        <div className="Container">
            <div className="Product">
                <img src={props.URL} width='140'/>
                <div>
                    <h3>{props.name}</h3>
                    <h3>{props.price}</h3>
                </div>
            </div>
            <div className="editDelete">
                <button onClick={()=>props.delete(props.id)}>Delete</button>
                <button onClick={props.here}>Edit</button>
            </div>
        </div>
    )
}