import React, {useState, useEffect} from 'react';
import './AgeCheck.scss';

function AgeCheck() {

    const today = new Date();
    const minYear = today.getFullYear() - 21;
    //const wrapper = document.getElementById('ageCheckWrapper');
    const AV_passed = document.cookie !== "" ?
        document.cookie
        .split('; ')
        .find(row => row.startsWith('AV_passed'))
        .split('=')[1]
        : false;

    const [userDate, updateDate] = useState({year: 0, month: 0, day: 0});
    const [display, updateDisplay] = useState(!AV_passed);

    useEffect(() => {
        if(display) {
            compareDate(userDate)
        }        
    })

    function compareDate(passedDate) {
        if(passedDate.year.toString().length === 4) {
            switch (true) {
                case (passedDate.year < minYear): // User is over 21
                    console.log('set cookie and close overlay')
                    document.cookie = 'AV_passed=true'
                    updateDisplay(false)
                    break;
                case (passedDate.year === minYear): // Need month and maybe day information to determine if user is over 21
                    console.log("request month of birth")
                    document.getElementById('monthInput').focus()

                    if (passedDate.month > 0) {
                        switch (true) {
                            case (passedDate.month < today.getMonth() + 1): // User is over 21
                                                                            // Date.getMonth() returns month of year from 0-11, +1 is added to compare correctly with user input                                                                            
                                console.log('over age')
                                document.cookie = 'AV_passed=true'
                                updateDisplay(false)
                            break;
                            case (passedDate.month > today.getMonth() + 1):
                                console.log("under age")
                            break;
                            case (passedDate.month === today.getMonth() + 1):
                                console.log("request day of birth")
                                document.getElementById('dayInput').focus()

                                if ((passedDate.day.toString().length) === 2 || (((passedDate.day) > 0) && (passedDate.day.toString().length === 2))) {
                                    switch (true) {
                                        case (passedDate.day <= today.getDate()):
                                            console.log("user is over 21")
                                            document.cookie = 'AV_passed=true'
                                            updateDisplay(false)
                                        break;
                                        case (passedDate.day > today.getDate()):
                                            console.log("user is under age. Deny access to site.")
                                        break;
                                        default:
                                    }
                                }
                            break;
                            default:
                        }
                    }
                    break;
                case (passedDate.year > minYear):
                    console.log("under age")
                    break;
                default:
            }
        }
    }
    if (display)
    {
        return (
            <div>
                
                <div className="ageCheckWrapper d-flex flex-column justify-content-center text-center" id="ageCheckWrapper">
                            
                    <h1 className="logoFont text-white">WW - Whiskey</h1>
                    <br />
                    <h3 className="text-white">Please enter your birthdate</h3>
                    <p className="text-white">This is an example website and we don't actually sell any products.</p>
                    <p className="text-white">We won't save this information.</p>
                    <div className="d-block">
                        <input type="number" maxLength="4" placeholder="YYYY" id="yearInput" onChange={
                            e => updateDate({
                            year: parseInt(e.target.value),
                            month: userDate.month,
                            day: userDate.day
                        })} autoFocus={true} />
                        <input type="number" maxLength="2" placeholder="MM" id="monthInput" onChange={
                            e => updateDate({
                            year: userDate.year,
                            month: parseInt(e.target.value),
                            day: userDate.day
                        })} />
                        <input type="number" maxLength="2" placeholder="DD" id="dayInput" onChange={
                            e => updateDate({
                            year: userDate.year,
                            month: userDate.month,
                            day: parseInt(e.target.value)
                        })} />
                    </div>                                                       
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}
export default AgeCheck;