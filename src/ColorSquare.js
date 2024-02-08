export default function ColorSquare({ color, answer, setIsCorrect }) {
  const chooseColor = () => {
    console.log(color);
    color === answer ? setIsCorrect("Correct") : setIsCorrect("Incorrect")
  };

  return(
    <div
      className="colorSquare" style={{backgroundColor: color}}
      onClick={chooseColor}>
    </div>
  );
};
