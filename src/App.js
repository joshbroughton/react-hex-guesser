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
        <ColorSquare color={colors[0]} answer={answer} setIsCorrect={setIsCorrect}/>
        <ColorSquare color={colors[1]} answer={answer} setIsCorrect={setIsCorrect}/>
        <ColorSquare color={colors[2]} answer={answer} setIsCorrect={setIsCorrect}/>
      </div>
      <h2>Click the swatch that matches: <b>{answer}</b></h2>
      <h2>{isCorrect}</h2>
      <button onClick={reset}>Play Again</button>
    </div>
  );
}

export default App;
