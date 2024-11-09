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
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
                    <a href="pageRanking.bit">랭킹</a>
                    <a href="#">자유게시판</a>
                </div>
            </div>
            <div class="header-right">
                <a href="#" class="icon search-icon" id = "search" aria-label="검색">
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
                        <img src="assets/images/profiles/${member.profile}" alt="Profile">
                    </a>
                    <div class="dropdown-menu" id="dropdownMenu">
                        <button class="dropdown-item" id = "myPage">마이페이지</button>
                        <button class="dropdown-item" id = "logout">로그아웃</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <main>
            <div class="share-thoughts-button">
                <img src="assets/images/profiles/${member.profile}" alt="프로필 아이콘" class="profile-icon">
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
        	<div class = postbox>
            
            <!-- 추가게시물 -->
            </div>
        </main>
               <!-- 글작성 모달 오버레이 -->
        <div class="modal-overlay"></div>
<div class="modal">
	<div class="modal-header">
		<h2>Post</h2>
		<button class="modal-close">&times;</button>
	</div>
	<form id="post-form">
		<label for="category">Category</label>
		<select id="category" name = "np_category" required>
			<option value="연애">❤️ 연애</option>
			<option value="취업/진로">💼 취업/진로</option>
			<option value="가족">👨‍👩‍👦 가족</option>
			<option value="결혼/육아">👰 결혼/육아</option>
			<option value="학업/고시">📚 학업/고시</option>
		</select>
		<label for="tf">T/F</label>
		<select id="tf" name = "np_tf" required>
			<option value="Thinking">Thinking</option>
			<option value="Feeling">Feeling</option>
			<option value="ALL">Thinking&Feeling</option>
		</select>

		<label for="title">Title</label>
		<input type="text" id="title" name = "np_title" placeholder="제목을 입력하세요" required>

		<label for="content">Content</label>
		<textarea id="content" placeholder="내용을 입력하세요" name = "np_content" required></textarea>

		<!-- 이미지 업로드 및 미리보기 -->
		<label for="image-upload">Image Upload</label>
		<input type="file" id="image-upload" name = "np_file" accept="image/*">
		<div id="image-preview" class="image-preview">
			<img src="" alt="이미지 미리보기" id="preview-img">
			<button type="button" id="remove-image">Delete</button>
		</div>

		<label for="tags" required>Tags (separated by #):</label>
		<input type="text" id="tags" name = "np_tag"placeholder="#태그를 입력하세요" value = "#">

		<button type="submit" class="submit-btn">게시글 작성</button>
	</form>
</div>

        <div class="spacer"></div>
        <div class="sidebar">
            <h3>주간 인기 TOP 10</h3>
            <ol class="top10-list">
                <li>
                    <img src="assets/images/gold.png" alt="금메달" class="trophy-icon">
                    <img src="assets/images/profiles/${member.profile}" alt="프로필" class="profile-img">
                    <div class="content">
                        <p class="author">조용현 <span class="author-tf">Feeling</span></p>
                        <a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
                    </div>
                </li>
                <li>
                     <img src="assets/images/silver.png" alt="은메달" class="trophy-icon">
                    <img src="assets/images/profiles/${member.profile}" alt="프로필" class="profile-img">
                    <div class="content">
                        <p class="author">최지한 <span class="author-tf-blue">Thinking</span></p>
                        <a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
                    </div>
                </li>
                <li>
                     <img src="assets/images/bronze.png" alt="동메달" class="trophy-icon">
                    <img src="assets/images/profiles/${member.profile}" alt="프로필" class="profile-img">
                    <div class="content">
                        <p class="author">윤이솔 <span class="author-tf">Feeling</span></p>
                        <a href="#">도구를 넘어선 개발자의 역량: "Next.js 꼭 써야할까?"</a>
                    </div>
                </li>
                <!-- 추가 항목 -->
            </ol>
        </div>
<!-- 검색 모달 창 -->
<div id="searchModalCustom" class="modal-custom">
  <div class="modal-content-custom">
    <span class="close-modal-button-custom">&times;</span>
    <h2>검색</h2>
    <div class="custom-search-bar">
      <select id="searchOptionCustom" class="custom-dropdown">
        <option value="구분">구분</option>
        <option value="제목">제목</option>
        <option value="작성자">작성자</option>
      </select>
      <input type="text" id="searchInputCustom" class="custom-input" placeholder="검색어를 입력하세요">
      <button id="searchButtonCustom" class="custom-search-btn">검색</button>
    </div>
  </div>
</div>
    </div>
</body>
</html>
