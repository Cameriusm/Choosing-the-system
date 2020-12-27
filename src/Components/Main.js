import { Header } from './Header';
// import Sorting from './Components/Sorting';
// import Systems from './Components/Systems';
import React, { useState } from 'react';
// import { render } from '@testing-library/react';
import System from './System';

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => ++value); // update the state to force render
}
const Main = (initialState) => {
  let [cost, setQue1] = useState();
  const [control, setQue2] = useState();
  const [time, setQue3] = useState();
  const [length, setQue4] = useState();
  //   console.log(initialState.props);
  const onSubmit = (e) => {
    e.preventDefault();
    const newActives = {
      cost: parseInt(cost),
      control: parseInt(control),
      time: parseInt(time),
      length: parseInt(length),
    };
    // console.log(newActives);
    // Comparising algorithm
    let b = 0;
    let i = 0;
    for (i = 0; i < 6; i++) {
      initialState.props.transactions[i].status = 'inactive';
      //   console.log('clear');
    }
    i = 0;
    for (i = 0; i < 6; i++) {
      if (
        initialState.props.transactions[i].cost <= newActives.cost &&
        initialState.props.transactions[i].control >= newActives.control &&
        initialState.props.transactions[i].time <= newActives.time &&
        initialState.props.transactions[i].length >= newActives.length
      ) {
        // console.log(initialState.props.transactions[i].name);
        initialState.props.transactions[i].status = 'active';
        // console.log(initialState.props.transactions[i].status);
      }

      // console.log(initialState.transactions[i].cost)
      // console.log(initialState.transactions[i].control)
      // console.log(initialState.transactions[i].time)
      //   console.log(initialState.props);

      // console.log(initialState.transactions[i].length)
    }
    setSome(Math.random());
  };
  const [some, setSome] = useState();
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <p className="list-name">Системы</p>
          <div>
            <div className="systems-list">
              <ul>
                <System props={initialState} />
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="list-name">Ввод параметров</p>
          <div>
            <div className="sorting-list">
              <form>
                {/* <div className="radios">
              <input type="radio" id="male" name="gender" value="male"></input>
              <label htmlFor="male">1...................?</label>
              <input type="radio" id="male" name="gender" value="male"></input>
              <label htmlFor="male">2...................?</label>
              <input type="radio" id="male" name="gender" value="male"></input>
              <label htmlFor="male">3...................?</label>
            </div> */}
                <div className="questions">
                  <div>
                    <input
                      onChange={(e) => setQue1(e.target.value)}
                      type="text"
                      id="fname"
                      name="fname"
                    ></input>
                    <label htmlFor="fname">
                      Бюджет приобретения центрального контроллера/пульта?
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setQue2(e.target.value)}
                      type="text"
                      id="fname"
                      name="fname"
                    ></input>
                    <label htmlFor="fname">
                      Максимальное количество доступных адресов?
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setQue3(e.target.value)}
                      type="text"
                      id="fname"
                      name="fname"
                    ></input>
                    <label htmlFor="fname">
                      Время прохождение сигнала от адреса?
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setQue4(e.target.value)}
                      type="text"
                      id="fname"
                      name="fname"
                    ></input>
                    <label htmlFor="fname">
                      Максимальная протяженность шлейфа?
                    </label>
                  </div>
                </div>
              </form>
              <button className="confirm-button" onClick={onSubmit}>
                Подтвердить
              </button>
              <div className="about">
                <p>
                  Подходящие под данные параметры адресные системы отображатся
                  зелёным цветом в левом столбце
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Main;
