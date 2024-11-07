let user_info = {};
$(document).ready(function() {
	// js가 로드되었을때 유저 데이터 및 게시물 정보 받기
	prepare();

	$(document).on('click', '.comment-toggle', toggleComments);
	$(document).on('click', '.category-button', function() {
		selectCategory(this, $(this).data('category'));
	});

	// 게시물 수정 삭제
	$('.postbox').on('click', '.edit-button', function() {
		Swal.fire({
			title: 'information',
			text: '구현예정입니다.',
			icon: 'info',
			confirmButtonText: '확인'
		});
	});
	$('.postbox').on('click', '.delete-button', deletePost);
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

	// 게시물 좋아요 버튼 (동적 요소에 대한 이벤트 위임)
	$(document).on('click', '.increase-count-button', function() {
		const like = $(this);
		postLike(like);
	});

	// 좋아요 버튼 클릭 시 색상 변경
	$(document).on("click", ".like-button", function() {
		$(this).toggleClass("active"); // .active 클래스 토글
	});

	// 메시지 버튼 클릭 시 색상 변경
	$(document).on("click", ".chat-button", function() {
		$(this).toggleClass("active"); // .active 클래스 토글
		Swal.fire({
			title: 'Success!!',
			text: '채팅 신청이 완료되었습니다!',
			icon: 'success',
			confirmButtonText: '확인'
		});
	});


	// 댓글 작성 버튼 클릭 시
	$(document).on("click", ".add-comment-button", function() {
		const postContainer = $(this).closest(".post"); // 현재 게시물 컨테이너 찾기
		const postId = $(this).closest(".post").data("id"); // 게시물 고유 아이디값
		const inputField = postContainer.find(".new-comment"); // 해당 게시물의 댓글 입력 필드
		const commentContainer = postContainer.find(".comments"); // 해당 게시물의 댓글 목록
		inputComment(inputField, commentContainer, postId); // 특정 게시물의 필드와 목록에만 적용
	});

	// Enter 키 이벤트로 댓글 추가
	$(document).on("keypress", ".new-comment", function(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			const postContainer = $(this).closest(".post"); // 현재 게시물 컨테이너 찾기
			const postId = $(this).closest(".post").data("id"); // 게시물 고유 아이디값
			const inputField = $(this); // 현재 댓글 입력 필드
			const commentContainer = postContainer.find(".comments"); // 해당 게시물의 댓글 목록
			inputComment(inputField, commentContainer, postId);
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

	// 게시물 작성시 서버에 있는 게시물 고유키값을 가져오기 위해 다시 초기화
	location.reload();
}
function inputComment(inputField, commentContainer, postId) {
	const newCommentText = $(inputField).val();
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
		$(commentContainer).append(newComment).show();
		updateCommentCount($(commentContainer).closest('.comment-section'));

		$.ajax({
			url: 'createComment.bit', // 서블릿 URL
			type: 'post',  // HTTP 요청 방식
			data: {
				'post_id': postId,
				'cmt_content': newCommentText
			},
			success: function(res) {
				if (res == 'true') {
					console.log('DB 댓글 생성 성공')
				}
			}
		});
		$(inputField).val("");
	}
}

function getData() {
	$.ajax({
		url: 'getData.bit', // 서블릿 URL
		type: 'post',  // HTTP 요청 방식
		dataType: 'json', // 응답 데이터 형식
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용

			user_info.email = data.email;
			user_info.nickname = data.nick;
			user_info.gender = data.gender;
			user_info.profile = data.profile;
			user_info.tf = data.mem_type;
		}
	});
}
function prepare() {
	$(".postbox").empty();
	getData();
	console.log('prepare진입');
	$.ajax({
		url: 'getPost.bit', // 서블릿 URL
		type: 'GET',  // HTTP 요청 방식
		dataType: 'json', // 응답 데이터 형식
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용
			if (data) {
				data.forEach(item => {
					console.log(item.post_idx);
					getPost(item.post_idx, item.profile, item.category, item.nick, item.mem_type, item.post_type, item.post_title, item.post_content, item.post_file, item.post_tag, item.create_at);
				});
			}
			// 게시물 로딩이 완료된 후 댓글 로딩
			loadComments();
		}
	});
}
function getPost(idx, profile, category, author, user_type, tf, title, content, postimage, tags, date) {
	const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
	const newPostHTML = `
        <div class="post" data-category="${category}" data-id =${idx}>
            <div class="post-header">
                <img src="assets/images/profiles/${profile}" alt="Profile" class="profile-image">
                <div class="post-info">
                    <div class="post-author">${author}</div>
                    <div class="post-role">${user_type}</div>
                    <div class="post-date">작성일: ${date}</div>
                </div>
                <div class="post-actions2">
                    <span class="edit-button"><i class="fas fa-edit"></i> Update</span>
                    <span class="delete-button"><i class="fas fa-trash-alt"></i> Delete</span>
                </div>
            </div>
            <div class="post-title">${title}</div>
            <div class="post-content">${content}</div>
            <img class="post-image" src="assets/images/profiles/${postimage}" alt="">
            <div class="post-tags"><span>#${category}&nbsp;</span><span>#${tf}&nbsp;</span>${tags}</div>
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
	const lastPost = $(".postbox .post").last();
	// 작성자와 현재 유저 정보 비교 후 버튼 숨기기
	if (author !== user_info.nickname) {

		lastPost.find(".edit-button, .delete-button").css("display", "none");
	}
	if (author !== user_info.nickname && tf !== user_info.tf) {

		// 해당 게시물의 댓글 입력창 숨기기
		lastPost.find(".comment-form").css("display", "none");

		// 안내 문구 추가
		lastPost.find(".comment-section").append(`
        <div class="comment-notice" style="color: #1E90FF; font-weight:bold">
            댓글을 작성할 권한이 없습니다.
        </div>
    `);
	}
}

function getComment(post_idx, profile, nick, content) {
	// post_idx로 해당 게시물의 commentContainer 찾기
	const commentContainer = $(`.post[data-id='${post_idx}']`).find(".comments");

	const chatIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 3c-4.96 0-9 3.77-9 8.39 0 2.1.84 4.01 2.21 5.5-1.44 3.15-2.03 3.66-2.03 3.66-.15.13-.2.34-.12.51.08.17.26.28.46.28 1.04 0 4.35-1.47 6.31-2.65.86.24 1.76.36 2.7.36 4.96 0 9-3.77 9-8.39S16.96 3 12 3z"></path></svg>`;
	const likeIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`;

	const newComment = `
        <div class="comment">
            <img src="assets/images/profiles/${profile}" class="comments-img">
            <span class="comment-author">${nick} :&nbsp;</span>
            <p class="comment-text">${content}</p>
            <div class="like-chat-buttons">
                <button class="chat-button">${chatIcon}</button>
                <button class="like-button">${likeIcon}</button>
            </div>
        </div>
    `;

	// 댓글 추가 및 표시
	$(commentContainer).append(newComment).show();

	// 댓글 수 업데이트
	updateCommentCount($(commentContainer).closest('.comment-section'));
}

function loadComments() {
	$.ajax({
		url: 'getComment.bit', // 서블릿 URL
		type: 'GET',  // HTTP 요청 방식
		dataType: 'json', // 응답 데이터 형식
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용
			if (data) {
				data.forEach(item => {
					/*post_idx, profile, nick, content*/
					getComment(item.post_idx, item.profile, item.nick, item.cmt_content);
				});
			}
			$('.comments').hide();
		}
	});
}

function editPost() {
	/*	console.log('에디트0들어옴');
		const post = $(this).closest(".post"); // 현재 게시물 컨테이너 찾기
		const postId = post.data("id"); // data-id 값 가져오기
		console.log('id: ', postId);
		$.ajax({
			url: 'updatePost.bit', // 서블릿 URLF
			type: 'post',  // HTTP 요청 방식
			data: {
				'id': postId
			},
			success: function(res) {
				// 서블릿에서 받은 데이터를 사용
				if (res) {
					console.log('게시물 수정 완료');
					prepare();
				}
				else {
					console.log('게시물 수정 실패');
				}
			}
		});*/
}

function deletePost() {
	console.log('딜리트0들어옴');
	const post = $(this).closest(".post"); // 현재 게시물 컨테이너 찾기
	const postId = post.data("id"); // data-id 값 가져오기
	console.log('id: ', postId);
	$.ajax({
		url: 'deletePost.bit', // 서블릿 URLF
		type: 'post',  // HTTP 요청 방식
		data: {
			'id': postId
		},
		success: function(res) {
			// 서블릿에서 받은 데이터를 사용
			if (res) {
				console.log('게시물 삭제 완료');
				prepare();
			}
			else {
				console.log('게시물 삭제 실패');
			}
		}
	});
}

function postLike(like) {
	const countType = like.data('count-type'); // 예: like
	const $countSpan = like.find(`.${countType}-count`); // 예: like-count
	let currentCount = parseInt($countSpan.text(), 10); // 현재 좋아요 수 가져오기

	// `post`라는 클래스의 부모 요소에서 `data-id` 속성 가져오기
	const postId = like.closest('.post').data('id');
	$.ajax({
		url: 'checkLike.bit', // 서블릿 URL
		type: 'GET',  // HTTP 요청 방식
		data: {
			'post_id': postId,
			'user_id': user_info.email
		},
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용
			if (data == 'true') {
				$countSpan.text(currentCount - 1); // 좋아요 수 감소
				like.removeClass('active'); // 활성화 클래스 제거
				like.find('.like-icon').css('color', 'gray'); // 아이콘 색상 회색으로 변경

				$.ajax({
					url: 'deleteLike.bit', // 서블릿 URL
					type: 'GET',  // HTTP 요청 방식
					data: {
						'post_id': postId,
						'user_id': user_info.email
					}
				});
			}
			else {
				$countSpan.text(currentCount + 1); // 좋아요 수 증가
				like.addClass('active'); // 활성화 클래스 추가
				like.find('.like-icon').css('color', 'red'); // 아이콘 색상 빨간색으로 변경
				
				$.ajax({
					url: 'createLike.bit', // 서블릿 URL
					type: 'GET',  // HTTP 요청 방식
					data: {
						'post_id': postId,
						'user_id': user_info.email
					}
				});
			}
		}
	});
}