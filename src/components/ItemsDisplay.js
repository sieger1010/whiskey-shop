import React, {useState, useEffect} from 'react';
import './ItemsDisplay.scss';
import ProductCard from'./ProductCard';

function ItemsDisplay(props) {

    const [activeCategory, updateActiveCategory] = useState('whiskey')
    useEffect(() => changeActiveLink())

    // const whiskeys = props.items.filter(item => item.category === "whiskey");
    // const wines = props.items.filter(item => item.category === "wine");
    // const spirits = props.items.filter(item => item.category === "spirits");

    function displayProducts() {
        //TODO fix this function for state when list of items from API is still loading
        if (activeCategory !== null) {
            const itemsByCategory = props.items.filter(item => item.category === activeCategory)
            const html = itemsByCategory.map(item => {
                return (<ProductCard key={item.id} name={item.name} description={item.description}/>)
                
            })
            
            return html;
            
        }
        else return (<p>Loading...</p>)
    }

    function changeActiveLink() {
        document.getElementsByClassName('active')[0].classList.remove('active');
        document.getElementById(activeCategory).classList.add('active');
    }


    return (
        <div className="container">
            <div className="row m-0">
                <div className="col-12 ItemsDisplay">
                    <div className="row text-center">
                        <div className="col-4 py-2 category active" id="whiskey" onClick={() => {updateActiveCategory('whiskey'); changeActiveLink()}}><h2 className="logoFont">Whiskey</h2></div>
                        <div className="col-4 py-2 category" id="wine" onClick={() => {updateActiveCategory('wine'); changeActiveLink()}}><h2 className="logoFont">Wine</h2></div>
                        <div className="col-4 py-2 category" id="spirits" onClick={() => {updateActiveCategory('spirits'); changeActiveLink()}}><h2 className="logoFont">Spirits</h2></div>
                    </div>
                    <div className="row" id="products">
                        {displayProducts(activeCategory)}
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default ItemsDisplay;