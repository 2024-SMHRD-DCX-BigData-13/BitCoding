<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOF</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/post.js"></script>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <header>
        <div class="header-center">
            <div class="header-left">
                <div class="logo" id="logoButton">
                    <span id="thinkingText" class="clickable-text">Thinking?</span>
                    <span id="feelingText" class="clickable-text">Feeling!</span>
                </div>
                <div class="header-links">
                    <a href="#">랭킹</a>
                    <a href="#">자유게시판</a>
                </div>
            </div>
            <div class="header-right">
                <a href="#" class="icon search-icon" aria-label="검색">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 2a8 8 0 105.292 14.292l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                    </svg>
                </a>
                <a href="#" class="icon notification-icon" aria-label="알림">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a7 7 0 00-7 7v5H4v2h16v-2h-1v-5a7 7 0 00-7-7zm-3 16h6a3 3 0 01-6 0z" />
                    </svg>
                </a>
                <div class="profile-container">
                    <a href="#" class="profile-icon" id="profileImage" aria-label="프로필">
                        <img src="assets/images/profile.jpg" alt="Profile">
                    </a>
                    <div class="dropdown-menu" id="dropdownMenu">
                        <button class="dropdown-item">마이페이지</button>
                        <button class="dropdown-item">로그아웃</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <main>
            <div class="share-thoughts-button">
                <img src="assets/images/profile.jpg" alt="프로필 아이콘" class="profile-icon">
                <span class="button-text">나누고 싶은 생각이 있으신가요?</span>
                <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.7 7.3l-5-5a1 1 0 00-1.4 0L2 15.6V20a1 1 0 001 1h4.4L21.7 8.7a1 1 0 000-1.4zm-14.8 12H4v-2.9l10.3-10.3 2.9 2.9L6.9 19.3z" />
                </svg>
            </div>
            <!-- 카테고리 필터 -->
        	<section class="category-filter">
            	<button class="category-button active" data-category="all">전체</button>
           	 	<button class="category-button" data-category="연애">❤️ 연애</button>
            	<button class="category-button" data-category="취업/진로">🛂 취업/진로</button>
            	<button class="category-button" data-category="가족">👨‍👩‍👦 가족</button>
            	<button class="category-button" data-category="결혼/육아">👰 결혼/육아</button>
            	<button class="category-button" data-category="학업/고시">📚 학업/고시</button>
        	</section>
            <div class="post" data-category="취업/진로">
                <div class="post-header">
                    <img src="assets/images/profile.jpg" alt="Profile" class="profile-image">
                    <div class="post-info">
                        <div class="post-author">최지한</div>
                        <div class="post-role">Thinking</div>
                        <div class="post-date">작성일: 2024년 11월 1일</div>
                    </div>
                    <div class="post-actions2">
                        <span class="edit-button"><i class="fas fa-edit"></i> Update</span>
                        <span class="delete-button"><i class="fas fa-trash-alt"></i> Delete</span>
                    </div>
                </div>
                <div class="post-title">이 고민에 대한 솔루션이 필요해요</div>
                <div class="post-content">저는 현재 진로에 대해 고민이 많습니다. T/F 테스트를 통해 진로를 결정하는 데 도움이 되는 팁을 얻고 싶어요. 어떤 방향으로 가야 할지 모르겠어요...</div>
                <div class="post-tags"><span>#취업/진로&nbsp;</span><span>#T&nbsp;</span>#프로그래밍 #커리어 #개발자 #고민</div>
                <div class="comment-section">
                    <div class="reaction-container">
                        <button class="comment-toggle">💬Comments<span>&nbsp;</span><span class="comment-count"> 0 </span></button>
                        <div class="reaction-buttons">
                            <span class="reaction-button increase-count-button" data-count-type="like">❤️Like<span class="like-count">0</span></span>
                        </div>
                    </div>
                    <div class="comments">
                    <!-- 여기에 댓글 동적 생성 -->
                    </div>
                    <div class="comment-form">
                        <input type="text" class="new-comment" placeholder="댓글을 입력하세요.">
                        <button class="add-comment-button">Submit</button>
                    </div>
                </div>
            </div>
            <!-- 추가게시물 -->
        </main>
        <div class="spacer"></div>
        <div class="sidebar">
            <h3>주간 인기 TOP 10</h3>
            <ol class="top10-list">
                <li>
                    <img src="assets/images/gold.png" alt="금메달" class="trophy-icon">
                    <img src="assets/images/profile.jpg" alt="프로필" class="profile-img">
                    <div class="content">
                        <p class="author">조용현 <span class="author-tf">Feeling</span></p>
                        <a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
                    </div>
                </li>
                <li>
                     <img src="assets/images/silver.png" alt="은메달" class="trophy-icon">
                    <img src="assets/images/profile.jpg" alt="프로필" class="profile-img">
                    <div class="content">
                        <p class="author">최지한 <span class="author-tf-blue">Thinking</span></p>
                        <a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
                    </div>
                </li>
                <li>
                     <img src="assets/images/bronze.png" alt="동메달" class="trophy-icon">
                    <img src="assets/images/profile.jpg" alt="프로필" class="profile-img">
                    <div class="content">
                        <p class="author">윤이솔 <span class="author-tf">Feeling</span></p>
                        <a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
                    </div>
                </li>
                <!-- 추가 항목 -->
            </ol>
        </div>
    </div>
</body>
</html>
