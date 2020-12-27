import React from 'react';

const System = (props) => {
  //   console.log(props);
  return (
    <>
      <li className={props.props.props.transactions[0].status}>Болид</li>
      <li className={props.props.props.transactions[1].status}>Астра-А</li>
      <li className={props.props.props.transactions[2].status}>Рубикон</li>
      <li className={props.props.props.transactions[3].status}>Рубеж</li>
      <li className={props.props.props.transactions[4].status}>Плазма-Т</li>
      <li className={props.props.props.transactions[5].status}>
        Гранд-Магистр
      </li>
    </>
  );
};
export default System;
