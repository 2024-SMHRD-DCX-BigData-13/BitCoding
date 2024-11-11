$(document).ready(function() {
	let hideTimeout;

	// 채팅 버튼 클릭 시 모달 열기/닫기 토글
	$('.side-chat-button').click(function() {
		const modal = $('#side-chatModal');

		if (modal.hasClass('active')) {
			modal.removeClass('active').fadeOut();
		} else {
			modal.addClass('active').fadeIn();
			$('.side-chat-content').show(); // 채팅 내용 보이기
			$('.side-chat-title').text("TF CHAT"); // 선택한 채팅방 이름 표시
		}
	});

	// 페이지 바깥 클릭 시 모달 닫기
	$(document).mouseup(function(e) {
		const modal = $('#side-chatModal');
		const button = $('.side-chat-button');

		if (!modal.is(e.target) && modal.has(e.target).length === 0 &&
			!button.is(e.target) && button.has(e.target).length === 0) {
			modal.removeClass('active').fadeOut();
		}
	});

	// 채팅 목록에서 항목 클릭 시 채팅방 열기
	$('.side-chat-item').click(function() {
		const chatName = $(this).find('.side-chat-name').text(); // 선택한 채팅방 이름 가져오기
		sideOpenChat(chatName);
	});

	// 목록으로 돌아가기 버튼 클릭 시 채팅방 닫기
	$('.side-back-button').click(function() {
		sideCloseChat();
	});

	// 보내기 버튼 클릭 시 메시지 보내기
	$('.side-chat-input button').click(function() {
		sideSendMessage();
	});
	$('.profile-container').on('mouseover', function() {
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
	$('#myPage').on('click', myPage);
	$('#logout').on('click', logout);
	$('#loading-screen').fadeOut(600);
});

$(window).on('load', function() {
	$('#loading-screen').fadeOut(600); // 600ms 동안 페이드 아웃
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
function myPage() {
	console.log("들어옴");
	$.ajax({
		url: 'pagemy.bit',// 요청 URL주소
		type: 'get',// GET POST
		data: {
		},
		success: function(res) {

			if (res == "true") {
				console.log("마이페이지 이동");
				window.location.href = '/BitCoding/pageprofile.bit';
			}
		},
	});
}

// 채팅방 열기 함수
function sideOpenChat(chatName) {
	$('.side-chat-list').hide(); // 목록 숨기기
	$('.side-chat-content').show(); // 채팅 내용 보이기
	$('.side-chat-title').text(chatName); // 선택한 채팅방 이름 표시
}

// 채팅방 닫기 함수 (목록으로 돌아가기)
function sideCloseChat() {
	$('.side-chat-content').hide(); // 채팅 내용 숨기기
	$('.side-chat-list').show(); // 목록 보이기
}

// 메시지 보내기 함수
function sideSendMessage() {
	const message = $('.side-chat-input input').val();
	if (message) {
		$('.side-messages').append(`
    <div class="side-message side-sent">
        <div class="side-message-content">
            ${message}
            <span class="side-message-time">오후 6:58</span> <!-- 예시 시간 -->
        </div>
    </div>
`);
		$('.side-chat-input input').val(''); // 입력 필드 비우기
		$('.side-messages').scrollTop($('.side-messages')[0].scrollHeight); // 스크롤을 아래로
	}
}