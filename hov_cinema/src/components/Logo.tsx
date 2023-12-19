import * as React from 'react';

export interface ILogoProps {
}

export default class Logo extends React.PureComponent<ILogoProps> {
  public render() {
    return (
        <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
    );
  }
}
