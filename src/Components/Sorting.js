import React, { Component } from 'react';

export default class Sorting extends Component {
  render() {
    return (
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
                <input type="text" id="fname" name="fname"></input>
                <label htmlFor="fname">
                  Бюджет приобретения центрального контроллера/пульта?
                </label>
              </div>
              <div>
                <input type="text" id="fname" name="fname"></input>
                <label htmlFor="fname">
                  Максимальное количество доступных адресов?
                </label>
              </div>
              <div>
                <input type="text" id="fname" name="fname"></input>
                <label htmlFor="fname">
                  Время прохождение сигнала от адреса?
                </label>
              </div>
              <div>
                <input type="text" id="fname" name="fname"></input>
                <label htmlFor="fname">
                  Максимальная протяженность шлейфа?
                </label>
              </div>
            </div>
          </form>
          <button className="confirm-button">Подтвердить</button>
          <div className="about">
            <p>Подходящие под данные параметры адресные системы отображатся зеленым цветом в левом столбце</p>
          </div>
        </div>
      </div>
    );
  }
}
