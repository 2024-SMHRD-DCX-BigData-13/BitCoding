$(document).ready(function() {
	let hideTimeout;
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
	$('#logout').on('click', logout);

	$('.increase-count-button').on('click', function() {
		// 버튼 클릭 시 애니메이션 클래스 추가
		$(this).addClass('animate');

		// 애니메이션이 끝난 후 클래스 제거
		setTimeout(() => {
			$(this).removeClass('animate');
		}, 300); // 애니메이션 지속 시간과 동일
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