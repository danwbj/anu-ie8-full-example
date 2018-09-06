import React from 'react';
import { Router, Link } from 'router';
import Dashboard from '../container/dashboard';
import Home from '../container/home';

export interface HomeProps {
  path;
}

class HInput extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue || ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log('onChange', e.target.value);
    this.setState({
      value: e.target.value
    });
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    return (
      <div className="h-input-wrapper">
        <input value={this.state.value} onChange={this.onChange} className="h-input" />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export interface RoutesProps {}

export default class Routes extends React.Component<RoutesProps, any> {
  public render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="dashboard">Dashboard</Link>
          <Link to="input">HInput</Link>
        </nav>
        <Router mode="hash">
          <Home path="/" />
          <Dashboard path="dashboard" />
          <HInput path="input" />
        </Router>
      </div>
    );
  }
}
