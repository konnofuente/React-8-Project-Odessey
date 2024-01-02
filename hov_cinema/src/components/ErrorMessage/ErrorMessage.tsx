import React from 'react';

import styles from './ErrorMessage.css';

export interface ErrorMessageProps {
  prop?: string;
}

export function ErrorMessage({prop = 'An Error Occured'}: ErrorMessageProps) {
  return <div className={styles.ErrorMessage}> {prop}</div>;
}
