function getPost() {
  const postId = document.getElementById('postId').value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Неможливо знайти пост');
      }
      return response.json();
    })
    .then(post => {
      const postElement = document.getElementById('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button onclick="getComments(${postId})">Отримати коментарі</button>
      `;
    })
    .catch(error => {
      console.error(error);
    });
};

function getComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Неможливо знайти коментарі');
      }
      return response.json();
    })
    .then(comments => {
      const commentsElement = document.getElementById('comments');
      commentsElement.innerHTML = '';
      comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
          <h3>${comment.name}</h3>
          <p>${comment.body}</p>
        `;
        commentsElement.appendChild(commentElement);
      });
    })
    .catch(error => {
      console.error(error);
    });
};