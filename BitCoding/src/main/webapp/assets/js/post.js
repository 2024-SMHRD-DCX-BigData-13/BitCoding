let user_info = {};
$(document).ready(function() {
	// js가 로드되었을때 유저 데이터 정보 받기
	$.ajax({
		url: 'getData.bit', // 서블릿 URL
		type: 'GET',  // HTTP 요청 방식
		dataType: 'json', // 응답 데이터 형식
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용

			user_info.email = data.email;
			user_info.nickname = data.nick;
			user_info.gender = data.gender;
			user_info.profile = data.profile;
			console.log('이메일' + user_info.email);
			console.log('프로필' + user_info.profile);
		}
	});
	$(document).on('click', '.comment-toggle', toggleComments);
	$(document).on('click', '.category-button', function() {
		selectCategory(this, $(this).data('category'));
	});
	// 이미지 업로드 시 미리보기
	$('#image-upload').on('change', function(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function(e) {
				$('#preview-img').attr('src', e.target.result);
				$('#image-preview').show();
			};
			reader.readAsDataURL(file);
		} else {
			$('#image-preview').hide();
		}
	});

	// 이미지 삭제 버튼 클릭 시 미리보기 제거
	$('#remove-image').on('click', function() {
		$('#image-upload').val(''); // 파일 인풋 초기화
		$('#image-preview').hide();
		$('#preview-img').attr('src', '');
	});
	// 게시물 생성
	$('#post-form').on('submit', function(event) {
		event.preventDefault();

		const file = $('#image-upload')[0].files[0];
		if (file) {
			addPost(file);
		} else {
			addPost('assets/images/profiles/profile.jpg'); // 파일이 없으면 null 전달
		}
		$('.modal').removeClass('active');
		$('.modal-overlay').removeClass('active');

		// 이미지 미리보기 숨기기 및 초기화
		$('#image-preview').hide();
		$('#preview-img').attr('src', '');
	});
	// 모달 닫기 버튼
	$('.modal-close').on('click', function() {
		$('.modal').removeClass('active');
		$('.modal-overlay').removeClass('active');
	});

	// 공감 및 위로 버튼 기능 (동적 요소에 대한 이벤트 위임)
	$(document).on('click', '.increase-count-button', function() {
		const countType = $(this).data('count-type');
		const $countSpan = $(this).find(`.${countType}-count`);
		let currentCount = parseInt($countSpan.text(), 10);
		if ($(this).hasClass('active')) {
			$('.like-icon')
			$countSpan.text(currentCount - 1);
			$(this).removeClass('active');
			$(this).find('.like-icon').css('color', 'gray'); // 아이콘 색상 회색으로 변경
		} else {
			$countSpan.text(currentCount + 1);
			$(this).addClass('active');
			$(this).find('.like-icon').css('color', 'red'); // 아이콘 색상 빨간색으로 변경
		}
	});


	// 댓글 작성 버튼 클릭 시
	$(document).on("click", ".add-comment-button", function() {
		inputComment(this);
	});

	// Enter 키 이벤트도 비슷하게 수정
	$(document).on("keypress", ".new-comment", function(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			inputComment(this);
		}
	});

	$(".share-thoughts-button").on('click', function() {
		$('.modal').addClass('active');
		$('.modal-overlay').addClass('active');
	});
	// 모달 외부 영역 클릭 시 모달 닫기
	$('.modal-overlay').on('click', function() {
		$('.modal').removeClass('active');
		$(this).removeClass('active');
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
// 게시물 동적 생성 로직
function addPost(imageDataUrl) {

	const userIcon = user_info.profile;
	const encodedFileName = encodeURIComponent(userIcon);

	// FormData 객체 생성
	const formData = new FormData();
	formData.append('author', user_info.nickname);
	formData.append('category', $('select[name="np_category"]').val());
	formData.append('tf', $('select[name="np_tf"]').val());
	formData.append('title', $('input[name="np_title"]').val());
	formData.append('content', $('textarea[name="np_content"]').val());
	formData.append('tags', $('input[name="np_tag"]').val());
	formData.append('email', user_info.email);
	formData.append('image', imageDataUrl);

	// 일반 객체 생성 (HTML에 데이터 적용하기 위함)
	const postData = {
		author: user_info.nickname,
		category: $('select[name="np_category"]').val(),
		tf: $('select[name="np_tf"]').val(),
		title: $('input[name="np_title"]').val(),
		content: $('textarea[name="np_content"]').val(),
		tags: $('input[name="np_tag"]').val(),
		image: imageDataUrl,
		profile: encodedFileName
	};

	const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
	const newPostHTML = `
        <div class="post" data-category="${postData.category}">
            <div class="post-header">
                <img src="assets/images/profile.jpg" alt="Profile" class="profile-image">
                <div class="post-info">
                    <div class="post-author">${postData.author}</div>
                    <div class="post-role">${postData.tf}</div>
                    <div class="post-date">작성일: ${new Date().toLocaleDateString()}</div>
                </div>
                <div class="post-actions2">
                    <span class="edit-button"><i class="fas fa-edit"></i> Update</span>
                    <span class="delete-button"><i class="fas fa-trash-alt"></i> Delete</span>
                </div>
            </div>
            <div class="post-title">${postData.title}</div>
            <div class="post-content">${postData.content}</div>
            <img class="post-image" src="${imageDataUrl}" alt="">
            <div class="post-tags"><span>#${postData.category}&nbsp;</span><span>#${postData.tf}&nbsp;</span>${postData.tags}</div>
            <div class="comment-section">
                <div class="reaction-container">
                    <button class="comment-toggle">💬Comments<span class="comment-count"></span></button>
                    <div class="reaction-buttons">
                        <span class="reaction-button increase-count-button" data-count-type="like"><span class = like-icon>${icon}</span><span class="like-count">0</span></span>
                    </div>
                </div>
                <div class="comments"></div>
                <div class="comment-form">
                    <input type="text" class="new-comment" placeholder="댓글을 입력하세요.">
                    <button class="add-comment-button">Submit</button>
                </div>
            </div>
        </div>
    `;

	// `postbox`에 새로운 게시물 추가
	$(".postbox").append(newPostHTML);

	// DB에 게시물 저장
	// post_idx, post_title, post_content, post_file, create_at, email, nick, post_type, profile, category, post_tag
	$.ajax({
		url: 'createPost.bit', // 서블릿 URL
		type: 'post',  // HTTP 요청 방식
		data: formData,
		processData: false, // 파일 업로드를 위해 false로 설정
		contentType: false, // 파일 업로드를 위해 false로 설정
		success: function(data) {
			if (data == 'true') {
				console.log('DB 게시물 생성 성공')
			}
		}
	});
	// 각 필드 초기화
	$('#category').val(''); // 카테고리 초기화
	$('#tf').val(''); // T/F 선택 초기화
	$('#title').val(''); // 제목 초기화
	$('#content').val(''); // 내용 초기화
	$('#image-upload').val(''); // 파일 인풋 초기화
	$('#tags').val(''); // 태그 초기화
}
function inputComment() {
	const newCommentText = $(".new-comment").val();
	const chatIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 3c-4.96 0-9 3.77-9 8.39 0 2.1.84 4.01 2.21 5.5-1.44 3.15-2.03 3.66-2.03 3.66-.15.13-.2.34-.12.51.08.17.26.28.46.28 1.04 0 4.35-1.47 6.31-2.65.86.24 1.76.36 2.7.36 4.96 0 9-3.77 9-8.39S16.96 3 12 3z"></path></svg>`;
	const likeIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`;
	const userNick = user_info.nickname;
	const userIcon = user_info.profile;
	const encodedFileName = encodeURIComponent(userIcon);

	if (newCommentText) {
		const newComment = `
                <div class="comment">
                	<img src="assets/images/profiles/${encodedFileName}" class="comments-img">
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