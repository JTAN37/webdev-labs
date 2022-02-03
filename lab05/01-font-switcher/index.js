let currFont = 1.4;

const makeBigger = () => {
   currFont += 0.2;
   setFont();
   //alert('make bigger!');
};

const makeSmaller = () => {
  currFont -= 0.2;
  setFont();
   //alert('make smaller!');
};

const setFont = () => {
  document.querySelector('.content').style.fontSize = `${currFont}em`;
}

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
