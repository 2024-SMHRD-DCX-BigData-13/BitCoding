package com.bitcoding.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("*.smhrd")
public class MainController extends HttpServlet {

	private HashMap<String, iController> pageHandler;
	@Override
	public void init() throws ServletException {
		
		pageHandler = new HashMap<String, iController>();
		/* pageHandler.put("/pageMain.smhrd", new PageMainController()); */

	}

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String uri = request.getRequestURI();
		
		String cpath = request.getContextPath();
		
		String mapping = uri.substring(cpath.length());

		String nextPage = null;

		iController con = pageHandler.get(mapping);
		if(con != null) {
			nextPage = con.execute(request, response);
			System.out.println(nextPage);
		}

		if(nextPage != null) {
			if(!nextPage.contains("redirect:/")) {
				RequestDispatcher rd = request.getRequestDispatcher("WEB-INF/views/"+nextPage+".jsp");
				rd.forward(request, response);
			}
			else {
				System.out.println("여기까진옴");
				response.sendRedirect(nextPage.replace("redirect:/", ""));
			}
		}
	}
}
