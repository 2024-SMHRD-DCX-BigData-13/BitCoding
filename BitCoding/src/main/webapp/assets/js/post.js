$(document).ready(function() {
	$(document).on('click', '.comment-toggle', toggleComments);
	$(document).on('click', '.category-button', function() {
		selectCategory(this, $(this).data('category'));
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
		inputComment();
	});

	// Enter 키를 눌렀을 때 이벤트
	$(".new-comment").on("keypress", function(event) {
		if (event.key === "Enter") { // 엔터 키가 눌렸는지 확인
			event.preventDefault(); // 엔터 시 폼이 제출되는 경우 방지
			inputComment();
		}
	});
});

function selectCategory(button, category) {
	const categoryButtons = $('.category-button');
	const posts = $('.post');

	// 모든 카테고리 버튼의 active 클래스 초기화
	categoryButtons.removeClass('active');
	$(button).addClass('active');

	// 선택된 카테고리에 따라 게시글 표시/숨김 처리
	posts.each(function() {
		const post = $(this);
		if (category === 'all' || post.data('category') === category) {
			post.show();
		} else {
			post.hide();
		}
	});
}

function updateCommentCount(post) {
	const toggleButton = post.find('.comment-toggle');
	const comments = post.find('.comments');
	const commentCount = comments.find('.comment').length;
	toggleButton.html(`💬Comments ${commentCount}`);
}

function toggleComments() {
	const toggleButton = $(this);
	const post = toggleButton.closest('.post');
	const commentsContainer = post.find('.comments');
	const commentCount = commentsContainer.find('.comment').length;

	if (commentsContainer.is(':hidden')) {
		commentsContainer.show();
		toggleButton.html(`🔽Hide`);
	} else {
		commentsContainer.hide();
		toggleButton.html(`💬Comments ${commentCount}`);
	}
}

function inputComment() {
	const newCommentText = $(".new-comment").val();
	const chatIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 3c-4.96 0-9 3.77-9 8.39 0 2.1.84 4.01 2.21 5.5-1.44 3.15-2.03 3.66-2.03 3.66-.15.13-.2.34-.12.51.08.17.26.28.46.28 1.04 0 4.35-1.47 6.31-2.65.86.24 1.76.36 2.7.36 4.96 0 9-3.77 9-8.39S16.96 3 12 3z"></path></svg>`;
	const likeIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`;
	const userNick = "아무개";
	const userIcon = "profile.jpg";
	if (newCommentText) {
		const newComment = `
                <div class="comment">
                	<img src="assets/images/${userIcon}" class="comments-img">
                    <span class="comment-author">${userNick} :&nbsp;</span>
                <p class="comment-text">${newCommentText}</p>
                <div class="like-chat-buttons">
                    <button class="chat-button">${chatIcon}</button>
                    <button class="like-button">${likeIcon}</button>
                     </div>
                </div>
            `;
		$(".comments").append(newComment).show();
		$(".new-comment").val("");
		updateCommentCount($('.comment-section'));
	}
}
