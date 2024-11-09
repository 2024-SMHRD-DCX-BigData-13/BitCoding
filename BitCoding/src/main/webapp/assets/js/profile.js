let user_info = {};
$(document).ready(function() {
	prepare();
	let hideTimeout;
	$('.logo').on('click', function() {
		console.log('클릭');
		window.location.href = '/BitCoding/main.bit';
	})
	$('.profile-container').on('mouseover', function() {
		console.log("gg");
		clearTimeout(hideTimeout); // 숨기기 딜레이 취소
		$('#dropdownMenu').stop(true, true).slideDown(200); // 메뉴 표시
	});

	$('.profile-container').on('mouseleave', function() {
		hideTimeout = setTimeout(function() {
			$('#dropdownMenu').stop(true, true).slideUp(200); // 메뉴 숨기기
		}, 300); // 숨기기 딜레이 추가 (300ms)
	});

	$('#logoButton').on('click', function() {
		location.reload(); // 페이지 새로고침
	});
	$('#logout').on('click', logout);

	$('.toggle-header').on("click", function() {
		console.log("이벤트 들어옴");
		$('.pwchange').toggleClass("active"); // .pwchange에 active 클래스 추가/제거
		$(this).text($('.pwchange').hasClass("active")
			? "비밀번호 변경 🔼" // 열렸을 때
			: "비밀번호 변경 🔽" // 닫혔을 때
		);
	});
});
function logout() {
	$.ajax({
		url: 'logout.bit',// 요청 URL주소
		type: 'get',// GET POST
		data: {
		},
		success: function(res) {

			if (res == "true") {
				console.log("로그아웃");
				window.location.href = '/BitCoding/home.bit';
			}
		},
	});
}

function getPost(idx, category, tf, title, content, postimage, tags, date, count) {
	
	const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e74c3c"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
	const newPostHTML = `
        <div class="post" data-category="${category}" data-id="${idx}">
    <div class="post-header">
        <div class="post-date">작성일: ${date}</div>
    </div> <!-- post-header 닫는 태그 -->

    <div class="post-title">${title}</div>
    <div class="post-content">${content}</div>
    <img class="post-image" src="assets/images/profiles/${postimage}" onerror="this.onerror=null; this.src='assets/images/nomal.webp';">

    <div class="post-tags">
        <div class="tags">
            <span style="font-weight: bold;">#${category}</span>
            <span style="font-weight: bold;">#${tf}</span>
            ${tags}
        </div>
        <div class="reaction-container">
            <span class="like-icon">${icon}</span><span class="like-count">${count}</span>
        </div>
    </div> <!-- post-tags 닫는 태그 -->
</div> <!-- post 닫는 태그 -->

    `;

	$(".postbox").append(newPostHTML);
	console.log($(".postbox"));
}

function prepare() {
	getData();
	$(".postbox").empty();
	console.log('prepare 진입');

	$.ajax({
		url: 'getPost.bit', // 서블릿 URL
		type: 'GET', // HTTP 요청 방식
		dataType: 'json', // 응답 데이터 형식
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용
			if (data) {
				data.forEach(item => {

					if (user_info.nickname === item.nick) {
						getPost(item.post_idx, item.category, item.post_type, item.post_title, item.post_content, item.post_file, item.post_tag, item.create_at, item.post_like);
						console.log(item.post_idx);
					}
				});
			}
		},
		error: function(error) {
			console.error("AJAX 호출 오류:", error);
		}
	});
}

function getData() {
	$.ajax({
		url: 'getData.bit', // 서블릿 URL
		type: 'post',  // HTTP 요청 방식
		dataType: 'json', // 응답 데이터 형식
		success: function(data) {
			// 서블릿에서 받은 데이터를 사용

			user_info.nickname = data.nick;
		}
	});
}