import React from 'react';
import './ProductCard.scss';

function ProductCard(props) {

    return (
    <div className="col-lg-4 col-12" key={props.id}>
        <div className="ProductCard">
            <div className="card-body">
                <h4 className="card-title text-center">{props.name}</h4>
                <img src={props.img} alt={props.name} className="mx-auto d-block"/>
                <p className="card-text text-center">{props.description}</p>
                <h5 className="price ml-4">${props.price.toFixed(2)}</h5>
                <div className="quantityContainer float-right mr-4">
                    <div className="button subtractButton">-</div>
                    <span className="quantity">0</span>
                    <div className="button addButton">+</div>
                </div>                
            </div>
        </div>
    </div>
    );
}

export default ProductCard;