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
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="assets/js/profile.js"></script>
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
					<a href="pageRanking.bit">랭킹</a> <a href="#">자유게시판</a>
				</div>
			</div>
			<div class="header-right">
			<div class="myprofile">
				<div class="profile-container">
					<a href="#" class="profile-icon" id="profileImage" aria-label="프로필">
						<img src="assets/images/profiles/${member.profile}" alt="Profile">
					</a>
					<div class="dropdown-menu" id="dropdownMenu">
						<button class="dropdown-item" id="logout">로그아웃</button>
					</div>
					</div>
						<span class="user_info_nick"> ${member.nick}</span> <span
						class="user_info_type">${member.mem_type}</span>
				</div>
	 					<a href="#" class="icon notification-icon" aria-label="알림"> <svg
						xmlns="http://www.w3.org/2000/svg" width="40" height="40"
						fill="currentColor" viewBox="0 0 24 24">
                        <path
							d="M12 2a7 7 0 00-7 7v5H4v2h16v-2h-1v-5a7 7 0 00-7-7zm-3 16h6a3 3 0 01-6 0z" />
                    </svg>
				</a>
			</div>
		</div>
	</header>

	<div class="main-container">
		<!-- 왼쪽: 게시물 및 댓글 피드 -->
		<section class="left-section">
			<h2>Post 📌</h2>
			<div class="postbox">
				<!-- 게시물 추가 -->
			</div>
		</section>

		<!-- 오른쪽: 개인정보 수정 -->
		<section class="right-section">
			<h2>Infomation 🔒</h2>
			<form class="user-info">
				<label class="info-label"> <span class="label-text">NICK</span>
					<span class="label-value">${member.nick}</span>
				</label> <label class="info-label"> <span class="label-text">TYPE</span>
					<span class="label-value">${member.mem_type}</span>
				</label> <label class="info-label"> <span class="label-text">CREATEAT</span>
					<span class="label-value">${member.create_at}</span>
				</label>
				<!-- Toggleable section -->
				<div class="pwchange">
					<span class="toggle-header">비밀번호 변경 🔽</span>
					<!-- 클릭 가능한 제목 -->
					<div class="toggle-content">
						<!-- 슬라이드로 보여줄 내용 -->
						<label> <input type="password" placeholder="현재 비밀번호 입력">
						</label> <label> <input type="password" placeholder="새 비밀번호 입력">
						</label> <label class="last-label"> <input type="password"
							placeholder="새 비밀번호 확인">
						</label>
						<div class="buttons">
							<button type="submit" class="update-button">회원정보 수정</button>
							<button type="button" class="delete-button">회원탈퇴</button>
						</div>
					</div>
				</div>
			</form>

			<div class="ranking-section">
				<h2>Ranking 👑</h2>
				<p>
					좋아요 수 : <strong>20</strong>
				</p>
				<p>
					상위 : <strong>15%</strong>
				</p>
				<div class="progress-bar">
					<div class="progress" style="width: 15%;">상위 15%</div>
				</div>
			</div>
		</section>
	</div>
	<div class="footer">
		TEAM BitCoding | 스마트인재개발원 | DCX기반 빅데이터 분석서비스 개발자과정 | <br> 목포시
		산정로212번길 13 | 010 9547 1598<br> Copyright 2024. BitCoding All
		rights reserved.
	</div>
</body>
</html>