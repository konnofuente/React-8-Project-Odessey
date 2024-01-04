import React, {useState} from "react";
import {Star} from "../Star/Star";
import './StarRatings.css'

export interface StarRatingsProps {
    maxRating: Number;

}

export function StarRatings({maxRating}: StarRatingsProps) {
    const [rating, setRating] = useState<number>(0);
    let myArray: number[] = new Array(10).fill(1);

    function handleClick(index: number) {
        setRating(index);
    }

    // @ts-ignore
    return (
        <div className="row">
            {myArray.map((value, index) => (
                <div
                    onMouseEnter={() => setRating(index + 1)}
                    // onMouseOut={()=>setRating(0)}
                    onTouchMove={() => setRating(index + 1)}
                    onClick={() => handleClick(index)}>
                    <Star key={index} color="yellow"></Star>
                </div>
            ))}
            {/*<div>{rating}</div>*/}
        </div>
    );
}
