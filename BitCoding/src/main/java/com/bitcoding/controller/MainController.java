package com.bitcoding.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("*.bit")
public class MainController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private HashMap<String, iController> pageHandler;
	@Override
	public void init() throws ServletException {
		
		pageHandler = new HashMap<String, iController>();
		pageHandler.put("/home.bit", new PageHomeController());
		pageHandler.put("/join.bit", new PageJoinController());
		pageHandler.put("/checkEmail.bit", new CheckEmailController());
		pageHandler.put("/joindb.bit", new JoinDBController());
		pageHandler.put("/login.bit", new PageLoginController());
		pageHandler.put("/logindb.bit", new LoginDBController());
		pageHandler.put("/logout.bit", new LogoutController());
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
		}

		if(nextPage != null) {
			if(!nextPage.contains("redirect:/")) {
				RequestDispatcher rd = request.getRequestDispatcher("WEB-INF/views/"+nextPage+".jsp");
				rd.forward(request, response);
			}
			else {
				response.sendRedirect(nextPage.replace("redirect:/", ""));
			}
			
		}
		
	}
}
