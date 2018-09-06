import * as React from 'react';

import QCheckBox from '../components/q-checkbox';

export interface DashboardProps {
  path;
  count;
  addByOne;
  addByOneAsync;
}

export default class Dashboard extends React.Component<DashboardProps, any> {
  public render() {
    let { props } = this;
    console.log(props);
    return (
      <div>
        <h2>Dashboard</h2>
        <h1>The count is: {props.count}</h1>
        <button onClick={props.addByOne}>Add 1</button>
        <button onClick={props.addByOneAsync}>Add 1 Async</button>
        <QCheckBox />
      </div>
    );
  }
}
