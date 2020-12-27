import React, { Component } from 'react';
import Main from './Components/Main';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {
          id: 1,
          name: 'Болид',
          status: 'inactive',
          cost: 7371,
          control: 127,
          time: 0,
          length: 3000,
        },
        {
          id: 2,
          name: 'Астра-А',
          status: 'inactive',
          cost: 6385,
          control: 250,
          time: 2,
          length: 1000,
        },
        {
          id: 3,
          name: 'Рубикон',
          status: 'inactive',
          cost: 11150,
          control: 255,
          time: 1.5,
          length: 1200,
        },
        {
          id: 4,
          name: 'Рубеж',
          status: 'inactive',
          cost: 12559,
          control: 250,
          time: 1.5,
          length: 1000,
        },
        {
          id: 5,
          name: 'Плазма-Т',
          status: 'inactive',
          cost: 4500,
          control: 255,
          time: 3,
          length: 3000,
        },
        {
          id: 6,
          name: 'Гранд-Магистр',
          status: 'inactive',
          cost: 3060,
          control: 40,
          time: 1,
          length: 500,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Main props={this.state} />
      </div>
    );
  }
}
