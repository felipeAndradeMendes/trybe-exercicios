import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');
const USERS_POSTS_API = 'https://dummyjson.com/posts/user/';
const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch (USERS_API)
.then(response => response.json())
.then(response => fillUsersSelect(response.users));

// fetch ('https://dummyjson.com/posts/user')
// .then(response => console.log(response));

usersSelect.addEventListener('change', () => {
  clearPageData();
  const userId = event.target.value;
  
  fetch (`${USERS_POSTS_API}${userId}`)
  .then(response => response.json())
  .then(response => console.log(response))
  
console.log(event.target.value);
console.log('Mudou')
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
