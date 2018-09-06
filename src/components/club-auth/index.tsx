import * as React from 'react';

export interface ClubAuthProps {}

export interface ClubAuthState {}

/**
 * 访问控制器
 */
export default class ClubAuth extends React.Component<ClubAuthProps, ClubAuthState> {
  constructor(props: ClubAuthProps) {
    super(props);

    this.state = {};
  }

  public render() {
    let { children } = this.props;
    return <div>{children}</div>;
  }
}
