$(document).ready(function() {
	$('#gojoin').on('click', pageMoveJoin);
	$('.login-btn').on('click', pageMoveLogin);
	$('.logo').on('click', function() {
        location.reload(); // 페이지 새로고침
    });
    
    $('.kakao-btn').on('click', kakaoalert);
    $('.email-btn').on('click', pageMoveJoin)
});
function pageMoveJoin() {
	window.location.href = '/BitCoding/join.bit';
}

function pageMoveLogin() {
	window.location.href = '/BitCoding/login.bit';
}

function kakaoalert(){
	Swal.fire({
  title: 'infomation',
  text: '준비중인 서비스입니다.',
  icon: 'info',
  confirmButtonText: '확인'
});
}