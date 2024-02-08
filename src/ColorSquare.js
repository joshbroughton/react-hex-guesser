export default function ColorSquare({ color, answer, setIsCorrect, isCorrect }) {
  const chooseColor = () => {
    if (isCorrect) {
      return
    }
    color === answer ? setIsCorrect("Correct") : setIsCorrect("Incorrect")
  };

  return(
    <div
      className="colorSquare" style={{backgroundColor: color}}
      onClick={chooseColor}>
        {isCorrect ? <h3>{color}</h3> : null}
    </div>
  );
};
