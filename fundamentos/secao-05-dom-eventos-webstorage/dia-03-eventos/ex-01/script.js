// PARTE 01 
// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;

// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;

// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }  
  createDaysOfTheWeek();
  

  const isFriday = (element) => {
    if (element.innerHTML === '4' 
    || element.innerHTML === '11'
    || element.innerHTML === '18'
    || element.innerHTML === '25') {
        element.classList.add('friday');
    }
  };

  const isHoliday = (element) => {
    if (element.innerHTML === '24' 
        || element.innerHTML === '25'
        || element.innerHTML === '31') {
        
        element.classList.add('holiday');
        }
  };

  const createDaysOfMonth = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthsDays = document.getElementById('days');

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        const dayLi = document.createElement('li');
        dayLi.innerHTML = decemberDaysList[i];
        dayLi.classList.add('day');
        isHoliday(dayLi);
        // console.log(dayLi);
        isFriday(dayLi);
        monthsDays.appendChild(dayLi);
    }
  }

  createDaysOfMonth()
 


  // PARTE 02
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const buttonContainer = document.querySelector('.buttons-container');

const createButtonHoliday = (btnName) => {
    let button = document.createElement('button');
    button.innerHTML = btnName;
    button.id = 'btn-holiday';
    buttonContainer.appendChild(button) ;
}
createButtonHoliday('Feriados');



// 