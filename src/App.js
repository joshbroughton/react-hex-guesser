import { useState } from 'react';

import ColorSquare from './ColorSquare';
import randomColors from './utils/utils';



function App() {
  const [colors, setColors] = useState(randomColors());
  const [answer, setAnswer] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [isCorrect, setIsCorrect] = useState(null);

  const reset = () => {
    const newColors = randomColors();
    setColors(newColors);
    setAnswer(newColors[Math.floor(Math.random() * newColors.length)]);
    setIsCorrect(null);
  };

  return (
    <div className='container'>
      <div className='squareContainer'>
        {colors.map(color => {
          return(
            <ColorSquare
              key={color}
              color={color}
              answer={answer}
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}/>
            );
        })}
      </div>
      <h2>Click the swatch that matches: <b>{answer}</b></h2>
      {isCorrect ? <h2>{isCorrect}!</h2> : null}
      <button className='button' onClick={reset}>Play Again</button>
    </div>
  );
}

export default App;
