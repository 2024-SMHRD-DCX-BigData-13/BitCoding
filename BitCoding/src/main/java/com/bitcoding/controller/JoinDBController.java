package com.bitcoding.controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.bitcoding.model.Member;
import com.bitcoding.model.MemberDAO;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

public class JoinDBController implements iController {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// <멤버 필드 변수> email, pw, name, nick, birthdate, phone, gender, mem_type,
		// create_at
		request.setCharacterEncoding("UTF-8");
		// 1. request 객체
		// 2. 파일을 저장할 경로(상대경로)
		String savePath = request.getServletContext().getRealPath("./assets/images/profiles");
		System.out.println(savePath);
		// 3. 파일의 허용 용량
		int maxSize = 10 * 1024 * 1024;
		// 4. 파일의 이름 인코딩 방식
		String encoding = "UTF-8";
		// 5. 파일의 이름을 중복제거
		DefaultFileRenamePolicy rename = new DefaultFileRenamePolicy();

		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, encoding, rename);
		// file 이름 가져오기 + 지정된 폴더에 파일 저장
		String filename = multi.getFilesystemName("filename");

		String email = request.getParameter("email");
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		String nickname = request.getParameter("nickname");
		String gender = request.getParameter("gender");
		String birth = request.getParameter("birth");
		String phoneNumber = request.getParameter("phoneNumber");
		String tf = request.getParameter("tf");

		Member data = new Member(email, password, name, nickname, birth, phoneNumber, gender, tf, null, filename);

		MemberDAO dao = new MemberDAO();

		response.setContentType("text/html; charset=utf-8");

		PrintWriter out = response.getWriter();

		int result = dao.join(data);

		if (result > 0) {
			out.print("true");
		} else {
			out.print("false");
		}
		return null;
	}

}
