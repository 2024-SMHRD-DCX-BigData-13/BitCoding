<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>고민 상담</title>
<link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
	<header>
		<div class="header-center">
			<div class="header-left">
				<div class="logo">Thinking? Feeling!</div>
				<div class="header-links">
					<a href="#">테스트 트렌드</a> <a href="#">고민 Q&A</a> <a href="#">추천
						컨텐츠</a>
				</div>
			</div>
			<div class="header-right">
				<a href="#" class="icon search-icon" aria-label="검색"> <!-- 검색 아이콘 SVG -->
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
						fill="currentColor" viewBox="0 0 24 24">
                        <path
							d="M10 2a8 8 0 105.292 14.292l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                    </svg>
				</a> <a href="#" class="icon notification-icon" aria-label="알림"> <!-- 알림 아이콘 SVG -->
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
						fill="currentColor" viewBox="0 0 24 24">
                        <path
							d="M12 2a7 7 0 00-7 7v5H4v2h16v-2h-1v-5a7 7 0 00-7-7zm-3 16h6a3 3 0 01-6 0z" />
                    </svg>
				</a> <a href="#" class="profile-icon" aria-label="프로필"> <!-- 프로필 이미지 -->
					<img src="assets/images/profile.jpg" alt="Profile" />
				</a>
			</div>
		</div>
	</header>

	<div class="container">
		<!-- Main Content -->
		<main>
			<div class="share-thoughts-button">
				<img src="assets/images/profile.jpg" alt="프로필 아이콘" class="profile-icon">
				<span class="button-text">나누고 싶은 생각이 있으신가요?</span>
				<svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="16"
					height="16" fill="currentColor" viewBox="0 0 24 24">
        <path
						d="M21.7 7.3l-5-5a1 1 0 00-1.4 0L2 15.6V20a1 1 0 001 1h4.4L21.7 8.7a1 1 0 000-1.4zm-14.8 12H4v-2.9l10.3-10.3 2.9 2.9L6.9 19.3z" />
    </svg>
			</div>
			<div class="post">
				<div class="post-header">
					<img src="assets/images/profile.jpg" alt="Profile"
						class="profile-image">
					<div class="post-info">
						<div class="post-author">사용자 이름</div>
						<div class="post-role">진행 중인 고민</div>
						<div class="post-date">작성일: 2024년 11월 1일</div>
					</div>
					<!-- 수정 및 삭제 버튼 컨테이너 -->
   						 <div class="post-actions2">
       					<span class="edit-button">
                        <i class="fas fa-edit"></i> 수정
                        </span>
                        <span class="delete-button">
                        <i class="fas fa-trash-alt"></i> 삭제
                        </span>
    				</div>
				</div>
				
				<div class="post-title">이 고민에 대한 솔루션이 필요해요</div>
				<div class="post-content">저는 현재 진로에 대해 고민이 많습니다. T/F 테스트를 통해
					진로를 결정하는 데 도움이 되는 팁을 얻고 싶어요. 어떤 방향으로 가야 할지 모르겠어요...</div>
				<div class="post-actions">
					<button>공감해요 👍</button>
					<button>댓글</button>
					<button>공유</button>
				</div>
			</div>

			<div class="post">
				<div class="post-header">
					<img src="assets/images/profile.jpg" alt="Profile"
						class="profile-image">
					<div class="post-info">
						<div class="post-author">김철수</div>
						<div class="post-role">직장 내 인간관계 고민</div>
						<div class="post-date">작성일: 2024년 10월 25일</div>
					</div>
				</div>
				<div class="post-title">동료와의 관계를 어떻게 개선할까요?</div>
				<div class="post-content">최근 직장에서 동료와의 관계 때문에 스트레스를 받고 있어요.
					T/F 테스트로 내 성향을 파악하고 관계를 개선하는 방법을 찾고 싶습니다. 조언 부탁드려요...</div>
				<div class="post-actions">
					<button>공감해요 👍</button>
					<button>댓글</button>
					<button>공유</button>
				</div>
			</div>

			<div class="post">
				<div class="post-header">
					<img src="assets/images/profile.jpg" alt="Profile"
						class="profile-image">
					<div class="post-info">
						<div class="post-author">박민지</div>
						<div class="post-role">생활과 진로 균형 고민</div>
						<div class="post-date">작성일: 2024년 10월 20일</div>
					</div>
				</div>
				<div class="post-title">진로와 개인 생활의 균형을 찾고 싶어요</div>
				<div class="post-content">진로와 개인 생활을 어떻게 균형 있게 맞춰야 할지 고민입니다.
					T/F 테스트를 통해 삶의 우선순위를 파악할 수 있는 방법이 있을까요? 조언 부탁드립니다...</div>
				<div class="post-actions">
					<button>공감해요 👍</button>
					<button>댓글</button>
					<button>공유</button>
				</div>
			</div>
		</main>

		<!-- 빈 여백을 위한 Spacer -->
		<div class="spacer"></div>

		<div class="sidebar">
			<h3>주간 인기 TOP 10</h3>
			<ol class="top10-list">
				<li>
					<div class="rank">1</div>
					<div class="content">
						<div class="author-info">
							<img src="assets/images/profile.jpg" alt="프로필"
								class="profile-img">
							<p class="author">김의중 개발자</p>
						</div>
						<a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
					</div>
				</li>
				<li>
					<div class="rank">2</div>
					<div class="content">
						<div class="author-info">
							<img src="assets/images/profile.jpg" alt="프로필"
								class="profile-img">
							<p class="author">조현욱 페이워치 소프트웨어 엔지니어</p>
						</div>
						<a href="#">동기부여는 회사가 책임져 주세요</a>
					</div>
				</li>
				<!-- 추가 항목 -->
			</ol>
		</div>
	</div>
</body>
</html>
