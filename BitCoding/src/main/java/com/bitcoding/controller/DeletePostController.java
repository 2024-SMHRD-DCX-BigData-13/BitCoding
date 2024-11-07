package com.bitcoding.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bitcoding.model.Comment;
import com.bitcoding.model.CommentDAO;
import com.bitcoding.model.Post;
import com.bitcoding.model.PostDAO;

public class DeletePostController implements iController {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println(request.getParameter("id")+ ":스트링형태");
		int post_id = Integer.parseInt(request.getParameter("id"));
		System.out.println(post_id+"값 전달받음");
		
		
		  Post post = new Post(post_id, null, null, null, null, null, null, null, null, null, null, null);
		  Comment cmt = new Comment(0, post_id, null, null, null, null, null);
		  PostDAO dao = new PostDAO();
		  CommentDAO dao2 = new CommentDAO();
		  
		  
		  
		  PrintWriter out = response.getWriter();
		  dao2.delete(cmt);
		  
		  int result = dao.delete(post);
		  
		  if(result > 0 ) { out.print("true"); } else { out.print("false"); }
		 
		
		return null;
	}

}
