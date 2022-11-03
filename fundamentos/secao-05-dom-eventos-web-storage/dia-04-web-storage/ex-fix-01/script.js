// LOCAL STORAGE

// console.log(localStorage.length);

// localStorage.setItem('fistName', 'Adam');
// localStorage.setItem('lastName', 'Smith');
// localStorage.setItem('nome do meio', 'Juma', 'nome do terço', 'Jumiura');

// console.log(localStorage);

// localStorage.removeItem('nome do meio');
// console.log(localStorage);

// localStorage.clear();
// console.log(localStorage);


// SESSON STORAGE

// console.log(sessionStorage.length);

sessionStorage.setItem('firstName', 'Adam');
sessionStorage.setItem('lastName', 'Smith');

console.log(sessionStorage.getItem('lastName'));

sessionStorage.removeItem('lastName');
console.log(sessionStorage);

sessionStorage.clear()