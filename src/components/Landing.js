import React, {useState} from 'react';
import './Landing.scss';
import { useEffect } from 'react';

function Landing () {

    const [index, changeIndex] = useState(0);
    const numElements = 3;

    useEffect(() => {
        setTimeout(() => {
            changeIndex(() => {
                if (index === 2) {
                    return 0;
                }
                else {
                    return index + 1;
                }
            })
        }, 15000)
        const elements = document.getElementsByClassName('landingImage');
        elements[index].classList.add('fx');
        if (index === 0) {
            elements[(numElements - 1)].classList.remove('fx');
        }
        else {
            elements[(index - 1)].classList.remove('fx');
        }
    })

    return (
        <div className="row m-0">
            <div id="landingContainer">
                <div className="landingImage firstImage"></div>
                <div className="landingImage secondImage"></div>
                <div className="landingImage thirdImage"></div>
                <div id="landingOverlay"></div>
                
            </div>
        </div>
    );
}
export default Landing;