$(document).ready(function () {
    // 댓글 보기 토글
    $(".comment-toggle").on("click", function () {
        $(".comments").toggle();
    });

    // 공감 및 위로 버튼 기능
    $(".increase-count-button").on("click", function () {
        const countType = $(this).data("count-type");
        const $countSpan = $(this).find(`.${countType}-count`);
        let currentCount = parseInt($countSpan.text(), 10);
        $countSpan.text(currentCount + 1);
    });

    // 댓글 작성 기능
    $(".add-comment-button").on("click", function () {
        const newCommentText = $(".new-comment").val();
        if (newCommentText) {
            const newComment = `
                <div class="comment">
                    <span class="comment-author">나:</span>
                    <p class="comment-text">${newCommentText}</p>
                    <div class="like-chat-buttons">
                        <button class="chat-button">💬</button>
                        <button class="like-button">❤️</button>
                    </div>
                </div>
            `;
            $(".comments").append(newComment).show();
            $(".new-comment").val("");
        }
    });
});
