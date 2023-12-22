document.getElementById('submitComment').addEventListener('click', function() {
    var comment = document.getElementById('commentInput').value;
    addComment(comment);
    clearInput();
  });

  function addComment(comment) {
    var commentContainer = document.getElementById('commentContainer');
    var newComment = document.createElement('p');
    newComment.textContent = comment;
    commentContainer.appendChild(newComment);
  }
  
  function clearInput() {
    document.getElementById('commentInput').value = '';
  }
  
  
  
  



