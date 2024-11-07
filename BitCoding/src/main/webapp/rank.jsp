<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TOF</title>
<link rel="stylesheet" href="assets/css/rank.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="assets/js/rank.js"></script>
</head>
<body>
	<!-- 랭킹 페이지 제목 -->
	<!-- 헤더 -->
	<header>
		<div class="header-center">
			<div class="header-left">
				<h1 class="logo">
					<span id="thinkingText">Thinking?</span> <span id="feelingText">Feeling!</span>
				</h1>
				<div class="header-links">
					<a href="#" class="active">랭킹</a> <a href="#">자유게시판</a>
				</div>
			</div>
			<div class="header-right">
				<a href="#" class="icon search-icon" aria-label="검색"> <svg
						xmlns="http://www.w3.org/2000/svg" width="40" height="40"
						fill="currentColor" viewBox="0 0 24 24">
                        <path
							d="M10 2a8 8 0 105.292 14.292l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                    </svg>
				</a> <a href="#" class="icon notification-icon" aria-label="알림"> <svg
						xmlns="http://www.w3.org/2000/svg" width="40" height="40"
						fill="currentColor" viewBox="0 0 24 24">
                        <path
							d="M12 2a7 7 0 00-7 7v5H4v2h16v-2h-1v-5a7 7 0 00-7-7zm-3 16h6a3 3 0 01-6 0z" />
                    </svg>
				</a>
				<div class="profile-container">
					<a href="#" class="profile-icon" id="profileImage" aria-label="프로필">
						<img src="assets/images/profile.jpg" alt="Profile">
					</a>
					<div class="dropdown-menu" id="dropdownMenu">
						<button class="dropdown-item">마이페이지</button>
						<button class="dropdown-item" id="logout">로그아웃</button>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- 배너 -->
	<div class="banner">
		<h2>Popular Right Now!</h2>
		<p>Catch up on the posts everyone’s engaging with</p>
	</div>

	<!-- 탭 버튼 섹션 -->
	<div class="tab-buttons">
		<button class="tab-button active" data-tab="posts-likes">Post
			Likes</button>
		<button class="tab-button" data-tab="comments-likes">Comment
			Likes</button>
	</div>
	<div class="content-wrapper">
		<!-- 랭킹 섹션 -->

		<div class="ranking-container">
			<!-- 통합 카테고리 - Post Likes 관련 콘텐츠 -->
			<div class="ranking-column posts-likes">
				<div class="category-title">
					<span class="tf-all-title">T/F All</span>
				</div>
				<div class="top-ranking">고민상담</div>
				<div class="top-ranking-info">좋아요 1,234회 | 작성자: QWER</div>
				<ul class="ranking-list">
					<li><span>1</span> <a href="#">고민상담</a> <span class="likes">좋아요
							1,234회</span> <span class="rank-changeup">▲ 4</span></li>
					<li><span>2</span> <a href="#">학업상담</a> <span class="likes">좋아요
							950회</span> <span class="rank-changedown">▼ 1</span></li>
					<li><span>3</span> <a href="#">연애상담</a> <span class="likes">좋아요
							560회</span> <span class="rank-changedown">▼ 1</span></li>
					<li><span>4</span> <a href="#">라라상담</a> <span class="likes">좋아요
							460회</span> <span class="rank-changedown">▼ 1</span></li>
					<li><span>5</span> <a href="#">라라상담</a> <span class="likes">좋아요
							360회</span> <span class="rank-changedown">▼ 1</span></li>
				</ul>
			</div>

			<!-- Thinking 카테고리 - Post Likes 관련 콘텐츠 -->
			<div class="ranking-column posts-likes">
				<div class="category-title">
					<span class="thinking-title">Thinking</span>
				</div>
				<div class="top-ranking">고민상담</div>
				<div class="top-ranking-info">좋아요 1,234회 | 작성자: QWER</div>
				<ul class="ranking-list">
					<li><span>1</span> <a href="#">고민상담</a> <span class="likes">좋아요
							1,234회</span> <span class="rank-changeup">▲ 2</span></li>
					<li><span>2</span> <a href="#">연애상담</a><span class="likes">좋아요
							560회</span> <span class="rank-changedown">▼ 1</span></li>
					<li><span>3</span> <a href="#">취업상담</a><span class="likes">좋아요
							240회</span> <span class="rank-changedown">▼ 1</span></li>
				</ul>
			</div>

			<!-- Feeling 카테고리 - Post Likes 관련 콘텐츠 -->
			<div class="ranking-column posts-likes">
				<div class="category-title">
					<span class="feeling-title">Feeling</span>
				</div>
				<div class="top-ranking">학업상담</div>
				<div class="top-ranking-info">좋아요 950회 | 작성자: 윈터</div>
				<ul class="ranking-list">
					<li><span>1</span> <a href="#">학업상담</a> <span class="likes">좋아요
							950회</span> <span>-</span></li>
					<li><span>2</span> <a href="#">Post1</a><span class="likes">좋아요
							460회</span> <span class="rank-changeup">▲ 1</span></li>
					<li><span>3</span> <a href="#">Post2</a><span class="likes">좋아요
							340회</span> <span class="rank-changedown">▼ 1</span></li>
				</ul>
			</div>

			<!-- 통합 카테고리 - Comment Likes 관련 콘텐츠 -->
			<div class="ranking-column comments-likes">
				<div class="category-title">
					<span class="tf-all-title">T/F All</span>
				</div>
				<!-- 통합 1위로 Feeling 카테고리에서 가장 좋아요 수가 높은 댓글 '굿'이 표시됩니다. -->
				<div class="top-ranking">굿</div>
				<div class="top-ranking-info">좋아요 1,200회 | 작성자: User789</div>
				<ul class="ranking-list">
					<li><span>1</span> <a href="#">굿</a> <span class="likes">좋아요
							1,200회</span> <span class="rank-changeup">▲ 2</span></li>
					<li><span>2</span> <a href="#">응원해요</a> <span class="likes">좋아요
							982회</span> <span class="rank-changedown">▼ 1</span></li>
					<li><span>3</span> <a href="#">화이팅</a> <span class="likes">좋아요
							760회</span> <span>-</span></li>
				</ul>
			</div>

			<!-- Thinking 카테고리 - Comment Likes 관련 콘텐츠 -->
			<div class="ranking-column comments-likes">
				<div class="category-title">
					<span class="thinking-title">Thinking</span>
				</div>
				<div class="top-ranking">응원해요</div>
				<div class="top-ranking-info">좋아요 982회 | 작성자: User456</div>
				<ul class="ranking-list">
					<li><span>1</span> <a href="#">응원해요</a> <span class="likes">좋아요
							982회</span> <span class="rank-changeup">▲ 1</span></li>
					<li><span>2</span> <a href="#">화이팅</a> <span class="likes">좋아요
							760회</span> <span class="rank-changedown">▼ 1</span></li>
					<li><span>3</span> <a href="#">으샤으샤</a> <span class="likes">좋아요
							550회</span> <span>-</span></li>
				</ul>
			</div>

			<!-- Feeling 카테고리 - Comment Likes 관련 콘텐츠 -->
			<div class="ranking-column comments-likes">
				<div class="category-title">
					<span class="feeling-title">Feeling</span>
				</div>
				<div class="top-ranking">굿</div>
				<div class="top-ranking-info">좋아요 1,200회 | 작성자: User789</div>
				<ul class="ranking-list">
					<li><span>1</span> <a href="#">굿</a> <span class="likes">좋아요
							1,200회</span> <span class="rank-changeup">▲ 2</span></li>
					<li><span>2</span> <a href="#">좋아요</a> <span class="likes">좋아요
							1,000회</span> <span>-</span></li>
					<li><span>3</span> <a href="#">힘내</a> <span class="likes">좋아요
							900회</span> <span class="rank-changedown">▼ 1</span></li>
				</ul>
			</div>
		</div>
	</div>


	<!-- footer ! -->
	<div class="footer">
		TEAM BitCoding | 스마트인재개발원 | DCX기반 빅데이터 분석서비스 개발자과정 | <br> 목포시
		산정로212번길 13 | 010 9547 1598<br> Copyright 2024. BitCoding All
		rights reserved.
	</div>
</body>
</html>