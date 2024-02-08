export default function ColorSquare({ color, answer, setIsCorrect, isCorrect }) {
  const chooseColor = () => {
    console.log(isCorrect);
    if (isCorrect) {
      return
    }
    color === answer ? setIsCorrect("Correct") : setIsCorrect("Incorrect")
  };

  return(
    <div
      className="colorSquare" style={{backgroundColor: color}}
      onClick={chooseColor}>
    </div>
  );
};
