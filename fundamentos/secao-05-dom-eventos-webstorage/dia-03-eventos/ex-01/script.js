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



// PARTE 03 

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
const daysMonth = document.getElementById('btn-holiday');

const changeHolidayColor = () => {
    const holidays = document.querySelectorAll('.holiday');
    let oldColor = 'rgb(238,238,238)';
    let newColor = 'green';

    for (let i = 0; i < holidays.length; i += 1) {
        if (holidays[i].style.backgroundColor === newColor) {
            holidays[i].style.backgroundColor = oldColor;
        } else {
            holidays[i].style.backgroundColor = newColor;
        }
    }

    // console.log(holidays[2].style.backgroundColor = 'red')
}

daysMonth.addEventListener('click', changeHolidayColor);



// PARTE 04

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const createButtonFriday = (element) => {
    const btnContainer = document.getElementsByClassName('buttons-container')[0];
    const btnFriday = document.createElement('button');

    let btnName = element;
    btnFriday.id = 'btn-friday';
    btnFriday.innerHTML = element;

    btnContainer.appendChild(btnFriday);
}
createButtonFriday('Sexta-feira')



// PARTE 05

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
const btnFriday = document.querySelector('#btn-friday');

const changeFriday = () => {
    const fridaysList = document.querySelectorAll('.friday');
    fridaysArr = [4, 11, 18, 25];
    let newFridayText = 'Sextou!!!';

    for (let i = 0; i < fridaysList.length; i += 1) {

       if (fridaysList[i].innerHTML !== newFridayText) {
        fridaysList[i].innerHTML = newFridayText;
       } else {
        fridaysList[i].innerHTML = fridaysArr[i];
       }
    }
}
btnFriday.addEventListener('click', changeFriday);



// PARTE 06

// Implemente duas funções que criem um efeito de “zoom”;

// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// De olho na dica 👀: Você pode utilizar a propriedade event.target.

const zoomDays = () => {
    const days = document.querySelectorAll('.day');
    // console.log(days);
    for (let i = 0; i < days.length; i += 1) {
        days[i].addEventListener('mouseover', (event) => {
            event.target.style.fontSize = '4em';
            // console.log(event.target);
        })

        days[i].addEventListener('mouseout', (event) => {
            event.target.style.fontSize = '20px';
        })
    }
}
zoomDays()



// PARTE 07

// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

const createTask = (value) => {
    const myTasks = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');

    // console.log(myTasks);
    // console.log(newTask);
    newTask.innerHTML = value;
    myTasks.appendChild(newTask);
}

createTask('Cozinhar');



// PARTE 08

// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const createColorDiv = (value) => {
    const myTasks = document.querySelector('.my-tasks');
    const colorDiv = document.createElement('div');

    colorDiv.classList.add('task');
    colorDiv.style.backgroundColor = value;

    myTasks.appendChild(colorDiv);
}
createColorDiv('red');



// PARTE 09

// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

const selectDiv = () => {
    const divTags = document.querySelectorAll('.task');
    const taskSelected = document.querySelectorAll('.task.selected');

    for (let i=0; i<divTags.length; i += 1) {
        divTags[i].addEventListener('click', (event) => {

            if (event.target.className === 'task') {
                event.target.classList.add('selected');
            } else {
                event.target.classList.remove('selected');
            }
            // gabarito usou getElementById e length na condicional;
            // como nao funcionou com query, usei outra condicional;
            changeDayColor()
        })
    } 
   

}
selectDiv();



// PARTE 10

// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

const changeDayColor = () => {
    const days = document.querySelectorAll('.day');
    let div = document.querySelector('.selected');
    // só funcionou quando usei query sem All
    let divColor = div.style.backgroundColor;
    // console.log(div[0].style.backgroundColor);

    for (let i = 0; i < days.length; i += 1) {
        let originalColor = 'rgb(119,119,119)';
        
        days[i].addEventListener('click', (event) => {
            if (event.target.style.color !== divColor) {
            event.target.style.color = divColor;
            } else {
            event.target.style.color = originalColor;
            }
        })
    }
}
changeDayColor();






