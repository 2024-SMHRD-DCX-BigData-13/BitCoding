$(document).ready(function() {
	let hideTimeout;

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

	// JavaScript로 슬라이드 효과 추가
	document.addEventListener("DOMContentLoaded", function() {
		const toggleHeader = document.querySelector(".toggle-header");
		const pwchangeSection = document.querySelector(".pwchange");

		toggleHeader.addEventListener("click", function() {
			pwchangeSection.classList.toggle("active"); // .pwchange에 active 클래스 추가/제거
			toggleHeader.textContent = pwchangeSection.classList.contains("active")
				? "비밀번호 변경 🔼" // 열렸을 때
				: "비밀번호 변경 🔽"; // 닫혔을 때
		});
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