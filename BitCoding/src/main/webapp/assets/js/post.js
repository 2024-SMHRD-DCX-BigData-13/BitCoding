$(document).ready(function() {
	// 댓글 보기 토글
	$(".comment-toggle").on("click", function() {
		$(".comments").toggle();
	});

	// 공감 및 위로 버튼 기능
	$(".increase-count-button").on("click", function() {
		const countType = $(this).data("count-type");
		const $countSpan = $(this).find(`.${countType}-count`);
		let currentCount = parseInt($countSpan.text(), 10);
		$countSpan.text(currentCount + 1);
	});

	// 댓글 작성 기능
	$(".add-comment-button").on("click", function() {
		const newCommentText = $(".new-comment").val();
		if (newCommentText) {
			const newComment = `
                <div class="comment">
                    <span class="comment-author">유저1:</span>
                <p class="comment-text">초보라면 Python이나 JavaScript를 추천해요!</p>
                <div class="like-chat-buttons">
                    <button class="chat-button">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 3c-4.96 0-9 3.77-9 8.39 0 2.1.84 4.01 2.21 5.5-1.44 3.15-2.03 3.66-2.03 3.66-.15.13-.2.34-.12.51.08.17.26.28.46.28 1.04 0 4.35-1.47 6.31-2.65.86.24 1.76.36 2.7.36 4.96 0 9-3.77 9-8.39S16.96 3 12 3z"></path>
                    </svg>
                    </button>
                    <button class="like-button">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                    </button>
                     </div>
                </div>
            `;
			$(".comments").append(newComment).show();
			$(".new-comment").val("");
		}
	});
});
