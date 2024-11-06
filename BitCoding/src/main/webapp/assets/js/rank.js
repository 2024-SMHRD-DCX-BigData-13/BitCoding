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
	
	 // 1. 탭 전환 기능
    $(".tab-button").click(function() {
        // 모든 탭 버튼에서 active 클래스 제거
        $(".tab-button").removeClass("active");
        // 클릭된 버튼에 active 클래스 추가
        $(this).addClass("active");

        // 선택된 탭에 해당하는 콘텐츠만 표시
        const selectedTab = $(this).data("tab");  // 탭 버튼의 data-tab 속성 값 가져오기
        $(".ranking-column").hide();  // 모든 랭킹 컬럼 숨기기
        $(`.${selectedTab}`).show();  // 선택된 탭의 콘텐츠만 표시
    });

    // 페이지가 로드될 때 기본적으로 Post Likes 탭만 표시
    $(".ranking-column").hide();  // 모든 랭킹 컬럼 숨기기
    $(".posts-likes").show();     // posts-likes 컬럼만 표시
	
	
	
	$('#logout').on('click', logout);
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