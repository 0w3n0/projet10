document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var comment = document.getElementById('comment').value;
    var commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML += '<p>' + comment + '</p>';
    document.getElementById('comment').value = '';
});