import React from 'react';
import './ProductCard.scss';

function ProductCard(props) {

    return (
    <div className="col-lg-4 col-12" key={props.id}>
        <div className="card ProductCard text-center">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <img src="" alt={props.name} className="img-thumbnail"/>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    </div>
    );
}

export default ProductCard;