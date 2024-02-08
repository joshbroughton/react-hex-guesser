export default function randomColors() {
  const colors = []
  for (let i = 0; i < 3; i++ ) {
    colors.push(randomColor())
  }
  return colors;
};

const randomColor = () => {
  const nums = []
  for (let i = 0; i < 3; i++ ) {
    nums.push(randomInteger(255).toString(16));
  }
  return("#" + nums.join(''))
};

const randomInteger = (max) => {
  return(Math.floor(Math.random() * (max + 1)))
};
