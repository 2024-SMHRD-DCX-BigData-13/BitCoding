
$(document).ready(function() {
	$('#logoButton').on('click', pageMoveHome);
	$('.kakao-button').on('click', kakaoalert);

});
function pageMoveHome() {
	window.location.href = '/BitCoding/home.bit';
}

function kakaoalert(){
	Swal.fire({
  title: 'infomation',
  text: '준비중인 서비스입니다.',
  icon: 'info',
  confirmButtonText: '확인'
});
}
