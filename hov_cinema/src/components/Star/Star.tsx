import React from 'react';

import styles from './Star.css';

export interface StarProps {
  prop?: string;
  color:string
}

export function Star({prop = 'default value',color}: StarProps) {
  return (
    <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .587l3.668 7.425 8.332 1.21-6.001 5.851 1.416 8.251L12 18.9l-7.415 3.9 1.416-8.251-6.001-5.851 8.332-1.21L12 .587z" />
  </svg>
  );
}
