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
					<a href="#">랭킹</a> <a href="#">자유게시판</a>
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

	 <section class="ranking-page">
        <!-- 게시물 좋아요 랭킹 -->
        <div class="ranking-section">
            <h2>📄 게시물 좋아요 TOP 10</h2>
            <div class="ranking-list">
                <div class="ranking-item">
                    <span class="rank">1</span>
                    <img src="user1-profile.jpg" alt="User Profile" class="profile-pic">
                    <span class="nickname">조용현 <span class="userid">(Feeling)</span></span>
                    <span class="likes">👍 2500</span>
                    <p class="post-title">"Next.js 꼭 써야할까?"</p>
                </div>
                
                <!-- 다른 게시물 좋아요 랭킹 아이템들 -->
            </div>
        </div>

        <!-- 댓글 좋아요 랭킹 -->
        <div class="ranking-section">
            <h2>💬 댓글 좋아요 TOP 10</h2>
            <div class="ranking-list">
                <div class="ranking-item">
                    <span class="rank">1</span>
                    <img src="user2-profile.jpg" alt="User Profile" class="profile-pic">
                    <span class="nickname">최지한 <span class="userid">(Thinking)</span></span>
                    <span class="likes">👍 1800</span>
                    <p class="comment-snippet">"Next.js는 서버사이드 렌더링에 좋습니다."</p>
                </div>
                
                <!-- 다른 댓글 좋아요 랭킹 아이템들 -->
            </div>
        </div>
    </section>
    
    <!-- footer ! -->
	<div class="footer">
		TEAM BitCoding | 스마트인재개발원 | DCX기반 빅데이터 분석서비스 개발자과정 | <br> 목포시
		산정로212번길 13 | 010 9547 1598<br> Copyright 2024. BitCoding All
		rights reserved.
	</div>
</body>
</html>
