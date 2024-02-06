document.addEventListener('DOMContentLoaded', function () 
{
    let likeCount = parseInt(localStorage.getItem('page2_likeCount')) || 0;
    updateLikeCount();

    document.getElementById('likeBtn').addEventListener('click', function () {
        likeCount++;
        localStorage.setItem('page2_likeCount', likeCount.toString());
        updateLikeCount();
    });

    function updateLikeCount() {
        const likeButton = document.getElementById('likeBtn');
        likeButton.innerText = `Like (${likeCount})`;
    }

    let comments = JSON.parse(localStorage.getItem('page2_comments')) || [];

    document.getElementById('commentInput').addEventListener('input', function () {
        const commentInput = document.getElementById('commentInput');
        const commentValue = commentInput.value;
        localStorage.setItem('page2_comment', commentValue);
    });

    document.getElementById('addCommentBtn').addEventListener('click', function () {
        const commentInput = document.getElementById('commentInput');
        const commentValue = commentInput.value;
        comments.push(commentValue);
        localStorage.setItem('page2_comments', JSON.stringify(comments));
        displayAllComments();
        commentInput.value = '';
    });

    function displayAllComments() {
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = '';
        i=1;
        comments.forEach(function (comment) {
            const commentElement = document.createElement('div');
            commentElement.innerText = `Comment-${i}:  ` +comment;
            commentsContainer.appendChild(commentElement);
            i++;
        });
    }
    displayAllComments();
});