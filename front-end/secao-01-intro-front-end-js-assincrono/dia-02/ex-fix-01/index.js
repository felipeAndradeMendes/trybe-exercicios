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


usersSelect.addEventListener('change', () => {
  clearPageData();
  const userId = event.target.value;
  
  fetch (`${USERS_POSTS_API}${userId}`)
  .then(response => response.json())
  .then(response => fillPosts(response.posts));
  // .then(response => console.log(response.posts));


  fetch (`${USERS_POSTS_API}${userId}`)
  .then(response => response.json())
  .then(response => response.posts[0].id)
  // .then(response => console.log(response.posts[0].id));
  .then(commentId => fetch (`https://dummyjson.com/posts/${commentId}/comments`))
  .then(response2 => response2.json())
  .then(response2 => fillFeaturedPostComments(response2.comments));
  // .then(response2 => console.log(response2.comments));



  // fetch (`https://dummyjson.com/posts/62/comments`)
  // .then(response => response.json())
  // .then(response => console.log(response));

  
// console.log(event.target.value);
// console.log('Mudou')
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
