function fetchPosts() {
  var xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xmlHttpRequest.onload = function () {
    if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300) {
      var posts = JSON.parse(xmlHttpRequest.responseText);
      displayPost(posts);
    } else {
      console.error(`Failed to fetch posts. Status: ${xmlHttpRequest.statusText}`);
    }
  };

  xmlHttpRequest.onerror = function () {
    console.error('Failed to fetch posts');
  };
  xmlHttpRequest.send();
}

function displayPost(posts) {
  const apiContainer = document.getElementById('apiSection');
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <div style="margin:1em;" id="button"> 
        <button onclick="likePost(${post.id})" class="btn btn-primary" title="like">Like</button>
        <span id="likes_${post.id}">0</span>
        <button onclick="dislikePost(${post.id})" class="btn btn-danger" title="dislike">Dislike</button>
        <span id="dislikes_${post.id}">0</span>
      </div>
    `;
    apiContainer.appendChild(postElement);
  });
}

function likePost(postId) {
  const likesElement = document.getElementById(`likes_${postId}`);

  let likes = parseInt(likesElement.innerText);
  likes++;

  likesElement.innerText = likes;
}

function dislikePost(postId) {
  const dislikesElement = document.getElementById(`dislikes_${postId}`);

  let dislikes = parseInt(dislikesElement.innerText);
  dislikes++;

  dislikesElement.innerText = dislikes;
}

document.getElementById('callApi').addEventListener('click', fetchPosts);
