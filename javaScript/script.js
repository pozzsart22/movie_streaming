
function displayComment(comment) {
    var commentList = document.getElementById('comment-list');

    var commentItem = document.createElement('li');
    commentItem.className = 'comment-item';

    var commentAuthor = document.createElement('div');
    commentAuthor.className = 'comment-author';
    commentAuthor.textContent = comment.name;

    var commentDate = document.createElement('div');
    commentDate.className = 'comment-date';
    commentDate.textContent = new Date().toLocaleString();

    var commentText = document.createElement('div');
    commentText.textContent = comment.comment;

    commentItem.appendChild(commentAuthor);
    commentItem.appendChild(commentDate);
    commentItem.appendChild(commentText);

    commentList.appendChild(commentItem);
  }

  function handleSubmit(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var commentInput = document.getElementById('comment');

    var comment = {
      name: nameInput.value,
      email: emailInput.value,
      comment: commentInput.value
    };
     
    displayComment(comment);
    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';
  }

  var commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', handleSubmit);

