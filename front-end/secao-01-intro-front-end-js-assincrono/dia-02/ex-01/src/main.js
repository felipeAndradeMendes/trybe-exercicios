import Swal from 'sweetalert2'

const superHeroeImgContainer = document.querySelector('#img-container');
const superHeroeName = document.querySelector('#display-name');
const btnSearch = document.querySelector('#btn-sortear');

// TEST IDs NOT PRESENT ON THE SUPERHEROE LIST
const getPresentIds = async () => {
  const resolve = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const data = await resolve.json();
  const idList = [];

  data.forEach(heroe => {
    idList.push(heroe.id);
  });
  return idList;
};
const idList = await getPresentIds();

// Essa função garante que só chamara os ids que existem na list da API, mantendo a aleatoriedade;
const generateRandomIdNumber = () => {
  const idListlength = idList.length;
  const randomNumber = Math.floor(Math.random() * (idListlength - 1) + 1);
  const randomId = idList[randomNumber];
  console.log(randomId);
  return randomId
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
    Swal.fire(
      `Desculpe, o Servidor não retornou o heroi esperado...`,
      `Tente novamente!`,
      'question'
    )
    console.log(error.message);
  }; 
}
btnSearch.addEventListener('click', getHeroe);

window.onload = () => {
  getPresentIds();
};

// Gera id aleatório para busca super heroi;
// Essa função nã garante que será chamado um ID existente;
// const generateRandomIdNumber = () => {
//   const randomNumber = Math.floor(Math.random() * 731) + 1;
//       return randomNumber; 
// };