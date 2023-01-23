import './style.css';

const btnDog = document.querySelector('#btn-dog');
const btnCat = document.querySelector('#btn-cat');
const btnSurprise = document.querySelector('#btn-surprise');
const petImg = document.querySelector('#pet-img');

const getRandomDog = async () => {
  const resolve = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await resolve.json();
  petImg.src = data.message;
};  
btnDog.addEventListener('click', getRandomDog);

const getRandomCat = async () => {
  const resolve = await fetch('https://aws.random.cat/meow');
  const data = await resolve.json();
  petImg.src = data.file;
};
btnCat.addEventListener('click', getRandomCat) ;

const surpriseMe = async () => {

  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow')
  ])
  .then(result => result.json())
  .then((data) => {
    const imgUrl = data.message || data.file;
    petImg.src = imgUrl;
  });
};
btnSurprise.addEventListener('click', surpriseMe);
