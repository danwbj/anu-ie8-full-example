import * as React from 'react';
import QPaper from '../components/q-paper';
import QRadio from '../components/q-radio';
import QCheckbox from '../components/q-checkbox';
import QInput from '../components/q-input';
import ClubAuth from '../components/club-auth';

export interface HomeProps {}

export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <div>
        <ClubAuth>
          <QPaper>
            <QRadio />
            <QCheckbox />
            <QInput />
          </QPaper>
        </ClubAuth>
      </div>
    );
  }
}
