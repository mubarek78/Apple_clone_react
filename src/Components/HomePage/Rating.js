import React, { useState } from "react";

function Rating() {
    const [value, setValue] = useState(5);

    const increment = () => {
        if (value <= 9) {
            setValue((value) => value + 1);
        }
    };

    const decrement = () => {
        if (value >= 1) {
            setValue((value) => value - 1);
        }
    };

    // Conditionally rendering the text
    let initialText = "Average rating:";
    let changedText = "You rated:";
    let displayText = "";


    let counter = 1;

    if (value !== 5) {
        counter = counter + 1;
    }
    if (counter >= 2) {
        displayText = changedText;
    } else {
        displayText = initialText;
    }

    return (
        <div className="rating-wrapper">
            <h3>Please rate this <span className="rateiphone">iPhone 13Pro </span>out of 10</h3>
            <div>
                <button className="negative" onClick={decrement}>
                    {" "}
                    Lower Rate{" "}
                </button>
                <button className="postive" onClick={increment}>
                    {" "}
                    Higher Rate{" "}
                </button>

                <div className="rating-result">
                    {" "}
                    <span className="ratingText">{displayText}</span> <span className="ratedValue">{value}</span>
                </div>
            </div>
        </div>
    );
}

export default Rating;