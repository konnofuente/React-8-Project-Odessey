import React, { useState } from "react";

import styles from "./StarRatings.css";
import { Star } from "../Star/Star";

export interface StarRatingsProps {
  prop?: string;
}

export function StarRatings({ prop = "default value" }: StarRatingsProps) {
  const [rating, setRating] = useState<number>(0);
  let myArray: number[] = new Array(5).fill(1);

  function handleClick(index: number) {
    setRating(index);
  }

  // @ts-ignore
  return (
    <div className="row">
      {myArray.map((value, index) => (
        <div 
        onMouseEnter={()=>setRating(index+1)}
        // onMouseOut={()=>setRating(0)}
        onTouchMove={()=>setRating(index + 1)}
        onClick={() => handleClick(index)}>
          <Star key={index} color="black"></Star>
        </div>
      ))}
      <div>{rating}</div>
    </div>
  );
}
