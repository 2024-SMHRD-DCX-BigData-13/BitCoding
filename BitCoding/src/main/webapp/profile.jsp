<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TOF</title>
<link rel="stylesheet" href="assets/css/profile.css">
</head>
<body>

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

	<div class="main-container">
		<!-- 왼쪽: 게시물 및 댓글 피드 -->
		<section class="left-section">
			<h2>Post</h2>
			<div class="feed">
				<article class="post">
					<h3>게시물 제목 1</h3>
					<p>이곳에 게시물 내용이 표시됩니다...</p>
				</article>
				<article class="post">
					<h3>게시물 제목 2</h3>
					<p>이곳에 게시물 내용이 표시됩니다...</p>
				</article>
				<!-- 게시물 추가 -->
			</div>
			<!-- 댓글 섹션 -->
			<div class="comments-section">
				<h2>Comment</h2>
				<div class="comments">
					<div class="comment">
						<p>
							<strong>댓글 :</strong> 저도 이 부분이 정말 좋았어요!
						</p>
					</div>
					<div class="comment">
						<p>
							<strong>댓글 :</strong> 유익한 정보 감사합니다.
						</p>
					</div>
					<div class="comment">
						<p>
							<strong>댓글 :</strong> 유익한 정보 감사합니다.
						</p>
					</div>
					<!-- 댓글 추가 가능 -->
				</div>
			</div>
		</section>

		<!-- 오른쪽: 개인정보 수정 -->
		<section class="right-section">
			<h2>내 정보</h2>
			<form class="user-info">
				<label>ID <span>user123</span></label> <label>NAME <span>홍길동</span></label>
				<label>GENDER <span>남</span></label> <label>PW <input
					type="password" placeholder="비밀번호 변경"></label> <label>TEL <input
					type="tel" placeholder="'-'를 빼고 입력해주세요"></label>
				<div class="buttons">
					<button type="submit" class="update-button">회원정보 수정</button>
					<button type="button" class="delete-button">회원탈퇴</button>
				</div>
			</form>
			<div class="ranking-section">
				<h2>나의 랭킹</h2>
				<p>
					현재 랭킹: <strong>#5</strong>
				</p>
				<p>
					총 포인트: <strong>1500점</strong>
				</p>
			</div>
		</section>
	</div>
</body>
</html>