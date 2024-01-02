import React from 'react';

import styles from './Loader.css';

export interface LoaderProps {
  prop?: string;
}

export function Loader({prop = 'Loading..'}: LoaderProps) {
  return <div className={styles.Loader}> {prop}</div>;
}
