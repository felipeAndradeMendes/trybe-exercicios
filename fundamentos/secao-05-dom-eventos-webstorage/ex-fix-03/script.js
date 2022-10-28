const header = document.getElementById('header-container');

const blockLeft = document.getElementsByClassName('emergency-tasks');

const blockRight = document.getElementsByClassName('no-emergency-tasks');

const blockLeftHeader = document.querySelectorAll('.emergency-tasks h3');

const blockRightHeader = document.querySelectorAll('.no-emergency-tasks h3');

const footer = document.querySelector('#footer-container');

header.style.backgroundColor = 'green';

blockLeft[0].style.backgroundColor = 'pink';

for (let i = 0; i < blockLeftHeader.length; i += 1) {
    blockLeftHeader[i].style.backgroundColor = 'purple';
}



blockRight[0].style.backgroundColor = 'yellow';

for (let i = 0; i < blockRightHeader.length; i += 1) {
    blockRightHeader[i].style.backgroundColor = 'black';
}


footer.style.backgroundColor = 'green';

