package com.bitcoding.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bitcoding.model.Member;
import com.bitcoding.model.MemberDAO;

public class JoinDBController implements iController {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/*
		'email': user_info.email,
		'name': user_info.name,
		'password': user_info.password,
		'nick': user_info.nick,
		'gender': user_info.gender,
		'birth': user_info.birth,
		'phoneNumber': user_info.phoneNumber,
		'tf': user_info.tf
		*/
		System.out.println("조인DB들옴");
		request.setCharacterEncoding("UTF-8");
		String email = request.getParameter("email");
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		String nickname = request.getParameter("nickname");
		String gender = request.getParameter("gender");
		String birth = request.getParameter("birth");
		String phoneNumber = request.getParameter("phoneNumber");
		String tf = request.getParameter("tf");
		
		Member data = new Member(email, name, password, nickname, gender, birth, phoneNumber, tf, null);
		
		MemberDAO dao = new MemberDAO();
		
		response.setContentType("text/html; charset=utf-8");

		PrintWriter out = response.getWriter();
		
		int result = dao.join(data);
		
		if(result > 0) {
			out.print("true");
		}
		else {
			out.print("false");
		}
		return null;
	}

}
