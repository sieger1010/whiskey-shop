import React, {useState} from 'react';
import './Landing.scss';

function Landing () {

    const [imageIndex, changeImageIndex] = useState(0);
    const images = ['../images/bottles-background-xl.jpg', '../images/bottles-background2-xl.jpg', '../images/bottles-background3-xl.jpg']

    return (
        <div>
            <div className="container-fluid" id="landingContainer">
                <div className="row">
                    <div className="col-12 d-flex flex-column text-center justify-content-center" id="landingOverlay">
                        <h1 className="text-white">Test</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;