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

// Usa o end pont para acessar no json a chave 'users'; 
fetch (USERS_API)
.then(responseApi => responseApi.json())
.then(responseJson => fillUsersSelect(responseJson.users))
.catch(error => fillErrorMessage(error));


usersSelect.addEventListener('change', () => {
  clearPageData();
  const userId = event.target.value;
  
  fetch (`${USERS_POSTS_API}${userId}`)
  .then(responseApi => responseApi.json())
  .then(responseJson => {
    const postId = responseJson.posts[0].id;
    fillPosts(responseJson.posts)
    return postId
  })
  .then(responsePostId => 
    fetch(`https://dummyjson.com/posts/${responsePostId}/comments`)
    .then(responseIdApi => responseIdApi.json())
    .then(responseIdJson => fillFeaturedPostComments(responseIdJson.comments))
  )
  .catch(error => fillErrorMessage(error));

// Em vez de encadear os thens acima, essa é a alternativa abaixo;
// Teria que apagar a partir da linha 31, tirando tb a const postId e return;
  // fetch (`${USERS_POSTS_API}${userId}`)
  // .then(response => response.json())
  // .then(response => response.posts[0].id)
  // // .then(response => console.log(response.posts[0].id));
  // .then(commentId => fetch (`https://dummyjson.com/posts/${commentId}/comments`))
  // .then(response2 => response2.json())
  // .then(response2 => fillFeaturedPostComments(response2.comments))
  // .catch(error => fillErrorMessage(error));
});
