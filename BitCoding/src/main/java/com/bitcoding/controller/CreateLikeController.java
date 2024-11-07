package com.bitcoding.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bitcoding.model.Likes;
import com.bitcoding.model.LikesDAO;

public class CreateLikeController implements iController {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String post_id = request.getParameter("post_id");
		String user_id = request.getParameter("user_id");

		Likes like = new Likes(post_id, user_id);

		LikesDAO dao = new LikesDAO();

		int result = dao.create(like);

		PrintWriter out = response.getWriter();

		if (result > 0) {
			out.print("true");
		} else {
			out.print("false");
		}
		return null;
	}

}
