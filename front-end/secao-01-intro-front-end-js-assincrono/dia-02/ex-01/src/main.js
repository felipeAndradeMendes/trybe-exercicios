const superHeroeImgContainer = document.querySelector('#img-container');
const superHeroeName = document.querySelector('#display-name');
const btnSearch = document.querySelector('#btn-sortear');


const generateRandomIdNumber = () => {
  const randomNumber = Math.floor(Math.random() * 731) + 1;
  return randomNumber;
};

const clearImg = () => {
  const imgGenerated = document.querySelector('#img-generated');
  if (imgGenerated) {
    superHeroeImgContainer.removeChild(imgGenerated);
  }
};

const implementElements = async () => {
  const idNumber = generateRandomIdNumber();

  const heroe = await fetch(`https://akabab.github.io/superhero-api/api/id/${idNumber}.json`);
  const data = await heroe.json();
  const heroeImg =  data.images.sm;
  const heroeName =  data.name;

  const img = document.createElement('img');
  img.setAttribute('id', 'img-generated');
  img.src = heroeImg;
  superHeroeImgContainer.appendChild(img);

  superHeroeName.innerHTML = heroeName;
};

const getHeroe = async () => {
  clearImg();
  try {
    await implementElements();
  } catch(error) {
    alert(`infelismente esse herói saiu de circulação...\nMsg técnica: ${error.message}`);
  }; 
}
btnSearch.addEventListener('click', getHeroe);