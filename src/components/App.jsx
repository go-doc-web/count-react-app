import '../index.scss';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  const onClickReset = () => {
    setCount(count * 0);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
        <button onClick={onClickReset} className="reset">
          reset
        </button>
      </div>
    </div>
  );
};
